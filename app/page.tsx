import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

// Dynamically import Grid
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
      <div className="bg-red-500 text-white text-2xl">Tailwind Static Test</div>
    </main>
  );
}