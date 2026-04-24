"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants, getInitial } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function AboutSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            variants={staggerContainerVariants}
            initial={initial}
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              About Us
            </motion.p>
            <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content mb-6 leading-tight">
              {ABOUT.headline}
            </motion.h2>
            <motion.div variants={fadeUpVariants} custom={0.1} className="text-base-content/60 leading-relaxed space-y-4">
              {ABOUT.body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
            </motion.div>
            <motion.a
              variants={fadeUpVariants}
              custom={0.15}
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 btn btn-primary rounded-full px-7 active:scale-[0.97] transition-transform duration-150 will-change-transform"
            >
              Start a Conversation
            </motion.a>
          </motion.div>

          {/* Values column — each card gets elevated */}
          <motion.div
            variants={staggerContainerVariants}
            initial={initial}
            animate={inView ? "visible" : "hidden"}
            className="cards-perspective flex flex-col gap-5"
          >
            {ABOUT.values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUpVariants}
                custom={i * 0.07}
                className="card-elevated p-6 rounded-2xl bg-base-200 border border-base-300 group"
              >
                <h3 className="font-semibold text-base-content mb-2 group-hover:text-primary transition-colors duration-150">
                  {v.title}
                </h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
