import { createDefine } from "@fresh/core";
import Hero from "../components/about/Hero.tsx";
import ProfessionalJourney from "../components/about/ProfessionalJourney.tsx";
import TechnicalExpertise from "../components/about/TechnicalExpertise.tsx";
import WhatIWriteAbout from "../components/about/WhatIWriteAbout.tsx";
import SocialLinks from "../components/about/SocialLinks.tsx";

const { page } = createDefine();

export default page(function AboutMe() {
  const skills = [
    "TypeScript",
    "Deno",
    "React",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
  ];

  return (
    <div class="max-w-4xl mx-auto px-4 py-8 space-y-16">
      <Hero />
      <ProfessionalJourney />
      <TechnicalExpertise skills={skills} />
      <WhatIWriteAbout />
      <SocialLinks />
    </div>
  );
});
