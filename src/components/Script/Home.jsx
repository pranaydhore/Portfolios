import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import '../Style/Home.css';



const Home = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Cursor blinking
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          {/* Profile Image */}
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img 
                src="/profile image.jpg" 
                alt="Profile" 
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-content">
            <h1 className="main-heading">
              Hi, I'm <span className="name-highlight">Pranay Dhore</span>
            </h1>

            <div className="typewriter-container">
              <h2 className="typewriter">
                {text}
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              </h2>
            </div>

            <p className="description">
              Passionate about creating beautiful and functional web applications 
              with modern technologies. I love turning ideas into reality through code.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">
                <Download size={18} />
                Download Resume
              </button>
              <button className="btn-secondary">
                <Mail size={18} />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/pranaydhore" className="social-link github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/pranaydhore" className="social-link linkedin">
                <Linkedin size={20} />
              </a>
              <a href="pranaydhore03@gmail.com" className="social-link email">
                <Mail size={20} />
              </a>
              <a href="https://x.com/PranayDhore3" className="social-link twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="social-link instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@PranayDhore" className="social-link youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
