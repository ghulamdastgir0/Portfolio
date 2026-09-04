import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, FileText } from "lucide-react";
import { site } from "../data/site";

const sectionIds = site.nav.map((n) => n.href.slice(1));

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`mt-3 flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass py-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]"
            : "border border-transparent py-3"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 font-display text-sm font-bold text-ink-950">
            {site.monogram}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-fog-100 sm:block">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-3 py-1.5 text-sm text-fog-400 transition-colors hover:text-fog-100"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${isActive ? "text-fog-100" : ""}`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 sm:flex"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-fog-300 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass absolute inset-x-4 top-20 rounded-2xl p-2 md:hidden"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-fog-300 hover:bg-white/5 hover:text-fog-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
