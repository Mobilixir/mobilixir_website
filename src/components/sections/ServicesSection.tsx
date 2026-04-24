"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/site";
import { fadeUpVariants, staggerContainerVariants, scaleUpVariants, getInitial } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function ServicesSection() {
  const { ref, inView, mounted } = useInView<HTMLElement>();
  const initial = getInitial(mounted);

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} custom={0} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            What We Build
          </motion.p>
          <motion.h2 variants={fadeUpVariants} custom={0.05} className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            End-to-End Software Delivery
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={0.1} className="text-base-content/60 max-w-xl mx-auto">
            From mobile-first consumer apps to complex backend systems — we cover the full stack so you don&apos;t need to stitch together multiple vendors.
          </motion.p>
        </motion.div>

        {/* cards-perspective gives the grid a 3D context for the translateY+rotateX lift */}
        <motion.div
          variants={staggerContainerVariants}
          initial={initial}
          animate={inView ? "visible" : "hidden"}
          className="cards-perspective grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={scaleUpVariants}
              custom={i * 0.06}
              className="card-elevated p-6 rounded-2xl bg-base-100 border border-base-300 group cursor-default"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-base-content text-lg mb-2 group-hover:text-primary transition-colors duration-150">
                {service.title}
              </h3>
              <p className="text-sm text-base-content/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
