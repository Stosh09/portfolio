import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <ArchitectureDiagram />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
