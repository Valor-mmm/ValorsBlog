import { t, tObj } from "../../utils/i18n.ts";

interface EducationItem {
  period: string;
  study: string;
  university: string;
  focus?: string;
  grade: string;
}

export default function Education() {
  const items = tObj<EducationItem[]>("about.education.items");

  return (
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white border-b border-gray-200 dark:border-gray-800 pb-2">
        {t("about.education.title")}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:border-primary/30 transition-colors flex flex-col"
          >
            <div class="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              {item.period}
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-off-white">
              {item.study}
            </h3>
            {item.focus && (
              <div class="text-md font-medium text-gray-600 dark:text-gray-400 mb-1">
                {item.focus}
              </div>
            )}
            <div class="text-gray-700 dark:text-gray-300 mb-4">
              {item.university}
            </div>
            <div class="mt-auto">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                Grade: {item.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
