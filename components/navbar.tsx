"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";
import Container from "./container";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 pt-6">
      <Container>
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
          <Link href="/" className="rounded-full p-2 hover:bg-white/10 transition-colors">
            <HomeIcon size={18} />
          </Link>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#work" className="hover:text-neutral-400 transition-colors">Work</Link>
            <Link href="#projects" className="hover:text-neutral-400 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-neutral-400 transition-colors">Contact</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}