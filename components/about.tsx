"use client";

import { motion } from "framer-motion";
import Container from "./container";

export default function About() {
  return (
    <Container className="pb-12 sm:pb-24">
      <motion.section
        // initial state: invisible and pushed down 20 pixels
        initial={{ opacity: 0, y: 20 }}
        // whileInView: animates to visible and original position when scrolled to
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        // viewport settings: only animate once, and trigger slightly before it hits the center
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          About
        </h2>
        
        <div className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed space-y-4">
          <p>
            I am a passionate software engineer who loves building things for the web. 
            I focus on creating clean, accessible, and user-centric digital experiences. 
            My journey in tech has been driven by a deep curiosity and a desire to solve 
            real-world problems through code.
          </p>
          <p>
            With a strong foundation in modern web technologies, I enjoy transforming complex requirements 
            into elegant, high-performing interfaces. When I am not writing code, I am usually exploring new 
            frameworks, reading tech blogs, or contributing to the developer community.
          </p>
        </div>
      </motion.section>
    </Container>
  );
}