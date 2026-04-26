const projects = [
  {
    id: 1,
    title: "PRISM – Biometric Presence Verification",
    description:
      "A full-stack AI-powered biometric attendance system using facial recognition and liveness detection to eliminate proxy fraud and identity spoofing on campus.",
    briefDescription:
      "PRISM tackles campus proxy attendance fraud with a full-stack MERN + FastAPI architecture. It implements AI-driven facial recognition and liveness detection using OpenCV and MediaPipe, along with dual-mode authentication (face + fingerprint). The backend features confidence scoring, anomaly detection, and encrypted biometric templates for secure processing. Reduced proxy attendance and identity fraud risk to near zero in testing environments.",
    tags: ["MERN Stack", "FastAPI", "Python", "OpenCV", "MediaPipe", "AI/ML", "Biometrics", "MongoDB"]
  },
  {
    id: 2,
    title: "Air Drawing – Real-Time CV Tool",
    description:
      "A contactless, real-time drawing application powered by computer vision — draw, erase, and switch colors entirely through hand gestures with no physical input required.",
    briefDescription:
      "Air Drawing is a hands-free drawing system built with OpenCV and MediaPipe. It tracks hand landmarks in real time to detect gestures for drawing, erasing, and selecting colors — no mouse or touchscreen needed. Performance is optimized with motion smoothing, gesture debouncing, and dynamic brush scaling, achieving low-latency and stable gesture recognition for seamless real-time interaction.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Gesture Recognition", "Real-time"]
  },
  {
    id: 3,
    title: "Expense Tracker App",
    description:
      "A secure full-stack personal finance application with multi-currency support, JWT authentication, receipt storage, and a responsive cross-device UI.",
    briefDescription:
      "A production-ready finance management application built with React (Vite), Tailwind CSS, Node.js, and PostgreSQL. Features multi-currency support, timezone handling, and receipt uploads alongside full transaction CRUD. The backend is secured with JWT authentication and bcrypt hashing, with stored procedures ensuring data integrity. Delivered end-to-end security and a fully responsive cross-device design.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT", "bcrypt"]
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "A full-stack team task management platform with JWT authentication, a responsive admin dashboard, and a 40% improvement in task retrieval time.",
    briefDescription:
      "Built for team productivity using React, Node.js, and MSSQL. Features JWT-based authentication, an optimized database schema that improved query performance by 40%, and a responsive admin dashboard. Supports task creation with deadlines and priorities, team member assignment via email, and comprehensive status tracking (Pending, In Progress, Completed, Cancelled). Delivered production-ready for real team collaboration.",
    tags: ["React", "Node.js", "MSSQL", "JWT", "Express", "Database Design", "Admin Dashboard"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations, interactive project modals, and a contact form — built with pure vanilla JavaScript.",
    briefDescription:
      "Professional portfolio built with HTML5, CSS3, and vanilla JavaScript — no frameworks. Features a responsive layout using CSS Grid and Flexbox, smooth CSS animations and transitions, a dynamic project grid with detailed modal popups, a contact form with direct email integration, and smooth-scroll navigation. Optimised for performance and cross-browser compatibility.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "CSS Grid", "Flexbox"]
  },
  {
    id: 6,
    title: "Social Network App",
    description:
      "A C++ console-based social networking application demonstrating OOP principles with user login, feeds, likes, comments, reposting, and friend management.",
    briefDescription:
      "A console-based social network built in C++ to demonstrate core OOP principles in a realistic context. Implements user authentication, a home feed of friends' posts, like/unlike and comment functionality, post reposting, personal user pages, and friend list management. Architecture is grounded in clean OOP design using inheritance, encapsulation, and polymorphism for a maintainable, extensible codebase.",
    tags: ["C++", "OOP", "Console Application", "Data Structures", "Software Design"]
  }
];

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const downloadCVBtn = document.getElementById("downloadCV");
const projectsGrid = document.getElementById("projectsGrid");

// Initialize projects
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  console.log("Portfolio website loaded successfully!");
});

