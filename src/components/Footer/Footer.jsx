import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <Link to="/" className="footer-logo">
          Dribbble
        </Link>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <Link to="/for-designers">For designers</Link>
          <Link to="/hire-talent">Hire talent</Link>
          <Link to="/inspiration">Inspiration</Link>
          <Link to="/advertising">Advertising</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/support">Support</Link>
        </nav>

        {/* Social Icons */}
        <div className="footer-social">
          <Link to="#" aria-label="Twitter">
            <FaTwitter size={20} />
          </Link>
          <Link to="#" aria-label="Facebook">
            <FaFacebookF size={20} />
          </Link>
          <Link to="#" aria-label="Instagram">
            <FaInstagram size={20} />
          </Link>
          <Link to="#" aria-label="Pinterest">
            <FaPinterest size={20} />
          </Link>
        </div>
        {/* --------------------------------- */}

      </div>

      <div className="footer-bottom">
        {/* Copyright Information */}
        <div className="footer-bootom-first-link">
          <span>&copy; 2024 Dribbble</span>

          {/* Secondary Links */}

          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
        </div>

        {/* Additional Links */}
        <div className="footer-bootom-second-link">
          <Link to="/jobs">Jobs</Link>
          <Link to="/designers">Designers</Link>
          <Link to="/freelancers">Freelancers</Link>
          <Link to="/tags">Tags</Link>
          <Link to="/places">Places</Link>
          <Link to="/resources">Resources</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
