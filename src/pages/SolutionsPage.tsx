import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Database,
  Zap,
  TrendingUp,
  Users,
  Settings,
  Brain
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Strategic Solutions for Business Transformation</h1>
            <p className="hero-subtitle">
              Comprehensive consultancy services designed to optimize operations, 
              enhance performance, and drive sustainable growth across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="section">
        <div className="container">
          <div className="solutions-grid">
            {/* Data Strategy & Analytics */}
            <div className="solution-card featured">
              <div className="solution-header">
                <div className="solution-icon">
                  <BarChart3 size={48} />
                </div>
                <div>
                  <h3>Data Strategy & Analytics</h3>
                  <p>Transform raw data into strategic business intelligence</p>
                </div>
              </div>
              
              <div className="solution-content">
                <div className="features-grid">
                  <div className="feature">
                    <Database size={24} />
                    <div>
                      <h4>Data Warehouse Design</h4>
                      <p>Scalable data architecture for enterprise-level analytics</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <Brain size={24} />
                    <div>
                      <h4>Predictive Analytics</h4>
                      <p>AI-powered insights for strategic decision making</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <TrendingUp size={24} />
                    <div>
                      <h4>Business Intelligence</h4>
                      <p>Real-time dashboards and performance monitoring</p>
                    </div>
                  </div>
                </div>
                
                <div className="benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    <li><CheckCircle size={16} /> 40% improvement in decision-making speed</li>
                    <li><CheckCircle size={16} /> 60% reduction in data processing time</li>
                    <li><CheckCircle size={16} /> Enhanced forecasting accuracy</li>
                    <li><CheckCircle size={16} /> Unified data governance framework</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Automation */}
            <div className="solution-card featured">
              <div className="solution-header">
                <div className="solution-icon">
                  <Target size={48} />
                </div>
                <div>
                  <h3>Process Automation</h3>
                  <p>Streamline operations through intelligent automation</p>
                </div>
              </div>
              
              <div className="solution-content">
                <div className="features-grid">
                  <div className="feature">
                    <Zap size={24} />
                    <div>
                      <h4>Workflow Optimization</h4>
                      <p>Eliminate bottlenecks and improve process efficiency</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <Settings size={24} />
                    <div>
                      <h4>RPA Implementation</h4>
                      <p>Robotic process automation for repetitive tasks</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <Users size={24} />
                    <div>
                      <h4>System Integration</h4>
                      <p>Seamless connectivity across business systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    <li><CheckCircle size={16} /> 50% reduction in manual processing</li>
                    <li><CheckCircle size={16} /> 35% improvement in operational efficiency</li>
                    <li><CheckCircle size={16} /> Reduced human error rates</li>
                    <li><CheckCircle size={16} /> Enhanced compliance and audit trails</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Excellence */}
            <div className="solution-card featured">
              <div className="solution-header">
                <div className="solution-icon">
                  <Award size={48} />
                </div>
                <div>
                  <h3>Operational Excellence</h3>
                  <p>Achieve sustainable growth through strategic optimization</p>
                </div>
              </div>
              
              <div className="solution-content">
                <div className="features-grid">
                  <div className="feature">
                    <TrendingUp size={24} />
                    <div>
                      <h4>Performance Optimization</h4>
                      <p>Continuous improvement methodologies and KPI tracking</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <Users size={24} />
                    <div>
                      <h4>Change Management</h4>
                      <p>Strategic organizational transformation support</p>
                    </div>
                  </div>
                  
                  <div className="feature">
                    <Target size={24} />
                    <div>
                      <h4>Strategic Planning</h4>
                      <p>Long-term roadmaps for sustainable growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    <li><CheckCircle size={16} /> 30% increase in overall productivity</li>
                    <li><CheckCircle size={16} /> Improved employee engagement</li>
                    <li><CheckCircle size={16} /> Enhanced customer satisfaction</li>
                    <li><CheckCircle size={16} /> Sustainable competitive advantage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Industries We Serve</h2>
            <p>Specialized expertise across diverse sectors</p>
          </div>
          
          <div className="industries-grid">
            <div className="industry-item">Financial Services</div>
            <div className="industry-item">Healthcare</div>
            <div className="industry-item">Manufacturing</div>
            <div className="industry-item">Retail & E-commerce</div>
            <div className="industry-item">Technology</div>
            <div className="industry-item">Energy & Utilities</div>
            <div className="industry-item">Transportation</div>
            <div className="industry-item">Real Estate</div>
            <div className="industry-item">Education</div>
            <div className="industry-item">Government</div>
            <div className="industry-item">Non-Profit</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Proven Process</h2>
            <p>A systematic approach to delivering measurable results</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Assessment</h4>
              <p>Comprehensive analysis of current operations and identification of optimization opportunities</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Strategy</h4>
              <p>Development of customized solutions aligned with your business objectives and constraints</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Implementation</h4>
              <p>Phased execution with continuous monitoring and adjustment to ensure optimal results</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Optimization</h4>
              <p>Ongoing refinement and support to maximize long-term value and sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Transform Your Operations?</h2>
            <p>
              Let's discuss how our strategic solutions can optimize your business processes 
              and drive measurable improvements across your organization.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Your Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .solutions-page {
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

        .solutions-grid {
          display: grid;
          gap: 3rem;
        }

        .solution-card {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .solution-header {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .solution-icon {
          width: 80px;
          height: 80px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .solution-icon svg {
          color: var(--primary-color);
        }

        .solution-header h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .solution-header p {
          color: var(--text-light);
          font-size: 1.1rem;
          margin: 0;
        }

        .solution-content {
          display: grid;
          gap: 2rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: var(--background-light);
          border-radius: 8px;
        }

        .feature svg {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .feature h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .feature p {
          color: var(--text-light);
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.5;
        }

        .benefits h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .benefits ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.5rem;
        }

        .benefits ul li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .benefits ul li svg {
          color: var(--primary-color);
          flex-shrink: 0;
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

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .industry-item {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          color: var(--secondary-color);
          border: 2px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .industry-item:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .process-step {
          text-align: center;
          padding: 2rem;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .process-step h4 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .process-step p {
          color: var(--text-light);
          line-height: 1.6;
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

          .solution-header {
            flex-direction: column;
            text-align: center;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .benefits ul {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;