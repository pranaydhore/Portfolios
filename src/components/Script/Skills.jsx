// components/Skills.jsx
import React from "react";
import "../Style/Skills.css";
import { User, BookOpen, Briefcase, Mail, Code } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTensorflow,
  SiJavascript,
  SiCplusplus,
  SiKubernetes,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DBFB", level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", level: 85 },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7E018", level: 80 },
  { name: "Python", icon: <FaPython />, color: "#3776AB", level: 80 },
  { name: "Java", icon: <FaJava />, color: "#f89820", level: 80 },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", level: 85 },
  { name: "SQL / Database", icon: <FaDatabase />, color: "#f29111", level: 78 },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00", level: 45 },
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26", level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4", level: 90 },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#000000",
    level: 80,
  },
  { name: "Git", icon: <FaGitAlt />, color: "#f1502f", level: 77 },
  { name: "Docker", icon: <FaDocker />, color: "#2496ed", level: 70 },
  // { name: "Kubernetes", icon: <SiKubernetes />, color: "#326ce5", level: 65 },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", level: 40 },
  { name: "Power BI", color: "#f2c811", level: 80 },
  { name: "Tableau", color: "#e97627", level: 70 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Code className="section-icon" />
      <h2 className="skills-title text-center"> Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
