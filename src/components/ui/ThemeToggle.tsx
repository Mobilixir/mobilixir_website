"use client";

import { Moon, Sun } from "lucide-react";

const DARK = "mobilixir-dark";
const LIGHT = "mobilixir-light";

/**
 * The theme attribute is set before first paint by an inline script in the
 * root layout, so the icon is chosen with CSS and this component keeps no state.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === DARK ? LIGHT : DARK;
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="touch-hitbox btn btn-ghost btn-sm btn-circle"
      aria-label="Toggle colour theme"
    >
      <Sun size={17} className="hidden [[data-theme=mobilixir-dark]_&]:block" />
      <Moon size={17} className="[[data-theme=mobilixir-dark]_&]:hidden" />
    </button>
  );
}
