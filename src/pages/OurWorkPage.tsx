import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle,
  Building,
  ShoppingCart,
  Heart,
  Factory
} from 'lucide-react';

const OurWorkPage: React.FC = () => {
  return (
    <div className="our-work-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Our Success Stories</h1>
            <p className="hero-subtitle">
              Discover how we've helped organizations across industries achieve 
              measurable transformation and sustainable growth through strategic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section stats-overview">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={32} />
              </div>
              <h3>200+</h3>
              <p>Successful Projects</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <h3>11+</h3>
              <p>Industries Served</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <h3>40%</h3>
              <p>Average Efficiency Gain</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <CheckCircle size={32} />
              </div>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Featured Case Studies</h2>
            <p>Real results from real clients across diverse industries</p>
          </div>
          
          <div className="case-studies">
            {/* Case Study 1 */}
            <div className="case-study">
              <div className="case-study-header">
                <div className="industry-icon">
                  <Building size={40} />
                </div>
                <div className="case-info">
                  <h3>Fortune 500 Financial Services</h3>
                  <p className="industry">Financial Services • Enterprise</p>
                </div>
              </div>
              
              <div className="case-content">
                <h4>Challenge</h4>
                <p>
                  A major financial institution struggled with fragmented data systems, 
                  manual reporting processes, and inconsistent performance metrics across 
                  multiple business units.
                </p>
                
                <h4>Solution</h4>
                <p>
                  Implemented comprehensive data strategy with unified analytics platform, 
                  automated reporting workflows, and real-time performance dashboards.
                </p>
                
                <div className="results">
                  <h4>Results</h4>
                  <div className="results-grid">
                    <div className="result-item">
                      <span className="result-number">65%</span>
                      <span className="result-label">Faster Reporting</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">$2.3M</span>
                      <span className="result-label">Annual Savings</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">40%</span>
                      <span className="result-label">Improved Accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="case-study">
              <div className="case-study-header">
                <div className="industry-icon">
                  <ShoppingCart size={40} />
                </div>
                <div className="case-info">
                  <h3>Global Retail Chain</h3>
                  <p className="industry">Retail & E-commerce • Multi-location</p>
                </div>
              </div>
              
              <div className="case-content">
                <h4>Challenge</h4>
                <p>
                  International retail chain faced inventory management inefficiencies, 
                  disconnected supply chain processes, and poor demand forecasting accuracy.
                </p>
                
                <h4>Solution</h4>
                <p>
                  Deployed AI-powered inventory optimization system with integrated supply 
                  chain automation and predictive analytics for demand planning.
                </p>
                
                <div className="results">
                  <h4>Results</h4>
                  <div className="results-grid">
                    <div className="result-item">
                      <span className="result-number">30%</span>
                      <span className="result-label">Inventory Reduction</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">85%</span>
                      <span className="result-label">Forecast Accuracy</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">$1.8M</span>
                      <span className="result-label">Cost Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="case-study">
              <div className="case-study-header">
                <div className="industry-icon">
                  <Heart size={40} />
                </div>
                <div className="case-info">
                  <h3>Regional Healthcare Network</h3>
                  <p className="industry">Healthcare • Multi-facility</p>
                </div>
              </div>
              
              <div className="case-content">
                <h4>Challenge</h4>
                <p>
                  Healthcare network struggled with patient flow optimization, resource 
                  allocation inefficiencies, and fragmented patient data across facilities.
                </p>
                
                <h4>Solution</h4>
                <p>
                  Implemented integrated patient management system with predictive analytics 
                  for resource planning and unified electronic health records platform.
                </p>
                
                <div className="results">
                  <h4>Results</h4>
                  <div className="results-grid">
                    <div className="result-item">
                      <span className="result-number">25%</span>
                      <span className="result-label">Reduced Wait Times</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">95%</span>
                      <span className="result-label">Patient Satisfaction</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">20%</span>
                      <span className="result-label">Cost Reduction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="case-study">
              <div className="case-study-header">
                <div className="industry-icon">
                  <Factory size={40} />
                </div>
                <div className="case-info">
                  <h3>Manufacturing Corporation</h3>
                  <p className="industry">Manufacturing • Industrial</p>
                </div>
              </div>
              
              <div className="case-content">
                <h4>Challenge</h4>
                <p>
                  Manufacturing company faced production bottlenecks, quality control issues, 
                  and lack of real-time visibility into operational performance.
                </p>
                
                <h4>Solution</h4>
                <p>
                  Deployed IoT-enabled production monitoring system with automated quality 
                  control processes and real-time operational dashboards.
                </p>
                
                <div className="results">
                  <h4>Results</h4>
                  <div className="results-grid">
                    <div className="result-item">
                      <span className="result-number">45%</span>
                      <span className="result-label">Production Increase</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">60%</span>
                      <span className="result-label">Defect Reduction</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">$3.2M</span>
                      <span className="result-label">Annual Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Clients Say</h2>
            <p>Testimonials from satisfied clients across industries</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "2N2 Solutions transformed our data infrastructure completely. The results 
                  exceeded our expectations with 65% faster reporting and significant cost savings."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Mitchell</h4>
                  <p>CTO, Fortune 500 Financial Services</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The inventory optimization system has revolutionized our supply chain. 
                  We've reduced inventory costs by 30% while improving customer satisfaction."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Operations Director, Global Retail Chain</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Their healthcare solutions improved our patient flow dramatically. 
                  Wait times decreased by 25% and patient satisfaction reached 95%."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Dr. Emily Rodriguez</h4>
                  <p>Chief Medical Officer, Regional Healthcare Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Join Our Success Stories?</h2>
            <p>
              Let's discuss how we can help your organization achieve similar results 
              through strategic transformation and operational excellence.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Success Story
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .our-work-page {
          padding-top: 80px;
        }

        .hero {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--secondary-color);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-light);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .stats-overview {
          padding: 2rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .stat-icon svg {
          color: var(--primary-color);
        }

        .stat-card h3 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-card p {
          color: var(--text-light);
          font-weight: 500;
          margin: 0;
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

        .case-studies {
          display: grid;
          gap: 3rem;
        }

        .case-study {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .case-study-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .industry-icon {
          width: 80px;
          height: 80px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .industry-icon svg {
          color: var(--primary-color);
        }

        .case-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .case-info .industry {
          color: var(--text-light);
          font-size: 0.9rem;
          margin: 0;
        }

        .case-content h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          margin-top: 2rem;
        }

        .case-content h4:first-child {
          margin-top: 0;
        }

        .case-content p {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .results {
          background: var(--background-light);
          border-radius: 12px;
          padding: 2rem;
          margin-top: 2rem;
        }

        .results h4 {
          margin-top: 0;
          margin-bottom: 1.5rem;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .result-item {
          text-align: center;
        }

        .result-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .result-label {
          color: var(--text-light);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .testimonial-content p {
          font-style: italic;
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-info h4 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: var(--secondary-color);
        }

        .author-info p {
          color: var(--text-light);
          font-size: 0.9rem;
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
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .case-study-header {
            flex-direction: column;
            text-align: center;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default OurWorkPage;