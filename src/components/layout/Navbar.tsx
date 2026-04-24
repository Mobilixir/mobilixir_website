"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { isDark, toggleTheme, mounted } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-base-100/80 backdrop-blur-md shadow-sm border-b border-base-300/50"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl tracking-tight text-base-content hover:text-primary transition-colors duration-150"
          >
            mobilixir<span className="text-primary">.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-all duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="touch-hitbox btn btn-ghost btn-sm btn-circle"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}

            {/* CTA */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex btn btn-primary btn-sm rounded-full px-5"
            >
              Hire Us
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden touch-hitbox btn btn-ghost btn-sm btn-circle"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-base-100 shadow-2xl lg:hidden",
          "transform transition-transform duration-200 ease-out-quart",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-base-300">
          <span className="font-bold text-lg">
            mobilixir<span className="text-primary">.</span>
          </span>
          <button
            onClick={closeDrawer}
            className="touch-hitbox btn btn-ghost btn-sm btn-circle"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeDrawer}
                className="block px-4 py-3 rounded-xl text-base-content/80 hover:text-base-content hover:bg-base-200 font-medium transition-all duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="#contact"
              onClick={closeDrawer}
              className="btn btn-primary w-full rounded-full"
            >
              Hire Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
