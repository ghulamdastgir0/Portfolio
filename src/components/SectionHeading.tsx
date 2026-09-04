import { motion } from "motion/react";
import { viewportOnce } from "../lib/motion";

type Props = {
  index: string;
  title: string;
  kicker?: string;
};

export function SectionHeading({ index, title, kicker }: Props) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent/80">{index}</span>
        <span className="eyebrow">{kicker ?? title}</span>
      </div>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-fog-100 sm:text-5xl">
        {title}
      </h2>
      <motion.div
        className="mt-6 h-px origin-left bg-gradient-to-r from-accent via-accent-2/60 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
