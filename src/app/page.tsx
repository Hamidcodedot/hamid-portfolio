import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CareerJourney from "@/components/sections/CareerJourney";
import Projects from "@/components/sections/Projects";
import Learning from "@/components/sections/Learning";
import Connect from "@/components/sections/Connect";
import Resume from "@/components/sections/Resume";
import Logo from "@/components/ui/Logo";
import { portfolioData } from "@/lib/data";

export default function Home() {
  const data = portfolioData;

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
      <footer className="py-10 border-t border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#0e0e10]/80 backdrop-blur-2xl relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <Logo size={28} />
            <p className="text-slate-600 dark:text-gray-400 text-xs font-mono">
              © {new Date().getFullYear()} Hamid Shahid. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-slate-500 dark:text-gray-500 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-[#00e5c0] animate-pulse" />
            <span>Neural Systems Operational</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
