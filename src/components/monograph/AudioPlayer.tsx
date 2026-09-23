"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<{ oscillators: OscillatorNode[]; lfo: OscillatorNode | null }>({
    oscillators: [],
    lfo: null,
  });

  const getAudioContext = (): AudioContext => {
    if (!audioContextRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    return audioContextRef.current;
  };

  const startAmbientSynth = async () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      // Stop any existing nodes first
      stopNodes();

      const now = ctx.currentTime;

      // Master Gain for smooth volume fade
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.18, now + 1.2); // Audible, warm ambient level
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Low pass filter with breathing modulation
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(550, now);
      filter.Q.setValueAtTime(2.0, now);
      filter.connect(masterGain);

      // Subtle slow LFO for breathing oceanic swell (The Odyssey wave)
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, now); // ~8 second breath cycle
      lfoGain.gain.setValueAtTime(140, now);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      // The Odyssey Chord: D minor 9 (D2, A2, F3, A3, C4, E4)
      const harmonicFrequencies = [73.42, 110.0, 174.61, 220.0, 261.63, 329.63];
      const newOscs: OscillatorNode[] = [];

      harmonicFrequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Alternate sine and warm triangle for analog tape warmth
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);

        // Micro-detune for lush chorus texture
        const detuneOffset = (idx - 2.5) * 5;
        osc.detune.setValueAtTime(detuneOffset, now);

        // Taper high frequencies slightly
        const voiceGain = idx === 0 ? 0.35 : idx === 1 ? 0.25 : 0.18;
        oscGain.gain.setValueAtTime(voiceGain, now);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        newOscs.push(osc);
      });

      nodesRef.current = {
        oscillators: newOscs,
        lfo,
      };

      setIsPlaying(true);
    } catch (err) {
      console.error("Audio playback error:", err);
      setIsPlaying(false);
    }
  };

  const stopNodes = () => {
    const { oscillators, lfo } = nodesRef.current;
    oscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    if (lfo) {
      try {
        lfo.stop();
        lfo.disconnect();
      } catch {}
    }
    nodesRef.current = { oscillators: [], lfo: null };
  };

  const stopAmbientSynth = () => {
    if (audioContextRef.current && gainNodeRef.current) {
      const ctx = audioContextRef.current;
      const now = ctx.currentTime;
      const currentGain = gainNodeRef.current.gain.value;

      gainNodeRef.current.gain.cancelScheduledValues(now);
      gainNodeRef.current.gain.setValueAtTime(Math.max(currentGain, 0.0001), now);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      setTimeout(() => {
        stopNodes();
        setIsPlaying(false);
      }, 650);
    } else {
      stopNodes();
      setIsPlaying(false);
    }
  };

  const toggleAudio = async () => {
    if (isPlaying) {
      stopAmbientSynth();
    } else {
      await startAmbientSynth();
    }
  };

  useEffect(() => {
    return () => {
      stopNodes();
      if (audioContextRef.current) {
        try {
          audioContextRef.current.close();
        } catch {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      type="button"
      className="flex items-center justify-center gap-2.5 min-h-[44px] px-3.5 py-2 rounded-full border border-brass/30 bg-espresso-surface/80 hover:bg-espresso-elevated hover:border-brass/60 transition-all duration-200 text-ivory text-xs group active:scale-[0.98] whitespace-nowrap flex-shrink-0"
      title={isPlaying ? "Mute Odyssey Theme" : "Play Odyssey Theme"}
      aria-label={isPlaying ? "Mute Odyssey Theme" : "Play Odyssey Theme"}
    >
      {/* Animated Soundwave Equalizer Bars */}
      <div className="flex items-center gap-0.5 h-3.5 w-3.5 justify-center">
        <span
          className={`w-0.5 bg-brass rounded-full transition-all duration-300 ${
            isPlaying ? "h-3 animate-soundwave" : "h-1"
          }`}
          style={{ animationDelay: "0ms" }}
        />
        <span
          className={`w-0.5 bg-brass rounded-full transition-all duration-300 ${
            isPlaying ? "h-3.5 animate-soundwave" : "h-1"
          }`}
          style={{ animationDelay: "200ms" }}
        />
        <span
          className={`w-0.5 bg-brass rounded-full transition-all duration-300 ${
            isPlaying ? "h-2 animate-soundwave" : "h-1"
          }`}
          style={{ animationDelay: "400ms" }}
        />
      </div>

      <span className="font-serif italic text-brass-light tracking-wide hidden sm:inline">
        Odyssey Theme
      </span>

      <span className="text-[10px] uppercase font-sans tracking-widest text-ivory-faint group-hover:text-brass">
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-brass" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-ivory-faint" />
        )}
      </span>
    </button>
  );
}
