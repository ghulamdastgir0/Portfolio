const projects = [
  {
    id: 1,
    title: "Space Invaders Game",
    description:
      "A classic arcade-style space shooter game built with C++ and Windows API, featuring alien waves, bullet mechanics, and a highscore system.",
    briefDescription:
      "Classic implementation of the Space Invaders game where you control a spaceship defending Earth from waves of alien invaders. Features wave-based alien movement, bullet collision detection, increasing difficulty, and a top 5 highscore leaderboard system. Built using C++ with Windows GDI functions for 2D graphics rendering.",
    tags: [
      "C++",
      "PF",
      "Game Development",
      "Graphics",
      "Console",
      "Windows API"
    ]
  },
  {
    id: 2,
    title: "Social Network App",
    description:
      "A console-based social networking application developed using C++ with OOP principles, featuring user interactions, posts, comments, and friend management.",
    briefDescription:
      "Console-based Social Network Application demonstrating real-world social media features using Object-Oriented Programming concepts. Includes user authentication, home feed with friends' posts, like and comment functionality, post sharing, personal pages, friend list management, and page viewing. Built with clean code architecture focusing on classes, inheritance, encapsulation, and polymorphism.",
    tags: [
      "C++",
      "OOP",
      "Console Application",
      "Social Media",
      "User Management"
    ]
  },
  {
    id: 3,
    title: "Maze Runner",
    description:
      "A retro-style maze-running game crafted in x86 Assembly Language with procedurally generated mazes, collectibles, enemies, and time-based scoring.",
    briefDescription:
      "Classic maze-running adventure game built in pure x86 Assembly Language featuring 5 unique procedurally generated mazes. Includes collectible items for bonus points, enemy avoidance mechanics, customizable countdown timer, real-time keyboard controls, and dynamic scoring system. Utilizes BIOS interrupts, custom interrupt handlers, and assembly optimization for smooth retro gameplay experience.",
    tags: [
      "Assembly Language",
      "x86",
      "Game Development",
      "BIOS Interrupts",
      "Real-time",
      "Retro Gaming"
    ]
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "A comprehensive database-driven task management system with admin controls, task assignment, status tracking, and team collaboration features.",
    briefDescription:
      "Database-driven task management system designed for team productivity and workflow management. Features secure admin authentication, task creation with deadlines and priorities, team member assignment via email, comprehensive status tracking (Pending, In Progress, Completed, Cancelled), advanced filtering and search capabilities, and priority-based task organization. Built with normalized database schema and clean UI for optimal user experience.",
    tags: [
      "React",
      "Node.js",
      "MSSQL",
      "Database Design",
      "Team Management",
      "Authentication"
    ]
  },
  {
    id: 5,
    title: "Simon Game",
    description:
      "A classic memory game built with HTML, CSS, jQuery, and JavaScript featuring interactive animations, sound effects, and progressive difficulty levels.",
    briefDescription:
      "Interactive implementation of the classic Simon electronic memory game with modern web technologies. Features animated button flashes with corresponding sound effects, progressive level difficulty, game over detection with restart functionality, responsive design for all devices, and clean user interface. Built using jQuery for smooth animations and JavaScript for game logic, providing an engaging memory challenge experience.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Game Development",
      "Interactive Design"
    ]
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing development skills with smooth animations, interactive elements, and optimized performance.",
    briefDescription:
      "Professional portfolio website built with modern web technologies and design principles. Features responsive design for all devices, smooth CSS animations and transitions, interactive project showcases with detailed modal views, contact form with email integration, SEO optimization for better visibility, fast loading performance, and clean maintainable code structure following best practices. Includes dynamic project loading, smooth scrolling navigation, and an elegant gradient-based design system.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"]
  },
  {
    id: 7,
    title: "Expense Manager App",
    description:
      "A full-stack personal finance app to track income, expenses, and budgets with real-time updates and intuitive UI.",
    briefDescription:
      "Comprehensive expense manager built with React, Node.js, Express, and PostgreSQL. Features include responsive design using CSS Grid and Flexbox, interactive dashboards with detailed charts and reports, smooth animations, secure user authentication, and optimized backend performance. Supports adding, editing, and deleting transactions with category-wise expense tracking, monthly comparisons, and notifications. Clean, maintainable codebase following modern best practices and cross-browser compatibility.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Responsive Design",
      "Finance Management"
    ]
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
      "Classic arcade-style gameplay with spaceship controls",
      "Wave-based alien movement with increasing difficulty",
      "Bullet collision detection system",
      "Real-time shooting mechanics for player and aliens",
      "Top 5 highscore leaderboard system",
      "2D graphics rendering using Windows GDI",
      "Keyboard controls (Arrow keys, Spacebar, Enter, Escape)",
      "Progressive speed increase as game advances"
    ],
    2: [
      "Secure user login and logout system",
      "Home page displaying friends' posts",
      "Like and unlike post functionality",
      "Comment system for user interactions",
      "Post sharing and memory sharing features",
      "Personal user pages and profiles",
      "Friend list management and viewing",
      "Object-oriented design with clean architecture"
    ],
    3: [
      "5 unique procedurally generated mazes",
      "Collectible items with point rewards",
      "Enemy avoidance mechanics",
      "Customizable countdown timer (1-9 minutes)",
      "Real-time keyboard input using BIOS interrupts",
      "Dynamic scoring system based on completion time",
      "Custom interrupt handlers for precision timing",
      "Assembly language optimization for smooth gameplay"
    ],
    4: [
      "Admin registration and authentication system",
      "Task creation with title, description, and deadlines",
      "Team member assignment via email",
      "Comprehensive status tracking system",
      "Task filtering by status, date, and assignee",
      "Priority-based task organization (High, Medium, Low)",
      "Normalized database schema design",
      "Clean and user-friendly interface"
    ],
    5: [
      "Interactive button animations with flash effects",
      "Sound effects for each colored button",
      "Progressive difficulty with increasing sequences",
      "Game over detection and restart functionality",
      "Responsive design for all screen sizes",
      "jQuery-powered smooth animations",
      "Memory challenge with visual and audio feedback",
      "Clean and intuitive user interface"
    ],
    6: [
      "Modern responsive design with CSS Grid and Flexbox",
      "Interactive project showcase with detailed modal views",
      "Smooth CSS animations and transitions",
      "Contact form with email integration",
      "Performance optimization and fast loading",
      "Cross-browser compatibility testing",
      "Clean and maintainable code structure"
    ],
    7: [
      "Full-stack expense tracker built with React (Vite), Tailwind CSS, Node.js, Express, and PostgreSQL",
      "Features user registration, transaction CRUD, budget tracking, and multi-currency support",
      "Secure JWT authentication with bcrypt password hashing",
      "Modular backend using stored procedures and constraints for data integrity",
      "Responsive UI with profile settings and optional receipt uploads",
      "Setup requires Node.js ≥16 and PostgreSQL ≥13 with easy install and run commands",
      "Clean project structure separating frontend and backend codebases for maintainability"
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
function downloadCV() {
  // Create a link element and trigger download
  const link = document.createElement("a");
  link.href = "/public/Ghulam_Dastgir_CV.pdf";
  link.download = "Ghulam_Dastgir_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show success notification
  showNotification("CV downloaded successfully!", "success");
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
