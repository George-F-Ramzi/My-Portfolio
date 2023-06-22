"use client";

import React from "react";
import LandingSection from "@/components/landing_section";
import ProjectSection from "@/components/project_section";
import Separator from "@/components/separator";
import UXSection from "@/components/ux_section";
import SkillsSection from "@/components/skills_section";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <ProjectSection />
      <Separator title="My UX UI Work" />
      <UXSection />
      <Separator title="Skills" />
      <SkillsSection />
    </main>
  );
}
