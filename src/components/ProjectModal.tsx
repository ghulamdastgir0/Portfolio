import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check } from "lucide-react";
import type { Project } from "../data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="glass relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl"
          >
            <div className="flex items-start justify-between gap-6 border-b border-white/8 p-6 sm:p-8">
              <div>
                <span className="font-mono text-xs text-accent-2">{project.year}</span>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-fog-100 sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <button
                aria-label="Close"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-fog-300 transition-colors hover:bg-white/5 hover:text-fog-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-fog-300 sm:text-base">
                {project.overview}
              </p>

              <h4 className="eyebrow mt-8">Highlights</h4>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-fog-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="eyebrow mt-8">Stack</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-fog-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-ink-950"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
