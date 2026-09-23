"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OdysseyVesselRotatorProps {
  specializations: string[];
}

export default function OdysseyVesselRotator({
  specializations,
}: OdysseyVesselRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specializations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [specializations.length]);

  return (
    <div
      onClick={() => setCurrentIndex((prev) => (prev + 1) % specializations.length)}
      title="Click to cycle engineering discipline"
      className="group relative cursor-pointer select-none inline-flex flex-col items-center justify-center my-3 max-w-full px-2"
    >
      {/* Floating Vessel & Text Stage */}
      <div className="relative flex items-center justify-center gap-3.5 sm:gap-5 pb-2">
        {/* Stable Anchored Odyssey Vessel */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Calm, Stable Nautical Buoyancy */}
          <motion.div
            animate={{
              y: [-1, 1.2, -1],
              rotate: [-0.6, 0.6, -0.6],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <svg
              width="44"
              height="36"
              viewBox="0 0 48 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brass transition-transform duration-300 group-hover:scale-105"
            >
              {/* Keel & Hull of Homeric Galley / Odyssey Vessel */}
              <path
                d="M 6 24 C 11 30, 36 30, 43 23 C 44.5 21.5, 44 19.5, 41 19.5 C 36 20.5, 9 20.5, 6 24 Z"
                fill="currentColor"
                fillOpacity="0.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* High Prow (Curved Beak / Ram) */}
              <path
                d="M 43 23 C 45 20, 46 16, 45 13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Stern Up-curve */}
              <path
                d="M 6 24 C 4 21, 3 17.5, 4 14.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />

              {/* Central Mast */}
              <line
                x1="25"
                y1="5"
                x2="25"
                y2="23"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              {/* Masthead Pennant Flag */}
              <motion.path
                d="M 25 5 L 16 8 L 25 11 Z"
                fill="currentColor"
                animate={{
                  d: [
                    "M 25 5 L 16 8 L 25 11 Z",
                    "M 25 5 L 14 7.5 L 25 10.5 Z",
                    "M 25 5 L 16 8 L 25 11 Z",
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main Billowing Sail (catching wind) */}
              <motion.path
                d="M 25 7 C 35 9, 38 16, 34 20.5 C 30 21.5, 25 21.5, 25 21.5 Z"
                fill="currentColor"
                fillOpacity="0.22"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
                animate={{
                  d: [
                    "M 25 7 C 35 9, 38 16, 34 20.5 C 30 21.5, 25 21.5, 25 21.5 Z",
                    "M 25 7 C 37 10, 40 17, 34 20.5 C 30 21.5, 25 21.5, 25 21.5 Z",
                    "M 25 7 C 35 9, 38 16, 34 20.5 C 30 21.5, 25 21.5, 25 21.5 Z",
                  ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Jib / Foresail */}
              <path
                d="M 23 8 L 10 20.5 C 14 21.5, 22 21.5, 23 21.5 Z"
                fill="currentColor"
                fillOpacity="0.15"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              {/* Fore Rigging */}
              <line
                x1="25"
                y1="7"
                x2="7"
                y2="21"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="2 1"
                strokeOpacity="0.45"
              />
            </svg>
          </motion.div>
        </div>

        {/* Dynamic Specialization Text Floating Upon the Water */}
        <div className="relative min-w-[220px] sm:min-w-[290px] md:min-w-[360px] text-left">
          {/* Subtle Water Reflection Shimmer beneath text */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-brass/0 via-brass/15 to-brass/0 blur-sm pointer-events-none" />

          {/* Harmonic Floating Wave Bobbing Motion for the Text */}
          <motion.div
            animate={{
              y: [-1.5, 2, -1.5],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center"
              >
                <span className="italic text-brass font-serif font-normal text-xl sm:text-2xl md:text-3xl tracking-wide whitespace-nowrap drop-shadow-[0_2px_8px_rgba(200,169,126,0.15)]">
                  {specializations[currentIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Unified Animated Flowing Water Waves spanning across beneath both Boat & Text */}
      <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] h-4 relative overflow-hidden flex items-center justify-center -mt-1">
        <svg
          viewBox="0 0 500 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-brass"
          preserveAspectRatio="none"
        >
          {/* Primary Surface Water Wave (Rippling undulating crest) */}
          <motion.path
            d="M 0 10 Q 30 4, 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.75"
            fill="none"
            animate={{
              d: [
                "M 0 10 Q 30 4, 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10",
                "M 0 10 Q 30 16, 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10",
                "M 0 10 Q 30 4, 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10",
              ],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary Harmonic Wave (Gentle offset deep ripple) */}
          <motion.path
            d="M 0 14 Q 35 18, 70 14 T 140 14 T 210 14 T 280 14 T 350 14 T 420 14 T 490 14 T 560 14"
            stroke="#F5F2EB"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeOpacity="0.35"
            fill="none"
            animate={{
              d: [
                "M 0 14 Q 35 18, 70 14 T 140 14 T 210 14 T 280 14 T 350 14 T 420 14 T 490 14 T 560 14",
                "M 0 14 Q 35 9, 70 14 T 140 14 T 210 14 T 280 14 T 350 14 T 420 14 T 490 14 T 560 14",
                "M 0 14 Q 35 18, 70 14 T 140 14 T 210 14 T 280 14 T 350 14 T 420 14 T 490 14 T 560 14",
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Micro Ripple Shimmer */}
          <motion.path
            d="M 40 18 Q 80 16, 120 18 T 200 18 T 280 18 T 360 18 T 440 18"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="4 6"
            strokeOpacity="0.3"
            fill="none"
            animate={{
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
