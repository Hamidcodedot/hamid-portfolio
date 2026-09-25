import { NextResponse } from "next/server";
import fallbackCalendar from "@/lib/github-contributions.json";

export const revalidate = 300; // Revalidate every 5 minutes for real-time live data

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

function calculateStreakAndActiveDays(contributions: ContributionDay[]) {
  let longestStreak = 0;
  let currentStreak = 0;
  let activeDays = 0;

  for (const day of contributions) {
    if (day.count > 0) {
      activeDays++;
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return { activeDays, longestStreak };
}

export async function GET() {
  const verifiedContributions: ContributionDay[] = (fallbackCalendar.contributions || []) as ContributionDay[];
  const verifiedTotal = fallbackCalendar.total?.lastYear ?? 425;
  const defaultStats = calculateStreakAndActiveDays(verifiedContributions);

  try {
    // Attempt live fetch for Hamidcodedot
    let contributions = verifiedContributions;
    let totalContributions = verifiedTotal;

    try {
      const contribRes = await fetch(
        "https://github-contributions-api.jogruber.de/v4/Hamidcodedot?y=last",
        {
          next: { revalidate: 300 },
          headers: {
            "User-Agent": "Hamid-Portfolio-Telemetry",
          },
        }
      );

      if (contribRes.ok) {
        const contribData = await contribRes.json();
        if (Array.isArray(contribData.contributions) && contribData.contributions.length > 0) {
          contributions = contribData.contributions.map((c: any) => ({
            date: c.date,
            count: Number(c.count) || 0,
            level: Math.min(Math.max(Number(c.level) || 0, 0), 4) as 0 | 1 | 2 | 3 | 4,
          }));
        }
        if (contribData.total?.lastYear) {
          totalContributions = Number(contribData.total.lastYear);
        }
      }
    } catch {
      // In offline / proxy-restricted environments, seamless fallback to verified authentic snapshot
    }

    // Fetch user public repo stats
    let publicRepos = 9;
    try {
      const userRes = await fetch("https://api.github.com/users/Hamidcodedot", {
        next: { revalidate: 600 },
        headers: {
          "User-Agent": "Hamid-Portfolio-Telemetry",
        },
      });
      if (userRes.ok) {
        const userData = await userRes.json();
        if (typeof userData.public_repos === "number") {
          publicRepos = userData.public_repos;
        }
      }
    } catch {
      // Keep verified 9 repos
    }

    const { activeDays, longestStreak } = calculateStreakAndActiveDays(contributions);

    return NextResponse.json({
      success: true,
      username: "Hamidcodedot",
      totalContributions,
      publicRepos,
      activeDays,
      longestStreak: `${longestStreak}-Day Streak`,
      cadencePercentage: `${longestStreak}-Day Streak`,
      contributions,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error generating GitHub telemetry response:", err);
    return NextResponse.json({
      success: true,
      username: "Hamidcodedot",
      totalContributions: verifiedTotal,
      publicRepos: 9,
      activeDays: defaultStats.activeDays,
      longestStreak: `${defaultStats.longestStreak}-Day Streak`,
      cadencePercentage: `${defaultStats.longestStreak}-Day Streak`,
      contributions: verifiedContributions,
      updatedAt: new Date().toISOString(),
    });
  }
}
