import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-display text-xs font-bold text-ink-950">
            {site.monogram}
          </span>
          <p className="text-sm text-fog-500">
            Designed &amp; built by {site.name}
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-fog-500">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-fog-200">
              {n.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-fog-500">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
