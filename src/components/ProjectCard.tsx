import type { PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onOpen: (p: Project) => void;
  index: number;
};

export function ProjectCard({ project, onOpen, index }: Props) {
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(139,123,255,0.16), transparent 70%)`;

  function handleMove(e: PointerEvent<HTMLButtonElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 10);
    mx.set(px * 100);
    my.set(py * 100);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
    mx.set(50);
    my.set(50);
  }

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors hover:border-white/20 sm:p-8"
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: glow }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-fog-500">{project.year}</span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-fog-400 transition-all group-hover:border-accent/50 group-hover:text-fog-100">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <h3 className="relative mt-4 font-display text-xl font-semibold leading-snug text-fog-100">
        {project.title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-fog-400">
        {project.blurb}
      </p>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {project.tags.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-ink-850/60 px-2 py-1 font-mono text-[11px] text-fog-400"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  );
}
