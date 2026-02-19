"use client";

import AboutSection from "@components/aboutSection";
import ContactSection from "@components/contactSection";
import HeroSection from "@components/hero";
import JourneySection from "@components/journeySection";
import { FloatingNav } from "@components/layout/floatingNav";
import GlobalParallax from "@components/layout/globalParallax";
import TopMenu from "@components/layout/header";
import ProjectsSection from "@components/projectsSection";
import useScrollSections from "@lib/hooks/useScrollSections";

export default function Home() {

  return (
    // <GlobalParallax>
    <div className="min-h-screen my-auto relative">
      {/* <div className="absolute inset-0 opacity-[0.3]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div> */}

      {/* <FloatingNav /> */}

      <main className="">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* </GlobalParallax> */}
    </div>
  );
}
