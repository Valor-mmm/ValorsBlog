import { t } from "../../utils/i18n.ts";

export default function Connect() {
  return (
    <section class="pt-12 border-t border-gray-200 dark:border-gray-800">
      <div class="bg-primary/5 dark:bg-primary/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div class="space-y-3">
          <h3 class="text-3xl font-extrabold text-gray-900 dark:text-off-white">
            {t("about.connect.title")}
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-md">
            {t("about.connect.desc")}
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            class="group flex items-center px-6 py-3 rounded-2xl bg-[#0077b5] text-white font-bold hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-[#0077b5]/20"
          >
            {t("about.connect.linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
}
