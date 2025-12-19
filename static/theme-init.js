(function () {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme =
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  const theme = savedTheme || systemTheme;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
})();
