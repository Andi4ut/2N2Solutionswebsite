import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/2N2-logo.png" alt="2N2 Solutions" />
              <h3>2N2 Solutions</h3>
            </div>
            <p>
              Strategic business transformation and consultancy specializing in data strategy, 
              process automation, and operational optimization.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/solutions">Data Strategy</Link></li>
              <li><Link to="/solutions">Process Automation</Link></li>
              <li><Link to="/solutions">Operational Optimization</Link></li>
              <li><Link to="/solutions">Business Intelligence</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/why-now">Why Now</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@2n2solutions.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 2N2 Solutions. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--secondary-color);
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .footer-logo h3 {
          color: var(--primary-color);
          margin: 0;
        }

        .footer-section p {
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-section h4 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: var(--primary-color);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 50%;
          color: var(--primary-color);
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--primary-color);
          color: white;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ccc;
        }

        .contact-item svg {
          color: var(--primary-color);
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: #ccc;
          margin: 0;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary-color);
        }

        .footer-links span {
          color: #666;
        }

        @media (max-width: 768px) {
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;