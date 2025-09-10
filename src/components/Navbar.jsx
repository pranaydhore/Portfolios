import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Code,
  GraduationCap,
  FolderOpen,
  Briefcase,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./Style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "about", label: "About", icon: User, path: "/about" },
    { id: "skills", label: "Skills", icon: Code, path: "/skills" },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      path: "/education",
    },
    { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
    {
      id: "internships",
      label: "Internships",
      icon: Briefcase,
      path: "/internship",
    },
    // {
    //   id: "certificates",
    //   label: "Certificates",
    //   icon: Award,
    //   path: "/certificates",
    // },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/" className="brand-text">
            <h1 className="gradient-text">Pranay Dhore</h1>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop-menu">
          {navItems.map(({ id, label, icon: Icon, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {navItems.map(({ id, label, icon: Icon, path }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              `mobile-nav-item ${isActive ? "active" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
