import LandingHero from "@/components/landing_hero";
import ContactActions from "@/components/micro_components/contact_actions";
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
      <h2
        id="skills"
        className="text-[128px] max-[500px]:text-4xl max-[500px]:mt-12 max-[500px]:mb-8 mb-20 mt-32 font-bold leading-LH"
      >
        Skills
      </h2>
      <SkillsSection />
      <h2 className="max-[772px]:mt-[56px] mt-32 max-[772px]:mb-12 mb-24 max-[772px]:text-[32px] max-[420px]:text-[24px] leading-LH font-bold text-[64px]">
        LET`S TALK ABOUT
        <br />
        THE NEXT BIG THING.
      </h2>
      <ContactActions />
    </main>
  );
}
