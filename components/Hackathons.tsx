"use client";
import { motion } from "framer-motion";

const placed = [
  {
    result: "Winner — 1st place",
    name: "HaXplore Hackathon",
    org: "IIT BHU (Varanasi) · CodeFest",
  },
  {
    result: "Finalist — 7th place",
    name: "Vista Hackathon",
    org: "IIT BHU (Varanasi) · CodeFest",
  },
];

const participated = [
  { name: "ENIGMA Hackathon", org: "IIT BHU · CodeFest" },
  { name: "HaXplore — Participation", org: "IIT BHU · CodeFest" },
  { name: "DataScience Hackathon", org: "IIT Kharagpur" },
  { name: "CTF — IIT BHU CodeFest", org: "IIT BHU" },
  { name: "HACKFORCE INDIA", org: "National Hackathon" },
  { name: "Hack MSC 1.0 & 2.0", org: "SRM" },
  { name: "HACK SRM 7.0", org: "SRM University" },
  { name: "Hackathon Skills & Strategies", org: "National Event" },
  { name: "ZERO JAM — Microsoft", org: "Microsoft India" },
  { name: "TechXcelerate — BITS", org: "BITS Pilani" },
  { name: "AISEC Hack4SDG", org: "National Level" },
  { name: "Campus To Corporate", org: "SRM AP University" },
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="mx-auto max-w-6xl px-6 py-16 md:px-10 relative">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="font-display text-4xl font-bold bg-gradient-text inline-block">
          Hackathons & competitions
        </h2>
        <p className="mt-3 max-w-prose text-muted">
          Competed at 15+ national events across India's top institutions.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 relative z-10">
        {placed.map((p, i) => (
          <motion.div 
            key={p.name} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group rounded-2xl border border-secondary/30 bg-secondary/5 p-6 backdrop-blur-sm transition-all hover:border-secondary hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-sm font-bold text-secondary uppercase tracking-wider">{p.result}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-paper group-hover:text-white transition-colors">{p.name}</h3>
              <p className="mt-2 text-sm font-medium text-muted">{p.org}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-4 border-t border-wire/30 pt-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {participated.map((p, i) => (
          <motion.li 
            key={p.name} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="text-sm flex items-start group"
          >
            <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/60 group-hover:bg-signal transition-colors group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
            <div>
              <span className="block font-medium text-paper group-hover:text-signal transition-colors">{p.name}</span>
              <span className="block mt-0.5 text-muted/80">{p.org}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
