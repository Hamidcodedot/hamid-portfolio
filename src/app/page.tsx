import ScrollProgress from "@/components/monograph/ScrollProgress";
import Header from "@/components/monograph/Header";
import Hero from "@/components/monograph/Hero";
import WorkTree from "@/components/monograph/WorkTree";
import SkillGraph from "@/components/monograph/SkillGraph";
import ArticlesGateway from "@/components/monograph/ArticlesGateway";
import ActivityTapestry from "@/components/monograph/ActivityTapestry";
import Journey from "@/components/monograph/Journey";
import Contact from "@/components/monograph/Contact";
import Footer from "@/components/monograph/Footer";
import MobileQuickDock from "@/components/monograph/MobileQuickDock";
import { portfolioData } from "@/lib/data";

export default function Home() {
  const data = portfolioData;

  return (
    <main className="flex min-h-screen flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-espresso text-ivory relative canvas-grain">
      <ScrollProgress />
      <Header />
      <Hero data={data.about} />
      <WorkTree pillars={data.workTree} />
      <SkillGraph skills={data.skills} certifications={data.certifications} />
      <ArticlesGateway articles={data.articles} />
      <ActivityTapestry github={data.github} />
      <Journey education={data.education} />
      <Contact />
      <Footer />
      <MobileQuickDock />
    </main>
  );
}
