import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import './Style/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/pranaydhore', name: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/pranaydhore', name: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/pranaydhore', name: 'Twitter' },
    { icon: Mail, url: 'mailto:pranaydhore03@gmail.com', name: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Pranay Dhore</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <p>pranaydhore03@gmail.com</p>
              <p>+91 7498678112</p>
              <p>Khaparkheda, Nagpur, Maharashtra, India</p>
              <p>441102</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Latest Project</h4>
            <div className="latest-project">
              <h5>E-Commerce Platform</h5>
              <p>A full-stack e-commerce solution built with React and Node.js</p>
              <a 
                href="https://github.com/pranaydhore" 
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Pranay Dhore. Made with <Heart size={16} className="heart-icon" /> 
              and lots of coffee ☕
            </p>
            
            <button 
              onClick={scrollToTop} 
              className="scroll-top-btn"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;