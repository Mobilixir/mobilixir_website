"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/data/site";

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number];

export function HeroSection() {
  const reduce = useReducedMotion();
  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease },
  });

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden mesh-bg pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p {...item(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary motion-safe:animate-pulse" aria-hidden="true" />
          {HERO.eyebrow}
        </motion.p>
        <motion.h1 {...item(0.05)} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6 text-balance">
          {HERO.headline}
        </motion.h1>
        <motion.p {...item(0.1)} className="text-lg sm:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO.subheadline}
        </motion.p>
        <motion.div {...item(0.15)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={HERO.primaryCta.href} className="btn btn-primary rounded-full px-8 text-base gap-2 active:scale-[0.97] transition-transform">
            {HERO.primaryCta.label} <ArrowRight size={17} />
          </Link>
          <Link href={HERO.secondaryCta.href} className="btn btn-ghost rounded-full px-8 text-base text-base-content/70 hover:text-base-content">
            {HERO.secondaryCta.label}
          </Link>
        </motion.div>

        <motion.ul {...item(0.25)} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {HERO.pillars.map((p) => (
            <li key={p.title} className="text-left px-4 py-4 rounded-2xl bg-base-100/70 border border-base-300/60 backdrop-blur-sm">
              <div className="font-semibold text-primary">{p.title}</div>
              <div className="text-xs sm:text-sm text-base-content/60 mt-1">{p.text}</div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
