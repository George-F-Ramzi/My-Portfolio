"use client";

import React, { useEffect, useState } from "react";
import LandingSection from "@/components/landing_section";
import ProjectSection from "@/components/project_section";
import Separator from "@/components/separator";
import UXSection from "@/components/ux_section";
import SkillsSection from "@/components/skills_section";
import ContactMe from "@/components/contact_me";

export default function Home() {
  const [postion, setPostion] = useState<number>(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setPostion(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <LandingSection />
      <ProjectSection />
      <Separator
        show={postion > 600 ? "Fade" : "opacity-0"}
        title="My UX UI Work"
      />
      <UXSection show={postion > 840 ? "Fade" : "opacity-0"} />
      <Separator show={postion > 1040 ? "Fade" : "opacity-0"} title="Skills" />
      <SkillsSection show={postion > 1240 ? "Fade" : "opacity-0"} />
      <ContactMe show={postion > 1740 ? "Fade" : "opacity-0"} />
    </main>
  );
}
