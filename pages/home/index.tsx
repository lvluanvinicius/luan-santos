import { AboutMe } from "@/components/app/about-me";
import { Hero } from "@/components/app/hero/hero";
import { MySkills } from "@/components/app/my-skills";
import { Skills } from "@/components/app/skills";

export function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <AboutMe />
      <MySkills />
    </>
  );
}
