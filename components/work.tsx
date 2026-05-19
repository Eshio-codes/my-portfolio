"use client";

import { motion } from "framer-motion";
import Container from "./container";

// This is where you can easily update your experience later
const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Tech Company Inc.",
    date: "2022 - Present",
    description: "Building user-facing features using React, Next.js, and Tailwind CSS. Improved page load times by 40%.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Agency",
    date: "2020 - 2022",
    description: "Developed responsive websites for various clients. Collaborated closely with designers to ensure pixel-perfect implementation.",
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Startup Co.",
    date: "2019 - 2020",
    description: "Assisted in building internal tools and squashing UI bugs. Gained hands-on experience with Git and modern JavaScript.",
  },
];

export default function Work() {
  return (
    // We add an id="work" so the Navbar link can scroll directly to this section
    <section id="work" className="scroll-mt-24">
      <Container className="pb-12 sm:pb-24">
      <div className="space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {WORK_EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              // The delay increases slightly for each item, creating a "staggered" appearance
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-8"
            >
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-foreground">
                  {job.role} <span className="text-neutral-400 font-normal">at {job.company}</span>
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <div className="text-sm text-neutral-400 shrink-0 mt-1 sm:mt-0">
                {job.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
   </Container>
    </section>
  );
}