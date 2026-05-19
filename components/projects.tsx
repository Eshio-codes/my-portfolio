"use client";

import { motion } from "framer-motion";
import { Apple, Play, Globe } from "lucide-react";
import Container from "./container";

// Copied exactly from your screenshots for pixel-perfect accuracy
const PROJECTS = [
  {
    id: 1,
    title: "MacroIQ - AI Calorie Tracker",
    year: "2024",
    description: "Built complete AI-powered nutrition tracking app from scratch, currently live on App Store and Google Play. Features camera-based food recognition, voice-logging, real-time nutritional analytics, and Firebase backend. Serving thousands of active users.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Canvas integration", "Speech-to-Text", "Provider", "Stripe"],
    links: [
      { type: "apple", text: "App Store", url: "https://apps.apple.com/us/app/macroiq-ai-calorie-tracker/id6747396537" },
      { type: "play", text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.foodAiScanner.foodAiScanner&pcampaignid=web_share" }
    ]
  },
   {
    id: 2,
    title: "Relxpar Technologies - Brand Website",
    year: "2024",
    description: "Designed and developed a brand website for Relxpar Technologies, featuring the 'Resix' platform that connects ML and Big Tech mentors with mentees. Created a modern, responsive web experience with mentor profiles, booking systems, and educational resources.",
    tags: ["React.js", "Vite.js", "TypeScript", "Sass", "Modern Web Development"],
    links: [
      { type: "globe", text: "Website", url: "#" }
    ]
  },
  {
    id: 3,
    title: "Anywherehealing Landing Page",
    year: "2024",
    description: "I built a landing page for a health and wellness technology company to help with better representation of their services. Created a modern, responsive design that effectively showcases the company's offerings and improves user engagement.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Sanity CMS"],
    links: [
      { type: "globe", text: "Website", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Villaja - E-commerce Mobile App",
    year: "2023",
    description: "Developed an e-commerce mobile application to connect customers and sellers of tech gadgets. Built a comprehensive marketplace platform with product listings, search functionality, and seamless user experience for buying and selling technology products.",
    tags: ["React Native", "Expo", "CSS", "JavaScript", "Mobile Development"],
    links: [
      { type: "globe", text: "Website", url: "https://villaja.com" }
    ]
  },
  {
    id: 5,
    title: "Budget Tracker App",
    year: "2023",
    description: "Personal finance management app with expense tracking, budget goals, and tax calculator. Features real-time analytics, category-based spending visualization, and local storage for privacy. Built to help everyday users take control of their finances.",
    tags: ["Flutter", "Dart", "Hive", "FL Chart", "Provider", "Material Design"],
    links: [
      { type: "globe", text: "Coming Soon", url: "#" }
    ]
  },
   {
    id: 6,
    title: "Studygroup Platform",
    year: "2026",
    description: "A web platform that connects students for collaborative learning and study groups. Features user profiles, group creation, scheduling tools, and resource sharing to facilitate effective peer-to-peer learning experiences.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    links: [
      { type: "globe", text: "Coming Soon", url: "#" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <Container className="pb-12 sm:pb-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-900 rounded-full"
          >
            My Projects
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Check out my latest work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[600px] text-neutral-400 text-sm sm:text-base"
          >
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col rounded-xl border border-neutral-800 bg-black overflow-hidden"
            >
              

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-foreground mb-1">{project.title}</h3>
                  <p className="text-xs text-neutral-500 font-medium mb-3">{project.year}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] sm:text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-md text-xs font-semibold hover:bg-neutral-200 transition-colors"
                    >
                      {link.type === 'apple' && <Apple size={14} className="fill-current" />}
                      {link.type === 'play' && <Play size={14} className="fill-current" />}
                      {link.type === 'globe' && <Globe size={14} />}
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}