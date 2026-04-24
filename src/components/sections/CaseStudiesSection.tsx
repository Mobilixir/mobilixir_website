"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CASE_STUDIES } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants, getInitial, cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function CaseStudiesSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (slug: string) =>
    setExpanded((prev) => (prev === slug ? null : slug));

  return (
    <section id="casestudies" ref={ref} className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Case Studies
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            Problems We&apos;ve Solved
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={0.1} className="text-base-content/60 max-w-xl mx-auto">
            Real engineering challenges, real solutions. Click any card to see the full breakdown.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {CASE_STUDIES.map((study, i) => {
            const isOpen = expanded === study.slug;
            return (
              <motion.div
                key={study.slug}
                variants={fadeUpVariants}
                custom={i * 0.06}
                /* Case study rows use a simpler elevation — no rotateX since they expand vertically */
                className="card-elevated rounded-2xl border border-base-300 bg-base-100 overflow-hidden"
                style={{ perspective: "none" }}
              >
                <button
                  onClick={() => toggle(study.slug)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="shrink-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {study.industry}
                    </span>
                    <h3 className="font-semibold text-base-content truncate">{study.title}</h3>
                  </div>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-base-content/40 transition-transform duration-200 ease-in-out-cubic",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.645, 0.045, 0.355, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-base-300">
                        <div className="pt-5">
                          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/40 mb-2">Problem</p>
                          <p className="text-sm text-base-content/70 leading-relaxed">{study.problem}</p>
                        </div>
                        <div className="pt-5">
                          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/40 mb-2">Solution</p>
                          <p className="text-sm text-base-content/70 leading-relaxed">{study.solution}</p>
                        </div>
                        <div className="pt-5">
                          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/40 mb-2">Results</p>
                          <ul className="space-y-2">
                            {study.results.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-base-content/70">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{r}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {study.tags.map((tag) => (
                              <span key={tag} className="px-2.5 py-0.5 rounded-full bg-base-200 text-base-content/50 text-xs">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
