import { useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Check, AlertCircle } from "lucide-react";
import { site } from "../data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { viewportOnce } from "../lib/motion";

type Status = "idle" | "sending" | "ok" | "error";

// FormSubmit.co — no API key needed. The first submission triggers a one-time
// confirmation email to the address below; click the link once to activate.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot: bots fill hidden fields
    if (fd.get("_honey")) return;

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      _subject: `Portfolio contact: ${fd.get("subject") ?? ""}`,
      _template: "table",
      _captcha: "false",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Please fill in your name, email, and a message.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };
      const success = data.success === "true" || data.success === true;

      if (res.ok && success) {
        setStatus("ok");
        setMessage("Thanks — your message is on its way. I'll get back to you soon.");
        form.reset();
      } else if (typeof data.message === "string" && /activat/i.test(data.message)) {
        // FormSubmit's one-time setup step (owner clicks the link in their inbox once).
        setStatus("error");
        setMessage(
          `This form needs a one-time activation. In the meantime, email me directly at ${site.email}.`,
        );
      } else {
        throw new Error(data.message || "Bad response");
      }
    } catch {
      setStatus("error");
      setMessage(
        `Couldn't send that just now. Email me directly at ${site.email} and I'll reply.`,
      );
    }
  }

  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  ];

  const disabled = status === "sending";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading index="05" title="Let's build something" kicker="Get in touch" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-md text-base leading-relaxed text-fog-400 sm:text-lg">
            I'm open to internships, full-stack / AI engineering roles, and
            interesting collaborations. Drop me a line and I'll get back to you.
          </p>

          <div className="mt-8 space-y-3">
            {details.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="glass flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors hover:border-white/20">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.04] text-accent">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <div className="text-xs text-fog-500">{label}</div>
                    <div className="text-sm text-fog-200">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-fog-400 transition-all hover:-translate-y-0.5 hover:text-fog-100"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-fog-400 transition-all hover:-translate-y-0.5 hover:text-fog-100"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass space-y-4 rounded-2xl p-6 sm:p-8"
        >
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" autoComplete="name" />
            <Field name="email" label="Email" type="email" autoComplete="email" />
          </div>
          <Field name="subject" label="Subject" />
          <div>
            <label htmlFor="message" className="eyebrow mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-y rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-fog-100 outline-none transition-colors placeholder:text-fog-500 focus:border-accent/50"
              placeholder="What are you working on?"
            />
          </div>

          <button
            type="submit"
            disabled={disabled}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            <Send className={`h-4 w-4 ${disabled ? "animate-pulse" : ""}`} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status !== "idle" && status !== "sending" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${
                status === "ok"
                  ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                  : "border-red-400/25 bg-red-400/10 text-red-300"
              }`}
            >
              {status === "ok" ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              <span>{message}</span>
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-fog-100 outline-none transition-colors placeholder:text-fog-500 focus:border-accent/50"
      />
    </div>
  );
}
