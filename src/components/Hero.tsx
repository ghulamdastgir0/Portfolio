import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown } from "lucide-react";
import { site } from "../data/site";
import { staggerContainer, fadeUp } from "../lib/motion";

const leadWords = ["Building", "production‑grade", "web", "platforms"];
const gradWords = ["end", "to", "end"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-20 pt-32 lg:flex-row lg:items-center lg:gap-12"
    >
      <motion.div
        className="lg:flex-[1.3]"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          {site.role}
        </motion.p>

        <h1 className="mt-6 flex flex-wrap gap-x-[0.28em] gap-y-1 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-fog-100">
          {leadWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-[0.08em]">
              <motion.span variants={fadeUp} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
          <span className="inline-flex gap-x-[0.28em] whitespace-nowrap">
            {gradWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-[0.08em]">
                <motion.span variants={fadeUp} className="inline-block text-gradient">
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-base leading-relaxed text-fog-400 sm:text-lg"
        >
          {site.intro}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-semibold text-fog-200 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
          {[
            { icon: Github, href: site.socials.github, label: "GitHub" },
            { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-fog-400 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-fog-100"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 lg:mt-0 lg:flex-1"
        initial={{ opacity: 0, y: 40, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1000 }}
      >
        <CodeCard />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute inset-x-0 bottom-7 mx-auto hidden w-fit text-fog-500 lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}

const codeLines: { indent: number; tokens: [string, string][] }[] = [
  { indent: 0, tokens: [["const ", "text-accent-3"], ["dev ", "text-fog-100"], ["= ", "text-fog-500"], ["{", "text-fog-400"]] },
  { indent: 1, tokens: [["stack:", "text-accent-2"], [" ['NestJS', 'Next.js', 'LangGraph'],", "text-fog-300"]] },
  { indent: 1, tokens: [["focus:", "text-accent-2"], [" 'agentic AI + clean architecture',", "text-fog-300"]] },
  { indent: 1, tokens: [["ships:", "text-accent-2"], [" async () => ", "text-fog-300"], ["'production'", "text-accent-3"], [",", "text-fog-400"]] },
  { indent: 0, tokens: [["}", "text-fog-400"]] },
];

function CodeCard() {
  return (
    <div className="glass relative mx-auto max-w-md rounded-2xl p-1.5 shadow-[0_40px_120px_-30px_rgba(139,123,255,0.4)]">
      <div className="rounded-[0.85rem] bg-ink-900/80 ring-1 ring-white/5">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-fog-500">~/portfolio/dev.ts</span>
        </div>
        <div className="space-y-2 px-5 py-5 font-mono text-[13px] leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
              className="flex"
            >
              <span className="mr-4 select-none text-fog-500/40">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {line.tokens.map(([t, cls], j) => (
                  <span key={j} className={cls}>
                    {t}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}
          <motion.span
            className="ml-9 inline-block h-4 w-2 bg-accent-2 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}
