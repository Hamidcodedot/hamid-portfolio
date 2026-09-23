import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "visitors.json");
const BASELINE_COUNT = 1;

function getStoredCount(): number {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (typeof parsed.count === "number" && !isNaN(parsed.count)) {
        return parsed.count;
      }
    }
  } catch (err) {
    console.error("Error reading visitors.json:", err);
  }
  return BASELINE_COUNT;
}

function saveCount(count: number): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify({ count, updatedAt: new Date().toISOString() }, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error("Error writing visitors.json:", err);
  }
}

export async function GET() {
  const count = getStoredCount();
  return NextResponse.json({ count, timestamp: new Date().toISOString() });
}

export async function POST(req: NextRequest) {
  try {
    const hasVisited = req.cookies.get("hamid_portfolio_visited");
    const { searchParams } = new URL(req.url);
    const force = searchParams.get("force") === "true";

    let count = getStoredCount();

    // Increment on new session or forced refresh
    if (!hasVisited || force) {
      count += 1;
      saveCount(count);

      const response = NextResponse.json({
        count,
        isNewVisitor: true,
      });

      // 6 hour cookie for visitor session count
      response.cookies.set("hamid_portfolio_visited", "true", {
        maxAge: 60 * 60 * 6,
        path: "/",
        sameSite: "lax",
      });

      return response;
    }

    return NextResponse.json({
      count,
      isNewVisitor: false,
    });
  } catch (error) {
    console.error("Failed to update visitor count:", error);
    const count = getStoredCount();
    return NextResponse.json({ count, error: "Fallback count" }, { status: 500 });
  }
}
