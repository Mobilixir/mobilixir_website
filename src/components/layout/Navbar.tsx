"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on Escape and focus its close button while it is open.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-200",
          scrolled ? "bg-base-100/80 backdrop-blur-md shadow-sm border-b border-base-300/50" : "bg-transparent",
        )}
      >
        <nav aria-label="Main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
            mobilixir<span className="text-primary">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium hover:text-base-content hover:bg-base-200 transition-colors",
                    isActive(item.href) ? "text-primary" : "text-base-content/70",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:inline-flex btn btn-primary btn-sm rounded-lg px-5">
              Start a project
            </Link>
            <button
              type="button"
              className="md:hidden touch-hitbox btn btn-ghost btn-sm btn-circle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-base-100 shadow-2xl md:hidden transform transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-base-300">
          <span className="font-bold text-lg">
            mobilixir<span className="text-primary">.</span>
          </span>
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="touch-hitbox btn btn-ghost btn-sm btn-circle" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block px-4 py-3 rounded-xl font-medium text-base-content/80 hover:text-base-content hover:bg-base-200 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full rounded-lg">
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
