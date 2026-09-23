import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Hamid Shahid — The Odyssey";
    const category = searchParams.get("category") || "Engineering Field Notes";
    const readTime = searchParams.get("readTime") || "5 min read";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#141312",
            backgroundImage: "radial-gradient(rgba(200, 169, 126, 0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            padding: "60px 70px",
            border: "12px solid #1f1d1a",
            color: "#F5F2EB",
            fontFamily: "serif",
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid rgba(200, 169, 126, 0.3)",
              paddingBottom: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#C8A97E",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  fontSize: 22,
                  letterSpacing: "4px",
                  fontWeight: 600,
                  color: "#F5F2EB",
                }}
              >
                HAMID SHAHID <span style={{ color: "#C8A97E", fontSize: 18 }}>// ODYSSEY</span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(200, 169, 126, 0.15)",
                border: "1px solid rgba(200, 169, 126, 0.4)",
                padding: "6px 18px",
                borderRadius: "9999px",
                fontSize: 16,
                letterSpacing: "1px",
                color: "#C8A97E",
                textTransform: "uppercase",
              }}
            >
              {category} • {readTime}
            </div>
          </div>

          {/* Title Body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "1000px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                fontSize: title.length > 60 ? 46 : 56,
                fontWeight: 400,
                color: "#F5F2EB",
                lineHeight: 1.18,
                letterSpacing: "-0.5px",
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer Metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderTop: "1px solid rgba(200, 169, 126, 0.3)",
              paddingTop: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  border: "2px solid #C8A97E",
                  backgroundColor: "#2a2825",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C8A97E",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                HS
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 20, color: "#F5F2EB", fontWeight: 600 }}>
                  Hamid Shahid
                </span>
                <span style={{ fontSize: 15, color: "#9c9689" }}>
                  AI Engineer & Systems Architect • @Hamidcodedot
                </span>
              </div>
            </div>

            <div
              style={{
                fontSize: 16,
                color: "#C8A97E",
                letterSpacing: "1px",
              }}
            >
              hamidshahid.dev
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Failed to generate OG image";
    return new Response(message, { status: 500 });
  }
}
