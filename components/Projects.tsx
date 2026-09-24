const featured = [
  {
    name: "MultiMind-RAG-Agent",
    tag: "AI-Driven Knowledge Orchestration Platform",
    stack: "RAG · Vector Embeddings · LLM · Redis · RabbitMQ",
    description:
      "A real-time knowledge orchestration platform unifying document analysis across 10,000+ documents with vector embeddings, conversational memory and live web research. Sub-50ms memory retrieval via Redis, 5,000+ async tasks a day through RabbitMQ, and custom RFM-scored personalized retrieval, improving answer relevance by 30%.",
  },
  {
    name: "DealPulse AI",
    tag: "Smart Opportunity Stage Predictor",
    stack: "Python · PyTorch · Transformers · FastAPI · MLflow · SHAP",
    description:
      "An AI-powered CRM opportunity intelligence system that predicts sales deal stages directly from unstructured CRM conversation notes, cutting manual pipeline updates. A fine-tuned DistilBERT model runs behind a FastAPI service with MLflow tracking and SHAP explainability, returning real-time predictions, confidence scores and key CRM insights.",
  },
];

const more = [
  {
    name: "Adaptive Photo Restoration Pipeline",
    stack: "Python · OpenCV · NumPy · Scikit-Image · CNN",
    description:
      "Restores degraded historical images through denoising, inpainting and contrast enhancement, reaching 20.15 dB PSNR and 0.83 SSIM without GPU acceleration. A 2D-FFT noise analysis framework and a lightweight 3-layer CNN classify noise types, improving BRISQUE scores by 44–47%, alongside Hough Transform fold detection with Telea Fast Marching inpainting.",
  },
  {
    name: "Familia",
    stack: "Next.js · FastAPI · Supabase · PostgreSQL · WebSockets",
    description:
      "A cross-cultural social networking platform with AI-powered multilingual communication and voice/video verification. Full-stack architecture with JWT auth and Row-Level Security for low-latency messaging, plus relationship-progression levels, global family rooms and leaderboards.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-wire bg-panel/20 py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="font-display text-4xl font-bold bg-gradient-text inline-block">Selected work</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featured.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col justify-between rounded-2xl border border-wire bg-panel/30 p-8 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1"
            >
              <div>
                <p className="text-sm font-semibold text-secondary">{p.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-paper group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">{p.description}</p>
              </div>
              <p className="mt-8 text-sm font-medium text-signal">{p.stack}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {more.map((p) => (
            <article key={p.name} className="group rounded-xl border border-wire/50 bg-panel/10 p-6 backdrop-blur-sm transition-all hover:border-secondary/40 hover:bg-panel/20">
              <h3 className="font-display text-xl font-bold text-paper group-hover:text-secondary transition-colors">{p.name}</h3>
              <p className="mt-3 text-muted leading-relaxed">{p.description}</p>
              <p className="mt-4 text-sm font-medium text-primary">{p.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
