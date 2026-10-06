"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/data/site";

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number];

export function HeroSection() {
  const reduce = useReducedMotion();
  // Headline leads, supporting items follow; the index panel arrives last.
  const enter = (delay: number, distance = 20) => ({
    initial: { opacity: 0, y: reduce ? 0 : distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <section className="grid-bg relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <motion.p {...enter(0, 8)} className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/80 px-3 py-1.5 font-mono text-xs text-base-content/70 mb-8">
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            {HERO.eyebrow}
          </motion.p>
          <motion.h1 {...enter(0.05, 24)} className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03] text-balance">
            {HERO.headline}
          </motion.h1>
          <motion.p {...enter(0.14)} className="mt-7 text-lg sm:text-xl text-base-content/65 max-w-xl leading-relaxed">
            {HERO.subheadline}
          </motion.p>
          <motion.div {...enter(0.22)} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href={HERO.primaryCta.href} className="btn btn-primary btn-lg rounded-lg gap-2 active:scale-[0.97] transition-transform">
              {HERO.primaryCta.label} <ArrowRight size={18} />
            </Link>
            <Link href={HERO.secondaryCta.href} className="btn btn-outline btn-lg rounded-lg border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 active:scale-[0.97] transition-transform">
              {HERO.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        <motion.div {...enter(0.3, 28)} className="lg:col-span-5">
          <div className="rounded-2xl border border-base-300 bg-base-100/90 backdrop-blur shadow-xl shadow-primary/5 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-base-300 bg-base-200/70">
              <span className="size-2.5 rounded-full bg-base-300" />
              <span className="size-2.5 rounded-full bg-base-300" />
              <span className="size-2.5 rounded-full bg-base-300" />
              <span className="ml-3 font-mono text-xs text-base-content/50">capabilities.index</span>
            </div>
            <ul>
              {HERO.pillars.map((p, i) => (
                <li key={p.title} className="flex items-baseline gap-4 px-5 py-4 border-b border-base-300 last:border-b-0">
                  <span className="font-mono text-xs text-base-content/35">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-base-content/60">{p.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
