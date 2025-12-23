import { t } from "../../utils/i18n.ts";

export default function ProfessionalJourney() {
  return (
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white border-b border-gray-200 dark:border-gray-800 pb-2">
        {t("about.journey.title")}
      </h2>
      <div class="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12 py-2">
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-off-white dark:border-deep-navy shadow-[0_0_0_4px_rgba(59,130,246,0.1)]">
          </div>
          <time class="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("about.journey.present")}
          </time>
          <h3 class="text-xl font-bold text-gray-900 dark:text-off-white">
            {t("about.journey.role1")}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
            {t("about.journey.desc1")}
          </p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-off-white dark:border-deep-navy">
          </div>
          <time class="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
            {t("about.journey.period2")}
          </time>
          <h3 class="text-xl font-bold text-gray-900 dark:text-off-white">
            {t("about.journey.role2")}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
            {t("about.journey.desc2")}
          </p>
        </div>
      </div>
    </section>
  );
}
