const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-wire bg-[#050510]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-xl font-bold text-paper hover:bg-gradient-text transition-all duration-300"
        >
          Nikitha Kunapareddy
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          download
          className="rounded-full border border-wire bg-panel/30 px-5 py-2 text-sm font-medium text-paper hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
