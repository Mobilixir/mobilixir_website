"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants, scaleUpVariants, getInitial } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function TechStackSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);

  return (
    <section id="techstack" ref={ref} className="py-24 sm:py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Technology
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            Our Technology Stack
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={0.1} className="text-base-content/60 max-w-xl mx-auto">
            Carefully chosen tools that are battle-tested in production and built for longevity — not hype.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {TECH_STACK.map((category, ci) => (
            <motion.div key={category.title} variants={fadeUpVariants} custom={ci * 0.07}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-base-content/40 mb-4">
                {category.title}
              </h3>
              {/* Tech pills get a lighter version of the elevation — translateY only, no rotateX */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    variants={scaleUpVariants}
                    custom={ii * 0.04}
                    className="card-elevated px-5 py-2.5 rounded-full bg-base-100 border border-base-300 text-sm font-medium text-base-content/70 hover:text-primary cursor-default"
                    style={{ perspective: "600px" }}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
