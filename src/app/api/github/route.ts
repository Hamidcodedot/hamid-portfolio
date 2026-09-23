import { NextResponse } from "next/server";

export const revalidate = 300; // Revalidate every 5 minutes for real-time live data

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export async function GET() {
  try {
    // Fetch live contribution calendar for Hamidcodedot
    const contribRes = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Hamidcodedot?y=last",
      {
        next: { revalidate: 300 },
        headers: {
          "User-Agent": "Hamid-Portfolio-Telemetry",
        },
      }
    );

    let contributions: ContributionDay[] = [];
    let totalContributions = 424;

    if (contribRes.ok) {
      const contribData = await contribRes.json();
      if (Array.isArray(contribData.contributions)) {
        contributions = contribData.contributions.map((c: any) => ({
          date: c.date,
          count: Number(c.count) || 0,
          level: (Math.min(Math.max(Number(c.level) || 0, 0), 4)) as 0 | 1 | 2 | 3 | 4,
        }));
      }
      if (contribData.total?.lastYear) {
        totalContributions = Number(contribData.total.lastYear);
      }
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
      // Keep default publicRepos
    }

    // Calculate active cadence percentage (days with > 0 contributions / active days)
    const activeDays = contributions.filter((d) => d.count > 0).length;
    const cadencePercentage = contributions.length > 0
      ? ((activeDays / contributions.length) * 100).toFixed(1)
      : "98.4";

    return NextResponse.json({
      success: true,
      username: "Hamidcodedot",
      totalContributions,
      publicRepos,
      cadencePercentage: `${cadencePercentage}%`,
      contributions,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error fetching live GitHub data:", err);
    return NextResponse.json(
      {
        success: false,
        username: "Hamidcodedot",
        totalContributions: 424,
        publicRepos: 9,
        cadencePercentage: "98.4%",
        contributions: [],
      },
      { status: 500 }
    );
  }
}
