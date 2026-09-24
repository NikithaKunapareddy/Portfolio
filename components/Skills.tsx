"use client";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages & core",
    items: ["C", "C++", "Java", "Python", "JavaScript", "PHP", "SQL", "Data Structures & Algorithms"],
  },
  {
    title: "Frontend & backend",
    items: ["HTML5", "CSS", "FastAPI", "Flask", "Streamlit", "RESTful APIs"],
  },
  {
    title: "Databases & cloud",
    items: ["MySQL", "PostgreSQL (Supabase)", "CI/CD Pipelines", "Google Cloud Platform (Cloud Run)"],
  },
  {
    title: "AI & machine learning",
    items: ["Deep Learning", "Generative AI", "LLMs", "RAG Pipelines", "Conversational Agents", "OpenCV", "Transformers", "Real-Time Inference"],
  },
];

const certifications = [
  "Oracle Certified Java Programmer — Oracle",
  "Generative AI Certification — LinkedIn Learning",
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-wire/30 bg-panel/20 py-16 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold bg-gradient-text inline-block"
        >
          Skills
        </motion.h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div 
              key={g.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-wire/20 bg-panel/10 p-6 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-panel/30 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="relative z-10 text-sm font-bold text-signal uppercase tracking-widest">{g.title}</h3>
              <ul className="relative z-10 mt-5 space-y-3 text-muted">
                {g.items.map((item, j) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i * 0.1) + (j * 0.05) }}
                    className="flex items-center group/item"
                  >
                    <span className="mr-3 h-1 w-1 shrink-0 rounded-full bg-primary/50 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all"></span>
                    <span className="font-medium group-hover/item:text-paper transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 border-t border-wire/30 pt-10"
        >
          <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Certifications</h3>
          <ul className="mt-5 space-y-3 text-muted">
            {certifications.map((c, i) => (
              <motion.li 
                key={c} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                className="flex items-center group"
              >
                <span className="mr-3 h-1 w-1 shrink-0 rounded-full bg-secondary/50 group-hover:bg-secondary group-hover:shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all"></span>
                <span className="font-medium group-hover:text-paper transition-colors">{c}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
