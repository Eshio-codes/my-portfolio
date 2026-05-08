"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./container";

export default function Hero() {
  return (
    <Container className="pt-12 pb-8 sm:pt-24 sm:pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8 sm:gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-5">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
          >
            Hi, I'm Divine <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_infinite]">👋</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-[450px] text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
          >
            Software Engineer specialized in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </motion.p>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800">
            {/* Make sure you have a picture named 'profile.png' inside your public folder! */}
            <Image
              src="/profile.png" 
              alt="Profile picture"
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </Container>
  );
}