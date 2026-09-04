export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Amperor Tech",
    period: "Jul 2026 – Aug 2026",
    points: [
      "Built web development projects featuring agentic AI chatbot assistants.",
      "Contributed to full-stack feature development across frontend and backend, collaborating with the engineering team on production-facing web applications.",
      "Gained hands-on experience integrating conversational AI capabilities into real-world web products.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "10Pearls",
    period: "Aug 2026 – Sep 2026",
    points: [
      "Developed and maintained full-stack features using MongoDB, Express.js, React, and Node.js.",
      "Collaborated with the engineering team on building and debugging responsive, production-quality web application components.",
    ],
  },
];
