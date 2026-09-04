import { motion } from "motion/react";
import { skillGroups, marqueeSkills } from "../data/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { staggerContainer, viewportOnce } from "../lib/motion";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading index="03" title="Skills & Tools" kicker="What I build with" />
      </Reveal>

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: gi * 0.06 }}
          >
            <h3 className="eyebrow mb-3">{group.label}</h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              variants={staggerContainer(0.04)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-fog-300 transition-colors hover:border-accent/40 hover:text-fog-100"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="whitespace-nowrap font-mono text-sm text-fog-500"
            >
              {s}
              <span className="ml-4 text-accent/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
