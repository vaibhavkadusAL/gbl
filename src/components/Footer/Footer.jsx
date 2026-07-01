import "./Footer.css";
import logo from "../../assets/images/icon image.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-col company-info">
          <img src={logo} alt="GreenBlocks Logo" className="footer-logo" />

          <p>
            Empowering organizations with ESG technology that drives
            sustainability, compliance, and measurable environmental impact.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Solutions</a></li>
            <li><a href="/">Case Studies</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Solutions */}

        <div className="footer-col">
          <h3>Solutions</h3>

          <ul>
            <li><a href="/">ESG Data Platform</a></li>
            <li><a href="/">Carbon Management</a></li>
            <li><a href="/">Sustainability Reporting</a></li>
            <li><a href="/">Supply Chain ESG</a></li>
            <li><a href="/">Stakeholder Engagement</a></li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-col">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 70300 83005</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@greenblockslab.com</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 GreenBlocks. All Rights Reserved. | Designed with ❤️ for a
          Sustainable Future.
        </p>
      </div>
    </footer>
  );
}