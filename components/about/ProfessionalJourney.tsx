import { t, tObj } from "../../utils/i18n.ts";

interface JourneyRole {
  title: string;
  description: string;
  tags: string[];
}

interface JourneyItem {
  period: string;
  is_present?: boolean;
  roles: JourneyRole[];
}

export default function ProfessionalJourney() {
  const items = tObj<JourneyItem[]>("about.journey.items");

  return (
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-off-white border-b border-gray-200 dark:border-gray-800 pb-2">
        {t("about.journey.title")}
      </h2>
      <div class="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12 py-2">
        {items.map((item, idx) => (
          <div key={idx} class="relative pl-8">
            <div
              class={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-off-white dark:border-deep-navy ${
                item.is_present
                  ? "bg-primary shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
            </div>
            <time
              class={`text-sm font-semibold uppercase tracking-wider ${
                item.is_present ? "text-primary" : "text-gray-500"
              }`}
            >
              {item.period}
            </time>
            <div class="mt-4 space-y-8">
              {item.roles.map((role, rIdx) => (
                <div key={rIdx} class="group">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-off-white group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
                    {role.description}
                  </p>
                  {role.tags && role.tags.length > 0 && (
                    <div class="flex flex-wrap gap-2 mt-3">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          class="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
