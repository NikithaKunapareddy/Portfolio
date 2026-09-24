"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const readouts = [
  { value: "<100ms", label: "retrieval latency at 10,000+ daily tasks" },
  { value: "99.9%", label: "uptime across shipped microservices" },
  { value: "1,000+", label: "daily users served by production AI systems" },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pt-24 relative overflow-hidden">
      {/* Background ambient glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen animate-pulse-slow"></div>

      <div className="grid gap-12 md:grid-cols-[1.4fr,1fr] md:items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Computer Science, SRM AP University — CGPA 9.13
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-paper sm:text-5xl md:text-6xl animate-float">
            I build the pipelines that let language models{" "}
            <em className="not-italic bg-gradient-text font-bold">retrieve, reason and respond</em>{" "}
            in real time.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted leading-relaxed">
            I'm Nikitha — I design RAG systems, conversational agents and the
            infrastructure underneath them: async task queues, observability,
            and services that hold up under real traffic. Most recently I
            engineered LLM and multimodal AI products at CultureVO, and I
            compete in national hackathons on the side, with a first-place
            finish at IIT BHU's HaXplore.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]"
            >
              <span className="relative z-10">See the projects</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-signal/50 bg-panel/50 px-8 py-3.5 text-sm font-bold text-paper shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:border-signal hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-secondary to-signal opacity-30 blur-2xl transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-wire shadow-[0_0_30px_rgba(139,92,246,0.3)] md:max-w-sm hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/profile.jpg"
              alt="Portrait of Nikitha Kunapareddy"
              fill
              sizes="(min-width: 768px) 24rem, 20rem"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <dl className="mt-20 grid grid-cols-1 gap-6 border-t border-wire/30 pt-10 sm:grid-cols-3 relative z-10">
        {readouts.map((r, index) => (
          <motion.div 
            key={r.label} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            className="group rounded-2xl border border-wire/30 bg-panel/10 p-6 backdrop-blur-sm transition-all hover:border-signal/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:-translate-y-1"
          >
            <dt className="font-display text-5xl font-extrabold bg-gradient-text inline-block">{r.value}</dt>
            <dd className="mt-3 text-sm text-paper/90 font-medium leading-relaxed">{r.label}</dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
