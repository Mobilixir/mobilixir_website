"use client";

import { useEffect, useState } from "react";

type Theme = "mobilixir-light" | "mobilixir-dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("mobilixir-light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "mobilixir-dark"
      : "mobilixir-light";
    const initial = stored ?? preferred;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next: Theme =
      theme === "mobilixir-light" ? "mobilixir-dark" : "mobilixir-light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return { theme, toggleTheme, mounted, isDark: theme === "mobilixir-dark" };
}
