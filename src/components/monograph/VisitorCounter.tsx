"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [visitorNumber, setVisitorNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function recordAndFetchVisit() {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.count === "number") {
            setVisitorNumber(data.count);
          }
        }
      } catch (err) {
        console.error("Failed to record visit:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    // Initial record
    recordAndFetchVisit();

    // Live real-time polling every 25 seconds
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/visitors");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.count === "number") {
            setVisitorNumber(data.count);
          }
        }
      } catch (err) {
        // Silently keep current count
      }
    }, 25000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-espresso-surface border border-brass/25 hover:border-brass/50 transition-all duration-300 text-xs font-sans tracking-wide shadow-sm"
      title="Live verified telemetry metric"
    >
      {/* Live Active Status Indicator Dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>

      <Eye className="w-3.5 h-3.5 text-brass" />

      {/* Visitor Counter Text */}
      <div className="text-ivory-muted flex items-center gap-1.5 font-sans text-xs">
        <span className="text-ivory-faint text-[11px] font-mono">Live:</span>
        {loading ? (
          <span className="inline-block w-24 h-3 bg-espresso-elevated rounded animate-pulse" />
        ) : (
          <span className="text-ivory font-medium">
            You are <span className="text-brass font-mono font-semibold">Mr. Visitor #{visitorNumber ?? 1}</span>
          </span>
        )}
      </div>
    </div>
  );
}
