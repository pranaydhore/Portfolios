import React from "react";
import "../Style/Internship.css";
import { FaLaptopCode } from "react-icons/fa";
import { Briefcase } from 'lucide-react';

const Internship = () => {
  const internshipsData = [
    {
      role: "Power BI Developer",
      company: "Cognifyz Technologies Nagpur",
      duration: "Oct 2024 - Nov 2024",
      description:
        "Worked on building responsive React components, improved UI performance, and collaborated with design team to enhance UX.",
      image: "/images/Congnifyz.jpeg",
    },
    {
      role: "Python and AI",
      company: "MSIT CMS Nagpur",
      duration: "Dec 2024 - Feb 2025",
      description:
        "Implemented data preprocessing pipelines, created predictive models, and visualized insights using Python & Tableau.",
      image: "/images/MSIT.jpeg",
    },
    {
      role: "Web Developerent",
      company: "Edunet",
      duration: "Mar 2025 - Apr 2025",
      description:
        "Built REST APIs using Node.js and Express, optimized queries with MongoDB, and deployed services on AWS.",
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <section className="internships" id="internships">
      <Briefcase className="section-icon" />
      <h2 className="internships-title">Internships</h2>
      <div className="internships-grid">
        {internshipsData.map((intern, index) => (
          <div className="internship-card" key={index}>
            <div className="image-wrapper">
              <img
                src={intern.image}
                alt={intern.company}
                className="internship-image"
              />
              <div className="overlay">
                <FaLaptopCode className="overlay-icon" />
              </div>
            </div>
            <h3 className="role">{intern.role}</h3>
            <h4 className="company">{intern.company}</h4>
            <p className="duration">{intern.duration}</p>
            <p className="description" style={{color:"black"}}>{intern.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
