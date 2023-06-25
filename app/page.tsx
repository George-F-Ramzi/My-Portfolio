import LandingHero from "@/components/landing_hero";
import ProjectsSeparator from "@/components/micro_components/projects_separator";
import NavBar from "@/components/nav_bar";
import SkillsSection from "@/components/skills_section";
import UXWork from "@/components/ux_work";
import WebProject from "@/components/web_project";

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingHero />
      <ProjectsSeparator />
      <WebProject />
      <UXWork />
      <h2 className="text-[128px] max-[500px]:text-4xl max-[500px]:mt-12 max-[500px]:mb-8 mb-20 mt-32 font-bold leading-LH">
        Skills
      </h2>
      <SkillsSection />
    </main>
  );
}
