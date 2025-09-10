import React, { useState } from "react";
import {
  FolderOpen,
  Github,
  ExternalLink,
  Code,
  Users,
  Calendar,
  Star,
} from "lucide-react";
import "../Style/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "PD Velly Resort Booking System",
      description:
        "A full-stack PD velly resort booking built with React, Node.js, and MongoDB. Features include user authentication, Rating and comments.",
      image: "/images/Screenshot 2025-08-25 125857.png",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Boostrap",
      ],
      category: "fullstack",
      githubUrl: "https://github.com/pranaydhore/PDVelly.git",
      liveUrl: "https://pdvelly-1.onrender.com/listings",
      featured: false,
      collaborators: 1,
      stars: 18,
      date: "2025",
    },
    {
      id: 2,
      title: "Scope Spark Stock Trading Platform",
      description:
        "RESTful API server for a blogging platform with user authentication, CRUD operations, file uploads, and admin dashboard. Built with Express and MongoDB.",
      image: "/images/Screenshot 2025-08-25 125811.png",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Boostrap",
      ],
      category: "fullstack",
      githubUrl: "https://github.com/pranaydhore/SpaceSpark-Frontend.git",
      liveUrl: "https://space-spark-frontend.vercel.app/",
      featured: true,
      collaborators: 2,
      stars: 32,
      date: "2025",
    },
    {
      id: 3,
      title: "Potato Leaf Disease Detection",
      description:
        "Potato leaf disease detection uses image processing and machine learning to identify and classify diseases early, enabling farmers to prevent crop loss effectively.",
      image: "/images/images/Screenshot 2025-02-11 002917.jpg",
      technologies: [
        "OpenCV",
        "NumPy",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
        "LabelImg",
        "Streamlit",
      ],
      category: "machine learnig",
      githubUrl:
        "https://github.com/pranaydhore/Potato-Leafs-Disease-Prediction.git",
      liveUrl: "https://web1py-l6tnedf78mzswvmzsrbmx9.streamlit.app/",
      featured: false,
      collaborators: 1,
      stars: 15,
      date: "2024",
    },
    {
      id: 4,
      title: "Spotify Clone",
      description:
        "Spotify clone is a music streaming app mimicking Spotify, offering playlists, search, song playback, user accounts, and interactive interface features.",
      image: "/images/images/Screenshot 2025-02-01 015039.jpg",
      technologies: ["HTML", "CSS", "Javascript"],
      category: "frontend",
      githubUrl: "https://github.com/pranaydhore/Spotify-Clone.git",
      liveUrl: "https://relaxed-banoffee-c0168f.netlify.app/",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 5,
      title: "Healthcare Diagnosis System",
      description:
        "AI healthcare system is a technology-driven platform using artificial intelligence to assist in diagnosis, patient monitoring, treatment recommendations, and medical data analysis.",
      image: "/images/images/Screenshot 2025-03-01 101937.png",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Data cleaning",
        "Flask",
        "Matplotlib",
        "Seaborn",
        "Streamlit",
      ],
      category: "machine learnig",
      githubUrl: "https://github.com/pranaydhore/AI.git",
      liveUrl: "https://9egsxbzxy56rathhmg3cyb.streamlit.app/",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2024",
    },
    {
      id: 6,
      title: "Object Detection By Yolo",
      description:
        "Object Detection using YOLO involves Python, OpenCV, PyTorch, image preprocessing, data annotation, CNNs, deployment, and performance evaluation techniques.",
      image: "/images/images/Screenshot 2025-03-01 101858.png",
      technologies: [
        "Python",
        "OpenCV",
        "NumPy",
        "Pandas",
        "YOLOv5 or YOLOv8",
        "Streamlit",
      ],
      category: "machine learnig",
      githubUrl: "https://github.com/pranaydhore/Object-Detection-.git",
      liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 7,
      title: "Netflix Data Analysis",
      description:
        "Netflix data analysis using Power BI involves visualizing user behavior, streaming patterns, ratings, subscriptions, trends, dashboards, and interactive reporting for insights.",
      image: "/images/images/Screenshot 2025-01-26 190320.jpg",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 8,
      title: "Amazon Data Analysis",
      description:
        "Performed Amazon data analysis to uncover sales trends, customer behavior, and product performance using Python, Pandas, and visualization tools.",
      image: "/images/images/Screenshot 2025-01-25 171416.jpg",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 9,
      title: "Spotify Data Analysis",
      description:
        "Performed Spotify data analysis to identify trends in songs, artists, and listener behavior using Python and data visualization.",
      image: "/images/images/Screenshot 2025-02-01 104714.jpg",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 10,
      title: "Face Recognition Attendence System",
      description:
        "A Face Recognition Attendance System automatically marks attendance by recognizing faces of students/employees using a camera. It eliminates manual entry and improves accuracy.",
      image: "/images/images/Screenshot 2025-01-23 230053.jpg",
      technologies: [
        "Python",
        "OpenCV",
        "face_recognition",
        "dlib",
        "NumPy",
        "Pandas",
        "Webcam",
      ],
      category: "machine learnig",
      githubUrl: "https://github.com/pranaydhore/Face-Attendences-System.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 11,
      title: "Mega Store Data Analysis",
      description:
        "Performed data analysis for MegaStore sales, customers, and product trends using Power BI to generate interactive dashboards and insights.",
      image: "/images/images/Screenshot 2025-01-26 185528.jpg",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 12,
      title: "Blinkit Data Analysis",
      description:
        "Performed data analysis on Blinkit delivery and sales data to identify trends, customer behavior, and operational insights using Python and visualization tools.",
      image: "/images/images/Screenshot 2025-08-25 155535.png",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 15,
      title: "Hospital Data Analysis",
      description:
        "Analyzed hospital patient, treatment, and operational data to identify trends, optimize resources, and improve healthcare outcomes using Python and visualization tools.",
      image: "/images/images/Screenshot 2025-08-25 163157.png",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Hospital-Reviews-Analysis.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
     {
      id: 15,
      title: "Swiggy Data Analysis",
      description:
        "Analyzed Swiggy delivery, orders, and customer data to identify trends, optimize operations, and enhance service quality using Python and visualization tools.",
      image: "/images/images/Screenshot 2025-08-25 164339.png",
      technologies: ["Power BI"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 13,
      title: "Meta Stock Data Analysis",
      description:
        "Performed Meta stock data analysis to track trends, patterns, and predictions using Python, Pandas, and data visualization techniques.",
      image: "/images/images/Screenshot 2025-03-01 103531.png",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Scikit-learn",
        "Excel",
        "Power BI",
      ],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Meta-Stock-Data-Analysis-By-Open-AI.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
    {
      id: 14,
      title: "Retail Store Inventory Level Analysis",
      description:
        "Performed Amazon data analysis to uncover sales trends, customer behavior, and product performance using Python, Pandas, and visualization tools.",
      image: "/images/images/Screenshot 2025-08-25 154922.png",
      technologies: ["Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly"],
      category: "data analysis",
      githubUrl:
        "https://github.com/pranaydhore/Retail-Store-Inventory-Level-Analysis.git",
      // liveUrl: "https://realtime-chat-app.netlify.app",
      featured: false,
      collaborators: 1,
      stars: 27,
      date: "2023",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "machine learnig", label: "Machine Learing" },
    { key: "data analysis", label: "Data Analysis / Power BI" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <FolderOpen className="section-icon" />
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Showcasing my latest work and creations
          </p>
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}

              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      className="project-link github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="project-link live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-stats">
                    <div className="stat-item">
                      <Users size={14} />
                      <span>{project.collaborators}</span>
                    </div>
                    <div className="stat-item">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="stat-item">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
