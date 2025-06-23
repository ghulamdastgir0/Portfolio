const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    description:
      "A full-stack e-commerce solution built with React and Node.js featuring user authentication, payment integration, and admin dashboard.",
    briefDescription:
      "Complete e-commerce solution with modern UI/UX, secure payment processing, inventory management, and real-time order tracking. Features include user authentication, shopping cart, wishlist, product reviews, and comprehensive admin panel for managing products, orders, and customers.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"]
  },
  {
    id: 2,
    title: "Task Management App",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    briefDescription:
      "Collaborative productivity tool with drag-and-drop task boards, real-time updates, team chat, file sharing, deadline tracking, and progress analytics. Built for seamless team coordination and project management with role-based permissions and notification system.",
    tags: ["React", "Node.js", "MSSQL", "Express.js", "vite"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    briefDescription:
      "Comprehensive weather application with 7-day forecasts, interactive maps, weather alerts, historical data analysis, and location-based recommendations. Features beautiful data visualizations, multiple city tracking, and responsive design for all devices.",
    tags: [
      "JavaScript",
      "Chart.js",
      "OpenWeather API",
      "CSS3",
      "HTML5",
      "Geolocation"
    ]
  },
  {
    id: 4,
    title: "Social Media App",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    description:
      "A social media platform with user authentication, real-time chat, post sharing, and social networking features.",
    briefDescription:
      "Full-featured social networking platform with real-time messaging, photo/video sharing, story features, friend connections, news feed algorithm, and privacy controls. Built for scalable social interactions with advanced features like live streaming and group chats.",
    tags: [
      "React",
      "Firebase",
      "Socket.io",
      "Node.js",
      "Cloudinary",
      "JWT",
      "Redux"
    ]
  },
  {
    id: 5,
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    description:
      "A modern portfolio website showcasing development skills with responsive design and interactive animations.",
    briefDescription:
      "Personal portfolio showcasing projects, skills, and experience with modern design principles, smooth animations, contact forms, and optimized performance. Features dark/light themes, mobile-first approach, and SEO optimization for better visibility.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "EmailJS",
      "Responsive Design"
    ]
  },
  {
    id: 6,
    title: "Blog Platform",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=250&fit=crop",
    description:
      "A content management system for bloggers with rich text editing, SEO optimization, and comment management.",
    briefDescription:
      "Feature-rich blogging platform with WYSIWYG editor, SEO optimization, comment system, user roles, analytics dashboard, and content scheduling. Built for content creators and publishers with advanced features like multi-author support and social media integration.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Quill.js",
      "Express",
      "SEO",
      "Analytics"
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

// Create cards
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" />
    </div>
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

// Create project modal structure
function createProjectModal() {
  const modal = document.createElement("div");
  modal.id = "projectModal";
  modal.className = "project-modal";

  modal.innerHTML = `
    <div class="project-modal-content">
      <div class="project-modal-header">
        <h2 class="project-modal-title" id="modalTitle"></h2>
        <button class="project-modal-close" onclick="closeProjectModal()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="project-modal-body">
        <div class="project-modal-left">
          <div class="project-modal-description" id="modalDescription"></div>
          <div class="project-modal-features">
            <h4>Key Features</h4>
            <ul id="modalFeatures"></ul>
          </div>
        </div>
        <div class="project-modal-right">
          <div class="project-modal-image">
            <img id="modalImage" src="/placeholder.svg" alt="" />
          </div>
          <div class="project-modal-tags">
            <h4>Technologies Used</h4>
            <div class="project-tags-grid" id="modalTags"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  return modal;
}

// Populate modal with project data
function populateModal(project) {
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent =
    project.briefDescription;
  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalImage").alt = project.title;

  // Generate features list
  const features = generateProjectFeatures(project.id);
  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = "";
  features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
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
      "Secure user authentication and authorization system",
      "Real-time payment processing with Stripe integration",
      "Comprehensive admin dashboard for inventory management",
      "Advanced product search and filtering capabilities",
      "Shopping cart and wishlist functionality",
      "Order tracking and notification system"
    ],
    2: [
      "Drag-and-drop task board interface",
      "Real-time collaboration with Socket.io",
      "Team chat and file sharing capabilities",
      "Deadline tracking and progress analytics",
      "Role-based permissions and access control",
      "Email notifications and reminders"
    ],
    3: [
      "7-day weather forecasts with hourly updates",
      "Interactive maps with weather overlays",
      "Location-based weather alerts and notifications",
      "Historical weather data analysis and charts",
      "Multiple city tracking and comparison",
      "Responsive design for all devices"
    ],
    4: [
      "Real-time messaging and chat functionality",
      "Photo and video sharing with cloud storage",
      "Story features with automatic expiration",
      "Friend connections and social networking",
      "News feed algorithm and content curation",
      "Privacy controls and security features"
    ],
    5: [
      "Modern responsive design with smooth animations",
      "Contact form with email integration",
      "Project showcase with detailed descriptions",
      "SEO optimization for better visibility",
      "Dark/light theme toggle functionality",
      "Performance optimization and fast loading"
    ],
    6: [
      "WYSIWYG rich text editor for content creation",
      "SEO optimization tools and meta management",
      "Comment system with moderation features",
      "User roles and permission management",
      "Analytics dashboard with detailed insights",
      "Content scheduling and publication workflow"
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

// Contact Form Handler
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
Subject: ${data.subject}

Message:
${data.message}
    `);

    // Open default email client
    window.location.href = `mailto:ghulamdastgir12905@gmail.com?subject=${subject}&body=${body}`;

    // Show success message
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
  link.href = "/public/cv.pdf";
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
