import LandingHero from "@/components/landing_hero";
import ProjectsSeparator from "@/components/micro_components/projects_separator";
import NavBar from "@/components/nav_bar";
import WebProject from "@/components/web_project";

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingHero />
      <ProjectsSeparator />
      <WebProject />
    </main>
  );
}
