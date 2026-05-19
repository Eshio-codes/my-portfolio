import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import FloatingDock from "@/components/floating-dock"; // Import the new floating dock

export default function Home() {
  return (
    // We keep min-h-screen for scrolling, but use dynamic padding-bottom to 
    // prevent the floating dock from obscuring content on the final section.
    <main className="min-h-screen pb-20 sm:pb-32">
      {/* We are completely removing the <Navbar /> component here */}
      
      <Hero />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Add the dock at the end so it floats on top of everything */}
      <FloatingDock />
    </main>
  );
}