import Image from "next/image";

const readouts = [
  { value: "<100ms", label: "retrieval latency at 10,000+ daily tasks" },
  { value: "99.9%", label: "uptime across shipped microservices" },
  { value: "1,000+", label: "daily users served by production AI systems" },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
      <div className="grid gap-12 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div>
          <p className="text-sm text-muted">
            Computer Science, SRM AP University — CGPA 9.13
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-paper sm:text-5xl md:text-6xl animate-float">
            I build the pipelines that let language models{" "}
            <em className="not-italic bg-gradient-text font-bold">retrieve, reason and respond</em>{" "}
            in real time.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted">
            I'm Nikitha — I design RAG systems, conversational agents and the
            infrastructure underneath them: async task queues, observability,
            and services that hold up under real traffic. Most recently I
            engineered LLM and multimodal AI products at CultureVO, and I
            compete in national hackathons on the side, with a first-place
            finish at IIT BHU's HaXplore.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all hover:-translate-y-1"
            >
              See the projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-signal/50 bg-panel px-6 py-3 text-sm font-medium text-paper shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:border-signal hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-1"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative">
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
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-wire pt-8 sm:grid-cols-3">
        {readouts.map((r) => (
          <div key={r.label} className="group rounded-xl border border-wire bg-panel/30 p-6 backdrop-blur-sm transition-all hover:border-signal/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <dt className="font-display text-4xl font-bold bg-gradient-text">{r.value}</dt>
            <dd className="mt-2 text-sm text-paper font-medium">{r.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
