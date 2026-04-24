"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants, getInitial } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function ProcessSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);

  return (
    <section id="process" ref={ref} className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            How We Work
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            From First Call to Launch
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={0.1} className="text-base-content/60 max-w-xl mx-auto">
            A predictable, transparent process designed to reduce surprises and ship quality software on time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="cards-perspective grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUpVariants}
              custom={i * 0.07}
              className="card-elevated relative p-6 rounded-2xl bg-base-200 border border-base-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-content transition-all duration-200">
                {String(step.step).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-base-content mb-2">{step.title}</h3>
              <p className="text-sm text-base-content/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