// Load projects
function loadProjects() {
  projectsGrid.innerHTML = "";

  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

// Create cards (removed image)
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
    </div>
  `;

  // Add click event to open modal
  card.addEventListener("click", () => {
    openProjectModal(project);
  });

  return card;
}

// Open project modal
function openProjectModal(project) {
  let modal = document.getElementById("projectModal");
  if (!modal) {
    modal = createProjectModal();
    document.body.appendChild(modal);
  }
  populateModal(project);

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Close on escape key
  const handleEscape = e => {
    if (e.key === "Escape") {
      closeProjectModal();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);
}

// Create project modal structure - Improved design
function createProjectModal() {
  const modal = document.createElement("div");
  modal.id = "projectModal";
  modal.className = "project-modal";

  modal.innerHTML = `
    <div class="project-modal-overlay"></div>
    <div class="project-modal-content">
      <div class="project-modal-header">
        <div class="project-modal-header-content">
          <h2 class="project-modal-title" id="modalTitle"></h2>
          <p class="project-modal-subtitle" id="modalSubtitle"></p>
        </div>
        <button class="project-modal-close" onclick="closeProjectModal()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="project-modal-body">
        <div class="project-modal-section">
          <div class="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </div>
          <div class="section-content">
            <h3>Project Overview</h3>
            <p class="project-modal-description" id="modalDescription"></p>
          </div>
        </div>

        <div class="project-modal-section">
          <div class="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <div class="section-content">
            <h3>Key Features</h3>
            <div class="features-grid" id="modalFeatures"></div>
          </div>
        </div>

        <div class="project-modal-section">
          <div class="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
          </div>
          <div class="section-content">
            <h3>Technologies Used</h3>
            <div class="project-tags-grid" id="modalTags"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.addEventListener("click", e => {
    if (
      e.target === modal ||
      e.target.classList.contains("project-modal-overlay")
    ) {
      closeProjectModal();
    }
  });

  return modal;
}

// Populate modal with project data
function populateModal(project) {
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSubtitle").textContent = `${project
    .tags[0]} • ${project.tags[1] || "Development"}`;
  document.getElementById("modalDescription").textContent =
    project.briefDescription;

  // Generate features list
  const features = generateProjectFeatures(project.id);
  const featuresContainer = document.getElementById("modalFeatures");
  featuresContainer.innerHTML = "";
  features.forEach(feature => {
    const featureElement = document.createElement("div");
    featureElement.className = "feature-item";
    featureElement.innerHTML = `
      <div class="feature-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span>${feature}</span>
    `;
    featuresContainer.appendChild(featureElement);
  });

  // Generate tags
  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = "";
  project.tags.forEach(tag => {
    const tagElement = document.createElement("span");
    tagElement.className = "project-tag";
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });
}

// Generate project features based on project ID
function generateProjectFeatures(projectId) {
  const featuresMap = {
    1: [
      "AI-driven facial recognition and liveness detection using OpenCV and MediaPipe",
      "Dual-mode authentication: face recognition + fingerprint verification",
      "Confidence scoring and anomaly detection for suspicious check-ins",
      "Encrypted biometric templates for secure data processing",
      "Full-stack MERN + FastAPI architecture for scalable deployment",
      "Real-time verification pipeline with low-latency response",
      "Reduced proxy attendance and identity fraud risk to near zero in testing",
      "Scalable backend designed for campus-wide deployment"
    ],
    2: [
      "Real-time hand tracking using MediaPipe landmark detection",
      "Gesture-based controls: draw, erase, and switch colors hands-free",
      "Motion smoothing for fluid, stable stroke rendering",
      "Gesture debouncing to prevent unintended inputs",
      "Dynamic brush scaling based on hand positioning",
      "Low-latency frame processing with OpenCV",
      "Completely contactless — no mouse or touchscreen required",
      "Optimized for smooth real-time user interaction"
    ],
    3: [
      "Multi-currency support with timezone handling",
      "Secure JWT authentication with bcrypt password hashing",
      "Receipt storage for transaction documentation",
      "Full transaction CRUD with category-wise tracking",
      "Responsive frontend built with React (Vite) and Tailwind CSS",
      "RESTful backend using Node.js, Express, and PostgreSQL",
      "Stored procedures and database constraints for data integrity",
      "Production-ready with end-to-end security and cross-device design"
    ],
    4: [
      "Secure JWT-based authentication system",
      "Task creation with title, description, deadlines, and priorities",
      "Team member assignment via email",
      "Status tracking: Pending, In Progress, Completed, Cancelled",
      "Advanced filtering and search by status, date, and assignee",
      "Optimised MSSQL schema — 40% faster task retrieval",
      "Responsive admin dashboard for team oversight",
      "Production-ready system for real team collaboration"
    ],
    5: [
      "Responsive layout using CSS Grid and Flexbox",
      "Dynamic project grid with detailed modal popups",
      "Smooth CSS animations and hover transitions",
      "Contact form with direct email client integration",
      "Smooth-scroll navigation between sections",
      "Cross-browser compatible and performance optimised",
      "Vanilla JavaScript only — zero dependencies",
      "Clean, maintainable code structure"
    ],
    6: [
      "User authentication with login and logout",
      "Home feed displaying friends' posts in real time",
      "Like/unlike and comment functionality",
      "Post reposting and sharing features",
      "Personal user pages and profile management",
      "Friend list management and discovery",
      "OOP design: inheritance, encapsulation, polymorphism",
      "Clean C++ console architecture with extensible design"
    ]
  };

  return (
    featuresMap[projectId] || [
      "Modern and responsive user interface",
      "Optimized performance and fast loading",
      "Cross-browser compatibility",
      "Mobile-first design approach",
      "Clean and maintainable code structure"
    ]
  );
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

window.closeProjectModal = closeProjectModal;

// Contact Form Handler (Fixed email subject duplication)
contactForm.addEventListener("submit", async e => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };

  // Validate form data
  if (!data.name || !data.email || !data.subject || !data.message) {
    showFormStatus("Please fill in all fields.", "error");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showFormStatus("Please enter a valid email address.", "error");
    return;
  }

  try {
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `);

    window.location.href = `mailto:ghulamdastgir12905@gmail.com?subject=${subject}&body=${body}`;

    // success message
    showFormStatus(
      "Thank you! Your message has been prepared. Your email client should open shortly.",
      "success"
    );

    // Reset form
    contactForm.reset();
  } catch (error) {
    console.error("Error sending email:", error);
    showFormStatus(
      "Sorry, there was an error sending your message. Please try again or contact me directly.",
      "error"
    );
  }
});

