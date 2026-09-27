"use client";

import { useState, useEffect } from "react";

export type ScrollDirection = "up" | "down";

export interface ScrollState {
  direction: ScrollDirection;
  scrollY: number;
  isAtTop: boolean;
}

let globalScrollState: ScrollState = {
  direction: "down",
  scrollY: 0,
  isAtTop: true,
};

const listeners = new Set<(state: ScrollState) => void>();
let isListening = false;
let lastScrollY = 0;
let ticking = false;

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      const isAtTop = currentScrollY < 40;

      let newDirection = globalScrollState.direction;
      if (Math.abs(diff) > 6) {
        newDirection = diff > 0 ? "down" : "up";
        lastScrollY = Math.max(0, currentScrollY);
      }

      if (
        newDirection !== globalScrollState.direction ||
        isAtTop !== globalScrollState.isAtTop ||
        Math.abs(currentScrollY - globalScrollState.scrollY) > 10
      ) {
        globalScrollState = {
          direction: newDirection,
          scrollY: currentScrollY,
          isAtTop,
        };
        listeners.forEach((listener) => listener(globalScrollState));
      }

      ticking = false;
    });
    ticking = true;
  }
}

export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>(globalScrollState);

  useEffect(() => {
    // Sync initial state on mount
    const initialY = window.scrollY;
    globalScrollState = {
      direction: "down",
      scrollY: initialY,
      isAtTop: initialY < 40,
    };
    setState(globalScrollState);

    listeners.add(setState);

    if (!isListening) {
      lastScrollY = window.scrollY;
      window.addEventListener("scroll", onScroll, { passive: true });
      isListening = true;
    }

    return () => {
      listeners.delete(setState);
      if (listeners.size === 0 && isListening) {
        window.removeEventListener("scroll", onScroll);
        isListening = false;
      }
    };
  }, []);

  return state;
}

export function useScrollDirection(): ScrollDirection {
  const { direction } = useScrollState();
  return direction;
}

export function getScrollState(): ScrollState {
  return globalScrollState;
}
