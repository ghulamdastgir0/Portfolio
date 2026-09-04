export type Project = {
  id: string;
  title: string;
  year: string;
  blurb: string;
  overview: string;
  features: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "opsflow",
    title: "OpsFlow — AI-Assisted Corporate Operations Platform",
    year: "2026",
    blurb:
      "Multi-tenant platform where employees file expense, purchase, and leave requests through a web chat assistant or Slack, with policy-aware routing and multi-stage approvals.",
    overview:
      "OpsFlow is a multi-tenant, AI-assisted corporate operations platform that lets employees file expense, purchase, and leave requests via a web chat assistant or Slack. Built as a NestJS + Next.js monorepo with PostgreSQL and Prisma, it integrates LangGraph and Gemini (@langchain/google-genai) for a tool-calling assistant agent. It implements policy-aware request routing with configurable per-manager spend delegations and multi-stage manager–finance approval workflows, plus a separate platform-admin plane for provisioning tenants with strict isolation and role-based access control across every endpoint.",
    features: [
      "Multi-tenant architecture with strict tenant isolation",
      "File requests via a web chat assistant or Slack",
      "LangGraph + Gemini tool-calling assistant agent",
      "Policy-aware routing with per-manager spend delegations",
      "Multi-stage manager–finance approval workflows",
      "Separate platform-admin plane for provisioning tenants",
      "Role-based access control enforced on every endpoint",
      "Production Slack integration: OAuth, event dedup, role-based broadcasts",
      "Fully audited approval pipeline",
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "LangGraph", "Gemini", "Slack API", "RBAC"],
  },
  {
    id: "recruitment",
    title: "AI Recruitment Pipeline Management System",
    year: "2026",
    blurb:
      "Capstone-level recruitment platform with AI-driven CV parsing, semantic candidate–job matching, and an AI voice interview system with client-side proctoring.",
    overview:
      "A capstone-level AI Recruitment Pipeline Management System built with NestJS, Prisma, and pgvector. It performs AI-driven CV parsing, semantic candidate–job matching, and ranking using locally-hosted embeddings (HuggingFace Transformers). An AI voice interview system orchestrates conversation flow with LangGraph, uses Groq for LLM/Whisper/TTS, and runs MediaPipe + TensorFlow.js client-side proctoring. RAG grounds an HR explainability chat in company policy and drives automated candidate emails via Brevo.",
    features: [
      "AI-driven CV parsing and structured extraction",
      "Semantic candidate–job matching and ranking with pgvector",
      "Locally-hosted embeddings via HuggingFace Transformers",
      "AI voice interview system orchestrated with LangGraph",
      "Groq-powered LLM, Whisper transcription, and TTS",
      "MediaPipe + TensorFlow.js client-side proctoring",
      "RAG-grounded HR explainability chat on company policy",
      "Automated candidate email notifications via Brevo",
      "Role-based tool-calling with confirmation-gated mutations and audit logging",
    ],
    tags: ["NestJS", "Prisma", "pgvector", "RAG", "LangGraph", "Groq", "HuggingFace", "TensorFlow.js"],
  },
  {
    id: "smart-parking",
    title: "Smart Parking Management System with Agentic AI Assistant",
    year: "2026",
    blurb:
      "Full-stack smart parking platform with QR-based check-in/out, live slot occupancy tracking, automatic overtime billing, and an in-app agentic AI assistant.",
    overview:
      'A full-stack Smart Parking Management System built with NestJS, Prisma, PostgreSQL, and Next.js (React 19). It provides QR-code based check-in/check-out, live slot occupancy tracking, and automatic overtime/extension billing via a scheduled monitoring cron. "Adam," an in-app AI assistant built with LangGraph and Gemini, offers role-based tool access and confirm-before-mutate safeguards, plus a policy-document RAG tool using locally-embedded cosine search. Both services deploy to Google Cloud Run with Dockerized CI/CD via Cloud Build, Supabase Postgres, and Socket.IO real-time sync.',
    features: [
      "QR-code based check-in and check-out",
      "Live slot occupancy tracking across multiple lots",
      "Automatic overtime/extension billing via a scheduled cron",
      '"Adam" agentic AI assistant built with LangGraph and Gemini',
      "Role-based tool access with confirm-before-mutate safeguards",
      "Policy-document RAG tool with locally-embedded cosine search",
      "Deployed to Google Cloud Run with Dockerized CI/CD via Cloud Build",
      "Supabase Postgres with Socket.IO real-time sync",
      "Hardened security: helmet, RLS, rate limiting",
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "LangGraph", "Gemini", "Socket.IO", "Cloud Run"],
  },
  {
    id: "prism",
    title: "PRISM — Biometric Presence Verification",
    year: "2026",
    blurb:
      "Full-stack AI-powered biometric attendance system using facial recognition and liveness detection to eliminate proxy fraud and identity spoofing on campus.",
    overview:
      "PRISM tackles campus proxy attendance fraud with a full-stack MERN + FastAPI architecture. It implements AI-driven facial recognition and liveness detection using OpenCV and MediaPipe, along with dual-mode authentication (face + fingerprint). The backend features confidence scoring, anomaly detection, and encrypted biometric templates for secure processing — reducing proxy attendance and identity fraud risk to near zero in testing environments.",
    features: [
      "AI-driven facial recognition and liveness detection with OpenCV and MediaPipe",
      "Dual-mode authentication: face recognition + fingerprint verification",
      "Confidence scoring and anomaly detection for suspicious check-ins",
      "Encrypted biometric templates for secure data processing",
      "Full-stack MERN + FastAPI architecture for scalable deployment",
      "Real-time verification pipeline with low-latency response",
      "Reduced proxy attendance and identity fraud risk to near zero in testing",
    ],
    tags: ["MERN", "FastAPI", "Python", "OpenCV", "MediaPipe", "MongoDB", "Biometrics"],
  },
  {
    id: "air-drawing",
    title: "Air Drawing — Real-Time CV Tool",
    year: "2025",
    blurb:
      "Contactless real-time drawing app — draw, erase, and switch colors entirely through hand gestures with no physical input required.",
    overview:
      "Air Drawing is a hands-free drawing system built with OpenCV and MediaPipe. It tracks hand landmarks in real time to detect gestures for drawing, erasing, and selecting colors — no mouse or touchscreen needed. Performance is optimized with motion smoothing, gesture debouncing, and dynamic brush scaling for low-latency, stable gesture recognition.",
    features: [
      "Real-time hand tracking using MediaPipe landmark detection",
      "Gesture-based controls: draw, erase, and switch colors hands-free",
      "Motion smoothing for fluid, stable stroke rendering",
      "Gesture debouncing to prevent unintended inputs",
      "Dynamic brush scaling based on hand positioning",
      "Low-latency frame processing with OpenCV",
      "Completely contactless — no mouse or touchscreen required",
    ],
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Gesture Recognition"],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker App",
    year: "2025",
    blurb:
      "Secure full-stack personal finance app with multi-currency support, JWT auth, receipt storage, and a responsive cross-device UI.",
    overview:
      "A production-ready finance management application built with React (Vite), Tailwind CSS, Node.js, and PostgreSQL. Features multi-currency support, timezone handling, and receipt uploads alongside full transaction CRUD. The backend is secured with JWT authentication and bcrypt hashing, with stored procedures ensuring data integrity.",
    features: [
      "Multi-currency support with timezone handling",
      "Secure JWT authentication with bcrypt password hashing",
      "Receipt storage for transaction documentation",
      "Full transaction CRUD with category-wise tracking",
      "Responsive frontend built with React (Vite) and Tailwind CSS",
      "RESTful backend using Node.js, Express, and PostgreSQL",
      "Stored procedures and database constraints for data integrity",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "JWT"],
  },
  {
    id: "task-management",
    title: "Task Management System",
    year: "2025",
    blurb:
      "Full-stack team task management platform with JWT auth, a responsive admin dashboard, and a 40% improvement in task retrieval time.",
    overview:
      "Built for team productivity using React, Node.js, and MSSQL. Features JWT-based authentication, an optimized database schema that improved query performance by 40%, and a responsive admin dashboard. Supports task creation with deadlines and priorities, team member assignment via email, and comprehensive status tracking.",
    features: [
      "Secure JWT-based authentication system",
      "Task creation with title, description, deadlines, and priorities",
      "Team member assignment via email",
      "Status tracking: Pending, In Progress, Completed, Cancelled",
      "Advanced filtering and search by status, date, and assignee",
      "Optimised MSSQL schema — 40% faster task retrieval",
      "Responsive admin dashboard for team oversight",
    ],
    tags: ["React", "Node.js", "MSSQL", "JWT", "Express", "Dashboard"],
  },
  {
    id: "social-network",
    title: "Social Network App",
    year: "2024",
    blurb:
      "C++ console social networking application demonstrating OOP principles with feeds, likes, comments, reposting, and friend management.",
    overview:
      "A console-based social network built in C++ to demonstrate core OOP principles in a realistic context. Implements user authentication, a home feed of friends' posts, like/unlike and comment functionality, post reposting, personal user pages, and friend list management — grounded in clean OOP design using inheritance, encapsulation, and polymorphism.",
    features: [
      "User authentication with login and logout",
      "Home feed displaying friends' posts",
      "Like/unlike and comment functionality",
      "Post reposting and sharing features",
      "Personal user pages and profile management",
      "Friend list management and discovery",
      "OOP design: inheritance, encapsulation, polymorphism",
    ],
    tags: ["C++", "OOP", "Data Structures", "Software Design"],
  },
];