// Show form status message
function showFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
  formStatus.style.display = "block";

  // Hide message after 5 seconds for success, 8 seconds for error
  const timeout = type === "success" ? 5000 : 8000;
  setTimeout(() => {
    formStatus.style.display = "none";
  }, timeout);
}

// CV Download Handler
downloadCVBtn.addEventListener("click", e => {
  e.preventDefault();
  downloadCV();
});

// CV Download function
async function downloadCV() {
  try {
    const response = await fetch("./public/GhulamDastgirResume.pdf");

    if (!response.ok) throw new Error("File not found");

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "GhulamDastgir_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url); // clean up
    showNotification("CV downloaded successfully!", "success");

  } catch (error) {
    showNotification("Download failed. File not found!", "error");
    console.error("Download error:", error);
  }
}

// Notification function
function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success"
      ? "rgba(34, 197, 94, 0.9)"
      : "rgba(239, 68, 68, 0.9)"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    font-weight: 500;
    z-index: 1000;
    backdrop-filter: blur(10px);
    border: 1px solid ${type === "success"
      ? "rgba(34, 197, 94, 0.3)"
      : "rgba(239, 68, 68, 0.3)"};
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = ["home", "about", "projects", "contact"];
  const navLinks = document.querySelectorAll(".nav_bar a");

  let current = "";
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = section;
      }
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Form input animations
document
  .querySelectorAll(".form-group input, .form-group textarea")
  .forEach(input => {
    input.addEventListener("focus", function() {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function() {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });

// Utility function to add new project (for easy expansion)
function addProject(newProject) {
  projects.push({
    id: projects.length + 1,
    ...newProject
  });
  loadProjects();
}

// Utility function to remove project (for easy management)
function removeProject(projectId) {
  const index = projects.findIndex(p => p.id === projectId);
  if (index > -1) {
    projects.splice(index, 1);
    loadProjects();
  }
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Active navigation highlighting (existing code)
  const sections = ["home", "about", "projects", "contact"];
  const navLinks = document.querySelectorAll(".nav_bar a");

  let current = "";
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section;
      }
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});