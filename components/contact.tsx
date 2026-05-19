"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SocialIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

const SOCIAL_LINKS = [
  {
    icon: <SocialIcon path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/eshio",
    positionClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <SocialIcon path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
    name: "GitHub",
    url: "https://github.com/Eshio-codes",
    positionClass: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <SocialIcon path="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />,
    name: "Email",
    url: "mailto:your.divineword9@gmail.com",
    positionClass: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    icon: <SocialIcon path="M18.901 1.153h3.68l-8.04 9.19 9.457 12.504h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />,
    name: "X",
    url: "https://x.com/Ethreag",
    positionClass: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
];

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 pb-32 pt-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-spin { 100% { transform: rotate(360deg); } }
        @keyframes custom-spin-reverse { 100% { transform: rotate(-360deg); } }
      `}} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 text-xs font-semibold bg-neutral-100 text-neutral-900 rounded-full border border-neutral-200 mb-16 shadow-sm"
        >
          Contact
        </motion.div>

        {/* Scaled down max-width for mobile so the absolute icons don't hit the screen edges */}
        <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[500px]">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <h2 className="text-4xl sm:text-7xl font-bold tracking-tight text-center bg-gradient-to-b from-neutral-300 to-neutral-700 bg-clip-text text-transparent">
              Get <br />
              in Touch
            </h2>
          </div>

          <div 
            className="absolute inset-0 z-20"
            style={{
              animation: "custom-spin 30s linear infinite",
              animationPlayState: isHovered ? "paused" : "running"
            }}
          >
            <div className="absolute inset-0 rounded-full border border-neutral-700 pointer-events-none" />

            {SOCIAL_LINKS.map((link, index) => (
              <div 
                key={link.name} 
                // Reduced mobile icon container size slightly
                className={`absolute flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center ${link.positionClass}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${link.name}`}
                  className="flex h-full w-full items-center justify-center rounded-full bg-black text-foreground border sm:border-2 border-neutral-800 transition-colors hover:bg-neutral-800 hover:border-neutral-700 shadow-xl outline-none"
                  
                  style={{
                    animation: "custom-spin-reverse 30s linear infinite",
                    animationPlayState: isHovered ? "paused" : "running"
                  }}

                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    scale: { duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" },
                    opacity: { duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }
                  }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}