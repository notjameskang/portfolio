import "./projects.css";
import React, { useState } from "react";

const projects = {
  1: {
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT Authentication"],
    features: [
      "User registration and authentication",
      "Product browsing and search",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order tracking and history",
      "Admin panel for inventory management",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  2: {
    title: "“Recipe Retriever” for Hackviolet at Virginia Tech",
    image: "project2.png?height=400&width=600",
    description:
      "Web Application that scrapes recipe data from internet articles and consolidates recipes into an organized format, avoiding the need to read through entire article.",
    technologies: ["React.js", "PostgreSQL", "HTML", "CSS"],
    features: ["Web Scraping of recipe data", "Team member assignment", "Gen AI text consolidation"],
    liveUrl: "https://youtu.be/4NXwzPrCFgs?si=OwcruTMzU8PUMY6d",
    githubUrl: "https://github.com/cxnnorng/recipe-retriever.git",
  },
  3: {
    title: "Online Shopping Application",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This project was a final project for Web-based DSS course from Virginia Tech. It is an E-Commerce management web application, managing inventory, product order, and order management.",
    technologies: ["Python", "Javascript", "HTML", "CSS", "Flask", "MySQL"],
    features: ["Inventory management", "Product order handling", "Order history tracking", "User-friendly UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  4: {
    title: "Social Media Dashboard",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A comprehensive analytics dashboard for managing multiple social media accounts. Provides insights, scheduling, and engagement tracking across platforms.",
    technologies: ["React", "D3.js", "Node.js", "Social Media APIs", "MongoDB"],
    features: [
      "Multi-platform integration",
      "Post scheduling and automation",
      "Engagement analytics",
      "Audience insights",
      "Content performance tracking",
      "Custom reporting",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  5: {
    title: "Recipe Finder",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A recipe discovery application with ingredient-based search capabilities. Includes meal planning, shopping lists, and nutritional information.",
    technologies: ["React Native", "Firebase", "Recipe API", "AsyncStorage"],
    features: [
      "Ingredient-based recipe search",
      "Meal planning calendar",
      "Shopping list generation",
      "Nutritional information",
      "Recipe favorites and collections",
      "Cooking timer and instructions",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    setSelectedProject(projects[projectId]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <main className="portfolio-container">
        <header className="portfolio-header">
          <h1>My Projects</h1>
          <p>A collection of my recent work and projects</p>
        </header>

        <section className="projects-grid">
          {Object.entries(projects).map(([id, project]) => (
            <article key={id} className="project-card" data-project={id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button
                  className="view-project-btn"
                  onClick={() => openModal(id)}
                >
                  View Project
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Modal */}
      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <div className="project-detail">
              <h2>{selectedProject.title}</h2>
              <div className="project-detail-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="project-info">
                <div className="project-description">
                  <h3>Description</h3>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="project-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a
                    href={selectedProject.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
