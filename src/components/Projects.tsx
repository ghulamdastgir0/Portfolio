import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <SectionHeading index="04" title="Selected Work" kicker="Things I've built" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
