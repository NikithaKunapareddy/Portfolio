"use client";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-wire bg-[#050510]/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-xl font-bold text-paper hover:bg-gradient-text transition-all duration-300 relative group"
        >
          Nikitha Kunapareddy
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-signal transition-all group-hover:w-full"></span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted md:flex">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="hover:text-primary transition-colors hover:scale-105"
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          href="/resume.pdf"
          download
          className="rounded-full border border-wire bg-panel/30 px-5 py-2 text-sm font-medium text-paper hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
        >
          Resume
        </motion.a>
      </div>
    </motion.header>
  );
}
