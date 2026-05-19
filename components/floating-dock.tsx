"use client";

import { motion, MotionValue, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Home, Mail, Sun, Moon } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface CustomIconProps {
  size?: number;
  strokeWidth?: number;
}

type DockItem = {
  icon: React.ComponentType<CustomIconProps>;
  label: string;
  href: string;
};

const GithubIcon = ({ size = 22, strokeWidth = 2 }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ size = 22, strokeWidth = 2 }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DOCK_ITEMS: DockItem[] = [
  { icon: Home as React.ComponentType<CustomIconProps>, label: "Home", href: "#hero" },
  // Note: Add more internal # links here later (e.g., #projects, #contact) and the dock will automatically highlight them!
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/Eshio-codes" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/eshio" },
  { icon: Mail as React.ComponentType<CustomIconProps>, label: "Email", href: "mailto:divineword9@gmail.com" },
];

export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  
  // Track scroll position for active section highlighting
  const [activeSection, setActiveSection] = useState<string>("#hero");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemIsDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    
    if (systemIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    const timeoutId = setTimeout(() => {
      setIsDark(systemIsDark);
      setMounted(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const hashLinks = DOCK_ITEMS.map(item => item.href).filter(href => href.startsWith("#"));
      
      let currentActive = activeSection;
      for (const hash of hashLinks) {
        const section = document.getElementById(hash.substring(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is currently occupying the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = hash;
          }
        }
      }
      
      // Fallback for the very top of the page
      if (window.scrollY < 100) currentActive = "#hero";
      
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md shadow-2xl px-2 py-2 sm:px-4 sm:py-3 flex items-end gap-1 sm:gap-2"
    >
      {DOCK_ITEMS.map((item) => (
        <DockIcon 
          key={item.label} 
          item={item} 
          mouseX={mouseX} 
          isActive={item.href === activeSection}
        />
      ))}

      <div className="w-[1px] h-8 sm:h-10 bg-neutral-800 mx-1 sm:mx-2" />

      <DockIcon 
        item={{ 
          icon: mounted && !isDark ? Moon : Sun, 
          label: mounted && !isDark ? "Dark Mode" : "Light Mode", 
          href: "#" 
        }} 
        mouseX={mouseX} 
        onClick={toggleTheme} 
      />
    </motion.nav>
  );
}

function DockIcon({ 
  item, 
  mouseX, 
  onClick,
  isActive 
}: { 
  item: DockItem; 
  mouseX: MotionValue<number>; 
  onClick?: () => void; 
  isActive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track window size to disable hover animations on mobile for better UX
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [45, 80, 45]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const iconScaleSync = useTransform(distance, [-150, 0, 150], [1, 1.4, 1]);
  const iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;
  
  // Base classes with dynamic text coloring for active state
  const commonClasses = `w-full h-full flex items-center justify-center rounded-full transition-colors outline-none ${
    isActive ? "bg-neutral-800 text-foreground" : "bg-neutral-900/50 hover:bg-neutral-800 text-neutral-400 hover:text-foreground"
  }`;

  return (
    <motion.div
      ref={ref}
      // Give fixed 40px width on mobile, dynamic zooming width on desktop
      style={{ width: isMobile ? 40 : width }}
      className="relative group flex aspect-square items-center justify-center generic-dock-wrapper"
    >
      {onClick ? (
        <button
          onClick={onClick}
          aria-label={item.label}
          className={commonClasses}
        >
          <motion.div style={{ scale: isMobile ? 1 : iconScale }}>
            <Icon size={isMobile ? 18 : 20} strokeWidth={2} />
          </motion.div>
        </button>
      ) : (
        <a
          href={item.href}
          aria-label={item.label}
          className={commonClasses}
        >
          <motion.div style={{ scale: isMobile ? 1 : iconScale }}>
            <Icon size={isMobile ? 18 : 20} strokeWidth={2} />
          </motion.div>
        </a>
      )}

      {/* Tiny dot indicator for active internal sections */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
      )}

      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-neutral-800 z-50">
        {item.label}
      </span>
    </motion.div>
  );
}