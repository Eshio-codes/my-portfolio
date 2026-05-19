"use client";

import { motion } from "framer-motion";
import Container from "./container";

const EDUCATION = [
  {
    id: 1,
    school: "Covenant University",
    degree: "Bachelor of Science in Computer Science",
    date: "2019 - 2023",
    logoText: "CU" // We use text as a fallback until you add the actual image logo
  }
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <Container className="pb-12 sm:pb-24">
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Education
          </motion.h2>

          <div className="space-y-8">
            {EDUCATION.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Circular Logo matching the screenshot layout */}
                  <div className="h-12 w-12 shrink-0 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold border border-neutral-700">
                    {item.logoText}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">
                      {item.school}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {item.degree}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-neutral-400 shrink-0">
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}