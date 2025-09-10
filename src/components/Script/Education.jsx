import React from "react";
import "../Style/Education.css";
import { FaGraduationCap } from "react-icons/fa";
import { User, Heart, Code, Coffee, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Tulsiramji Gailwad Patil College of Engineering and Technology Nagpur",
    year: "2022 - 2026",
    description:
      "Specialized in Computer Science with a focus on Web Development, Data Mining, and Cloud Computing. ",
    image: "/images/Tgpcet.jpeg",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Jeevan Vikas Mahavidhyalaya Devgram (Thugao Dev)",
    year: "2020 - 2022",
    description:
      "Completed higher secondary education with specialization in Science (PCM) with distinction.",
    image: "/images/jeevan.jpeg"
  },
  {
    degree: "Secondary School (10th)",
    institution: "Madhyamik Vidhyalaya Chandani Bardi (Mahendri)",
    year: "2019 - 2020",
    description:
      "Excelled in academics and actively participated in extracurricular activities.",
    image: "/images/Madhyamik.avif"
  }
];

const Education = () => {
  return (
    <section className="education">
      <BookOpen className="section-icon" />
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="image-wrapper">
              <img src={edu.image} alt={edu.institution} className="edu-image" />
              <div className="overlay">
                <FaGraduationCap className="overlay-icon" />
              </div>
            </div>
            <h3 className="degree">{edu.degree}</h3>
            <h4 className="institution">{edu.institution}</h4>
            <p className="year">{edu.year}</p>
            <p className="description" style={{color:"black"}}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
