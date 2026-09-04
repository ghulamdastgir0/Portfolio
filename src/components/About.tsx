import { motion } from "motion/react";
import { site } from "../data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { staggerContainer, fadeUp, viewportOnce } from "../lib/motion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading index="01" title="About" kicker="Who I am" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6"
        >
          {site.about.map((p) => (
            <motion.p
              key={p.slice(0, 24)}
              variants={fadeUp}
              className="text-base leading-relaxed text-fog-400 sm:text-lg"
            >
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 pt-4">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-4 py-5 text-center"
              >
                <div className="font-display text-2xl font-bold text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-fog-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-accent/30 via-transparent to-accent-2/25 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-2">
            <img
              src={site.portrait}
              alt={site.name}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-ink-900/90 px-4 py-2 font-mono text-xs text-fog-400 backdrop-blur">
            <span className="text-accent-2">@</span> FAST NUCES, Lahore
          </div>
        </motion.div>
      </div>
    </section>
  );
}
