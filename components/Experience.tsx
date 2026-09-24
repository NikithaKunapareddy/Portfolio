"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "May 2025 — Aug 2025",
    role: "Software Engineer Intern, Machine Learning & Generative AI",
    org: "CultureVO",
    points: [
      "Engineered LLM-powered conversational, multimodal and RAG systems serving 1,000+ daily users, including the Aura LLM Platform, Tiny Agents, ImageInsightLLM and Symphony Summary Orchestra.",
      "Built scalable AI microservices on FastAPI, Redis, RabbitMQ and Google Cloud Run, enabling sub-100ms retrieval and processing 10,000+ asynchronous tasks daily.",
      "Set up Prometheus–Grafana observability and CI/CD pipelines, reaching 99.9% uptime and cutting P95 latency by 30%.",
    ],
  },
  {
    period: "2023 — Present",
    role: "B.Tech, Computer Science",
    org: "SRM AP University",
    points: ["CGPA 9.13 / 10."],
  },
  {
    period: "2023",
    role: "Class 12",
    org: "Narayana Junior College",
    points: ["96.3%", "AP EAMCET State Rank 616."],
  },
];

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:px-10 relative">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl font-bold bg-gradient-text inline-block relative z-10"
      >
        Experience & education
      </motion.h2>

      <ol className="mt-12 space-y-12 border-l-2 border-primary/20 pl-8 relative z-10">
        {timeline.map((item, i) => (
          <motion.li 
            key={item.role} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative group"
          >
            <span className="absolute -left-[calc(2rem+2px)] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-primary bg-ink text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300">
              {i + 1}
            </span>
            <div className="rounded-xl border border-wire/30 bg-panel/10 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-panel/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <p className="text-sm font-semibold text-secondary">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-paper group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-signal">{item.org}</p>
                <ul className="mt-4 max-w-prose space-y-2 text-muted leading-relaxed">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/60"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
