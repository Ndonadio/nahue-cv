import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Expertise } from "@/components/expertise";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

/**
 * Single-page CV. Sections stack in this order — the navbar anchors
 * point to the same IDs declared on each section.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
