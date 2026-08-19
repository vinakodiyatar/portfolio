import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { EngineeringFocus } from "@/components/engineering-focus";
import { AiJourney } from "@/components/ai-journey";
import { GithubSection } from "@/components/github-section";
import { ResumeCta } from "@/components/resume-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <EngineeringFocus />
        <AiJourney />
        {/* //<GithubSection /> */}
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
