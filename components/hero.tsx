"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./container";

export default function Hero() {
  return (
    <Container className="pt-12 pb-8 sm:pt-24 sm:pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8 sm:gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            Hi, I'm [Your Name] 👋
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-[400px] text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
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
            {/* Note: I am using a placeholder image link here so it works immediately. */}
            {/* Later, you can drop your photo into the 'public' folder, name it 'me.png', and change the src to "/me.png" */}
            <Image
              src="https://github.com/shadcn.png" 
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </Container>
  );
}