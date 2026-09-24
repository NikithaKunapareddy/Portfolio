export default function Footer() {
  return (
    <footer className="border-t border-wire/30 bg-panel/10 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p className="font-medium text-paper/80">© {new Date().getFullYear()} Nikitha Kunapareddy. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <span className="text-signal">Next.js</span> & <span className="text-secondary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
