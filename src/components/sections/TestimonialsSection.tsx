"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants, scaleUpVariants, getInitial } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function TestimonialsSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Client Feedback
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content">
            What Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="cards-perspective grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={scaleUpVariants}
              custom={i * 0.07}
              className="card-elevated p-6 rounded-2xl bg-base-100 border border-base-300 flex flex-col gap-4"
            >
              <p className="text-base-content/70 text-sm leading-relaxed flex-1">&ldquo;{t.body}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-base-content">{t.name}</p>
                  <p className="text-xs text-base-content/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="text-center text-xs text-base-content/30 mt-8"
        >
          * Testimonials are illustrative. Real client references provided on request during the proposal stage.
        </motion.p>
      </div>
    </section>
  );
}
