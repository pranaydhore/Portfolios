import React from 'react';
import { User, Heart, Code, Coffee, MapPin, Calendar } from 'lucide-react';
import '../Style/About.css';

const About = () => {
  const stats = [
    { label: 'Years Learing Experience', value: '1+', icon: Calendar },
    { label: 'Acadmic & Personal Projects', value: '7+', icon: Code },
    { label: 'Certifications & Workshops', value: '5+', icon: Heart },
    { label: 'Hours of Coding Practice', value: '100+', icon: Code }
  ];

  const interests = [
    'Web Development', 'Machine Learning', 'Photography', 
    'Travel', 'Music', 'Gaming', 'Reading', 'Cooking'
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <User className="section-icon" />
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>Hello there! 👋</h3>
              <p>
                I'm Pranay Dhore, a passionate Full Stack Developer based in New York. 
                I love creating digital experiences that are not only functional but 
                also beautiful and user-friendly.
              </p>
            </div>
            
            <div className="text-block">
              <h3>My Journey</h3>
              <p>
                My journey in web development started 3 years ago when I wrote my first 
                "Hello World" program. Since then, I've been fascinated by the power of 
                code to solve problems and create amazing user experiences.
              </p>
            </div>
            
            <div className="text-block">
              <h3>What I Do</h3>
              <p>
                I specialize in building modern web applications using React, Node.js, 
                and various other technologies. I'm always eager to learn new things and 
                take on exciting challenges.
              </p>
            </div>

            <div className="location">
              <MapPin size={16} />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <img 
                src="/profile image.jpg" 
                alt="About Profile"
                className="about-image"
              />
              <div className="card-overlay">
                <h4>Pranay Dhore</h4>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" />
              <h4 className="stat-value">{stat.value}</h4>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="interests-section">
          <h3>Interests & Hobbies</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <span key={index} className="interest-tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;