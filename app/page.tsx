"use client";

import AboutSection from "@components/aboutSection";
import ContactSection from "@components/contactSection";
import HeroSection from "@components/hero";
import JourneySection from "@components/journeySection";
import { FloatingNav } from "@components/layout/floatingNav";
import TopMenu from "@components/layout/topMenu";
import ProjectsSection from "@components/projectsSection";

export default function Home() {
  return (
    <div className="min-h-screen my-auto">
   
      <TopMenu />
      <FloatingNav />

      <main className="">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
