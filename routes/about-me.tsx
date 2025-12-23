import { createDefine } from "@fresh/core";
import Hero from "../components/about/Hero.tsx";
import ProfessionalJourney from "../components/about/ProfessionalJourney.tsx";
import TechnicalExpertise from "../components/about/TechnicalExpertise.tsx";
import WhatIWriteAbout from "../components/about/WhatIWriteAbout.tsx";
import Connect from "../components/about/Connect.tsx";
import SEO from "../components/SEO.tsx";

const { page } = createDefine();

export default page(function AboutMe(ctx) {
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
      <SEO
        title="About Me"
        description="Learn more about Valor, a software engineer passionate about Deno, React, and building great products."
        url={ctx.url.href}
      />
      <Hero />
      <ProfessionalJourney />
      <TechnicalExpertise skills={skills} />
      <WhatIWriteAbout />
      <Connect />
    </div>
  );
});
