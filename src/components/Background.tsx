import { motion, useScroll, useTransform } from "motion/react";

/**
 * Fixed, non-interactive ambient layer:
 * two slow-drifting glow orbs, a faint grid, and film grain.
 * Parallaxes gently with page scroll.
 */
export function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      <motion.div
        style={{ y: y1 }}
        className="absolute -left-[15%] -top-[10%] h-[45rem] w-[45rem] rounded-full opacity-60 blur-[120px] animate-drift-slow"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(139,123,255,0.45),transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-[15%] -right-[10%] h-[40rem] w-[40rem] rounded-full opacity-50 blur-[120px] animate-drift-slower"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),transparent_70%)]" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 100% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
