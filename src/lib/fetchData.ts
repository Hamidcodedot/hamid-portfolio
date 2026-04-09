import { supabase } from "./supabase";
import { placeholderData } from "./data";

export async function getPortfolioData() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your_supabase_url")) {
    console.warn("Supabase not fully configured yet, falling back to placeholder data for UI development.");
    return placeholderData;
  }

  try {
    const [aboutReq, projectsReq, currentReq, completedReq, careerReq, filesReq] = await Promise.all([
      supabase.from("about").select("*").limit(1).single(),
      supabase.from("projects").select("*").order("created_at", { ascending: false }),
      supabase.from("learning").select("*").eq("status", "current").order("created_at", { ascending: false }),
      supabase.from("learning").select("*").eq("status", "completed").order("created_at", { ascending: false }),
      supabase.from("career_journey").select("*"),
      supabase.from("files").select("*")
    ]);

    return {
      about: aboutReq.data || null,
      projects: projectsReq.data || [],
      learning: {
        current: currentReq.data || [],
        completed: completedReq.data || []
      },
      careerJourney: careerReq.data || [],
      files: filesReq.data || []
    };
  } catch (error) {
    console.error("Supabase fetch error:", error);
    return placeholderData; // Fallback to graceful states / placeholders on error
  }
}
