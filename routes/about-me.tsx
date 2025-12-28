import { createDefine } from "@fresh/core";
import Hero from "../components/about/Hero.tsx";
import ProfessionalJourney from "../components/about/ProfessionalJourney.tsx";
import Education from "../components/about/Education.tsx";
import TechnicalExpertise from "../components/about/TechnicalExpertise.tsx";
import WhatIWriteAbout from "../components/about/WhatIWriteAbout.tsx";
import Connect from "../components/about/Connect.tsx";
import SEO from "../components/SEO.tsx";
import { t } from "../utils/i18n.ts";

const { page } = createDefine();

export default page(function AboutMe(ctx) {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "GraphQL",
    "Software Architecture",
    "CI/CD",
    "Deno",
  ];

  return (
    <div class="max-w-4xl mx-auto px-4 py-8 space-y-16">
      <SEO
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        url={ctx.url.href}
      />
      <Hero />
      <ProfessionalJourney />
      <Education />
      <TechnicalExpertise skills={skills} />
      <WhatIWriteAbout />
      <Connect />
    </div>
  );
});
