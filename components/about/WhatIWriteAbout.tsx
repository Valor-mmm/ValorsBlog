import { t } from "../../utils/i18n.ts";

export default function WhatIWriteAbout() {
  return (
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white border-b border-gray-200 dark:border-gray-800 pb-2">
        {t("about.writing.title")}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            {t("about.writing.arch_title")}
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.writing.arch_desc")}
          </p>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            {t("about.writing.workflow_title")}
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.writing.workflow_desc")}
          </p>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            {t("about.writing.leadership_title")}
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.writing.leadership_desc")}
          </p>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-bold text-gray-900 dark:text-off-white">
            {t("about.writing.modern_web_title")}
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.writing.modern_web_desc")}
          </p>
        </div>
      </div>
    </section>
  );
}
