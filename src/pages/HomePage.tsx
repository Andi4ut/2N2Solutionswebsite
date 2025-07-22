import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, Award, CheckCircle, BarChart3 } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Transform Your Business with Strategic Excellence</h1>
              <p className="hero-subtitle">
                2N2 Solutions specializes in data strategy, process automation, and operational 
                optimization to drive measurable business transformation across 11+ industries.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Transformation
                  <ArrowRight size={20} />
                </Link>
                <Link to="/our-work" className="btn btn-secondary">
                  View Our Results
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <div className="metric">
                  <TrendingUp size={32} />
                  <div>
                    <h3>40%</h3>
                    <p>Average Efficiency Gain</p>
                  </div>
                </div>
                <div className="metric">
                  <Users size={32} />
                  <div>
                    <h3>200+</h3>
                    <p>Successful Projects</p>
                  </div>
                </div>
                <div className="metric">
                  <Target size={32} />
                  <div>
                    <h3>11+</h3>
                    <p>Industries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Solutions</h2>
            <p>Comprehensive business transformation services designed to optimize your operations</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card">
              <div className="service-icon">
                <BarChart3 size={40} />
              </div>
              <h3>Data Strategy & Analytics</h3>
              <p>Transform raw data into actionable insights with advanced analytics and strategic data governance.</p>
              <ul>
                <li><CheckCircle size={16} /> Business Intelligence Implementation</li>
                <li><CheckCircle size={16} /> Data Warehouse Design</li>
                <li><CheckCircle size={16} /> Predictive Analytics</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Target size={40} />
              </div>
              <h3>Process Automation</h3>
              <p>Streamline operations and eliminate inefficiencies through intelligent process automation.</p>
              <ul>
                <li><CheckCircle size={16} /> Workflow Optimization</li>
                <li><CheckCircle size={16} /> RPA Implementation</li>
                <li><CheckCircle size={16} /> System Integration</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Award size={40} />
              </div>
              <h3>Operational Excellence</h3>
              <p>Achieve sustainable growth through strategic operational improvements and change management.</p>
              <ul>
                <li><CheckCircle size={16} /> Performance Optimization</li>
                <li><CheckCircle size={16} /> Change Management</li>
                <li><CheckCircle size={16} /> Strategic Planning</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/solutions" className="btn btn-primary">
              Explore All Solutions
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-light stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Successful Projects</p>
            </div>
            <div className="stat-item">
              <h3>40%</h3>
              <p>Average Efficiency Improvement</p>
            </div>
            <div className="stat-item">
              <h3>11+</h3>
              <p>Industries Served</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join 200+ companies that have achieved measurable results with our strategic consultancy. 
              Let's discuss how we can optimize your operations and drive growth.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Your Free Assessment
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .homepage {
          padding-top: 80px;
        }

        .hero {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--secondary-color);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-buttons .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric svg {
          color: var(--primary-color);
        }

        .metric h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          color: var(--secondary-color);
        }

        .metric p {
          margin: 0;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-icon svg {
          color: var(--primary-color);
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .service-card p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .service-card ul {
          list-style: none;
          padding: 0;
        }

        .service-card ul li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .service-card ul li svg {
          color: var(--primary-color);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          text-align: center;
        }

        .stat-item h3 {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--text-light);
          font-weight: 500;
          margin: 0;
        }

        .cta-section {
          background: var(--secondary-color);
          color: white;
        }

        .cta-content h2 {
          color: white;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.1rem;
          color: #ccc;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .cta-content .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;