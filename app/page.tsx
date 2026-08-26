import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Certificates } from "@/components/certificates";
import { Projects } from "@/components/projects";
import { Blogs } from "@/components/blogs";
import { TechStack } from "@/components/tech-stack";
import { EngineeringFocus } from "@/components/engineering-focus";
import { AiJourney } from "@/components/ai-journey";
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
        <Experience />
        <Certificates />
        <Projects />
        <Blogs />
        <TechStack />
        <EngineeringFocus />
        <AiJourney />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
