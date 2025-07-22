import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/why-now', label: 'Why Now' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src="/2N2-logo.png" alt="2N2 Solutions" />
            <span>2N2 Solutions</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navigation.scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--border-color);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--secondary-color);
          font-weight: 700;
          font-size: 1.25rem;
        }

        .logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--secondary-color);
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-color);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-color);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            padding: 0.5rem 0;
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;