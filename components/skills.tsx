"use client";

import { motion, Variants } from "framer-motion";
import Container from "./container";

// Copied exactly from your screenshot
const SKILLS = [
  "Flutter", "Dart", "React", "Node.js", "TypeScript", "JavaScript", 
  "Python", "HTML/CSS", "Firebase", "REST APIs", "Git", "Tailwind CSS", 
  "WordPress", "Figma to Code"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <Container className="pb-12 sm:pb-24">
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Skills
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-3"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}