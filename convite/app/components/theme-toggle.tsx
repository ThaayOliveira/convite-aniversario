"use client";

import { useEffect, useState } from "react";

type Theme = "red" | "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("red");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("red");
    }
  }, []);

  function applyTheme(theme: Theme) {
    if (theme === "red") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    localStorage.setItem("theme", theme);
  }

  function nextTheme() {
    const next =
      theme === "red" ? "light" : theme === "light" ? "dark" : "red";

    setTheme(next);
    applyTheme(next);
  }

return (
    <button
      onClick={nextTheme}
      className="
        fixed top-6 right-6 z-50
        px-4 py-2 text-sm font-medium
        rounded-md
        border border-[var(--border)]
        bg-[var(--card)]
        text-[var(--card-foreground)]
        hover:opacity-80 transition
      "
    >
      Tema: {theme === "red" ? "Vermelho" : theme === "light" ? "Claro" : "Escuro"}
    </button>
  );
}
