import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CareerJourney from "@/components/sections/CareerJourney";
import Projects from "@/components/sections/Projects";
import Learning from "@/components/sections/Learning";
import Connect from "@/components/sections/Connect";
import Resume from "@/components/sections/Resume";
import { getPortfolioData } from "@/lib/fetchData";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const revalidate = 60; // Revalidate data every minute

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <About data={data.about} />
      <CareerJourney journeys={data.careerJourney} />
      <Projects projects={data.projects} />
      <Learning data={data.learning} />
      <Resume files={data.files} />
      <Connect />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/20 mt-12 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
          <p className="text-gray-600 text-sm font-syne font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} Hamid
          </p>
        </div>
      </footer>
    </main>
  );
}
