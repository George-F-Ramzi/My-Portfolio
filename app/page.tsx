"use client";

import React from "react";
import LandingSection from "@/components/landing_section";
import ProjectSection from "@/components/project_section";
import Separator from "@/components/separator";
import UXSection from "@/components/ux_section";
import SkillsSection from "@/components/skills_section";
import Arrow from "@/components/arrow";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <ProjectSection />
      <Separator title="My UX UI Work" />
      <UXSection />
      <Separator title="Skills" />
      <SkillsSection />
      <a
        target="_blank"
        href="https://www.linkedin.com/in/george-ramzi-74646a228/"
        className="mt-8  bg-BP rounded-2xl h-[136px] flex items-center px-8 "
      >
        <h2 className="text-white max-[540px]:text-[32px] font-bold text-5xl grow">
          Contact Me
        </h2>
        <Arrow
          color="white"
          height="72"
          width="72"
          classNames="max-[540px]:h-[48px] max-[540px]:w-[48px]  h-[72px] w-[72px]"
        />
      </a>
    </main>
  );
}
