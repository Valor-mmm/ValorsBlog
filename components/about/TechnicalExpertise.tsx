import { t } from "../../utils/i18n.ts";

interface TechnicalExpertiseProps {
  skills: string[];
}

export default function TechnicalExpertise(
  { skills }: TechnicalExpertiseProps,
) {
  return (
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white border-b border-gray-200 dark:border-gray-800 pb-2">
        {t("about.expertise.title")}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 transition-colors duration-200">
          <h3 class="text-xl font-bold text-gray-900 dark:text-off-white mb-6 flex items-center">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">
              🏗️
            </span>
            {t("about.expertise.arch_title")}
          </h3>
          <ul class="space-y-4 text-gray-600 dark:text-gray-400">
            <li class="flex items-start">
              <span class="text-primary mr-2">▹</span>
              <span>{t("about.expertise.arch_item1")}</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">▹</span>
              <span>{t("about.expertise.arch_item2")}</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">▹</span>
              <span>{t("about.expertise.arch_item3")}</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">▹</span>
              <span>{t("about.expertise.arch_item4")}</span>
            </li>
          </ul>
        </div>
        <div class="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 transition-colors duration-200">
          <h3 class="text-xl font-bold text-gray-900 dark:text-off-white mb-6 flex items-center">
            <span class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mr-3 text-sm">
              💻
            </span>
            {t("about.expertise.tech_title")}
          </h3>
          <div class="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                class="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
