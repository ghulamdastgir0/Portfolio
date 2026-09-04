export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "FastAPI", "REST APIs", "Prisma", "Swagger"],
  },
  {
    label: "AI & Agents",
    items: ["Agentic AI", "LangGraph", "RAG", "Gemini", "HuggingFace", "OpenCV", "MediaPipe"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "pgvector", "Microsoft SQL Server", "SQL"],
  },
  {
    label: "Cloud & Tooling",
    items: ["Docker", "GCP / Cloud Run", "Socket.IO", "JWT & bcrypt", "Git & GitHub", "Postman"],
  },
  {
    label: "Foundations",
    items: ["Python", "C/C++", "scikit-learn", "Pandas & NumPy", "Matplotlib"],
  },
];

export const marqueeSkills: string[] = [
  "React", "Next.js", "TypeScript", "NestJS", "Node.js", "LangGraph", "RAG",
  "PostgreSQL", "Prisma", "pgvector", "Docker", "GCP", "Socket.IO", "Tailwind",
  "Python", "FastAPI", "OpenCV", "MongoDB", "Gemini", "HuggingFace",
];
