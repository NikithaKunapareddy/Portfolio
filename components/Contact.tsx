const links = [
  { label: "Email", value: "anikitha_kunapareddy@srmap.edu.in", href: "mailto:anikitha_kunapareddy@srmap.edu.in" },
  { label: "Phone", value: "+91 93904 71597", href: "tel:+919390471597" },
  { label: "GitHub", value: "NikithaKunapareddy", href: "https://github.com/NikithaKunapareddy" },
  { label: "LinkedIn", value: "Nikitha Kunapareddy", href: "https://www.linkedin.com/in/nikitha-kunapareddy-390833291/" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <h2 className="font-display text-4xl font-bold bg-gradient-text inline-block">Let's talk</h2>
      <p className="mt-4 max-w-prose text-muted">
        Open to roles and collaborations in AI systems, backend infrastructure
        and applied ML. The fastest way to reach me is email or phone.
      </p>
      <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((l) => (
          <div key={l.label} className="group rounded-2xl border border-wire/30 bg-panel/10 p-5 lg:p-6 backdrop-blur-sm transition-all hover:border-signal/40 hover:bg-panel/20 hover:-translate-y-1">
            <dt className="text-xs font-bold text-muted uppercase tracking-widest group-hover:text-signal transition-colors">{l.label}</dt>
            <dd className="mt-3">
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`font-display font-bold text-paper hover:text-signal transition-colors block ${l.label === 'Email' ? 'text-sm lg:text-sm break-all' : 'text-base lg:text-lg'}`}
                title={l.value}
              >
                {l.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
