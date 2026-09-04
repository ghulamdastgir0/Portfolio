import { motion } from "motion/react";
import { experience } from "../data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { viewportOnce } from "../lib/motion";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading index="02" title="Experience" kicker="Where I've worked" />
      </Reveal>

      <div className="relative flex flex-col gap-6">
        {/* continuous rail: sits at the horizontal centre of the node dots (left-3 = 12px) */}
        <motion.span
          aria-hidden
          className="absolute left-3 top-8 bottom-8 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-accent via-accent-2/40 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex gap-4 sm:gap-6"
          >
            {/* node: 24px box whose centre (12px) lines up with the rail */}
            <span className="relative z-10 mt-7 grid h-6 w-6 shrink-0 place-items-center">
              <motion.span
                className="absolute inset-0 rounded-full bg-accent/15"
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent-2 ring-4 ring-ink-950" />
            </span>

            <div className="glass flex-1 rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-[0_24px_60px_-24px_rgba(139,123,255,0.35)] sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-fog-100">
                  {job.role}
                  <span className="text-gradient"> · {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-fog-500">{job.period}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-fog-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
