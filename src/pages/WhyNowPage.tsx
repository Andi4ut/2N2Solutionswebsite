import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Target, 
  Zap,
  BarChart3,
  Users,
  Shield,
  Globe,
  Brain
} from 'lucide-react';

const WhyNowPage: React.FC = () => {
  return (
    <div className="why-now-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Why Now is the Perfect Time for Business Transformation</h1>
            <p className="hero-subtitle">
              The convergence of technology, market dynamics, and competitive pressures 
              creates an unprecedented opportunity for strategic business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Current Market Dynamics</h2>
            <p>Key trends shaping the business landscape today</p>
          </div>
          
          <div className="trends-grid">
            <div className="trend-card">
              <div className="trend-icon">
                <Brain size={40} />
              </div>
              <h3>AI & Automation Revolution</h3>
              <p>
                Artificial intelligence and automation technologies have reached maturity, 
                offering unprecedented opportunities for process optimization and cost reduction.
              </p>
              <div className="trend-stat">
                <span className="stat-number">40%</span>
                <span className="stat-label">Average efficiency gain with AI implementation</span>
              </div>
            </div>

            <div className="trend-card">
              <div className="trend-icon">
                <BarChart3 size={40} />
              </div>
              <h3>Data-Driven Decision Making</h3>
              <p>
                Organizations leveraging advanced analytics are outperforming competitors 
                by making faster, more informed strategic decisions.
              </p>
              <div className="trend-stat">
                <span className="stat-number">5x</span>
                <span className="stat-label">Faster decision-making with real-time analytics</span>
              </div>
            </div>

            <div className="trend-card">
              <div className="trend-icon">
                <Globe size={40} />
              </div>
              <h3>Digital-First Economy</h3>
              <p>
                The shift to digital-first operations has accelerated, creating new 
                opportunities for businesses that embrace transformation.
              </p>
              <div className="trend-stat">
                <span className="stat-number">70%</span>
                <span className="stat-label">Of business interactions now digital</span>
              </div>
            </div>

            <div className="trend-card">
              <div className="trend-icon">
                <Users size={40} />
              </div>
              <h3>Workforce Evolution</h3>
              <p>
                Remote and hybrid work models require new operational frameworks 
                and technology infrastructure for optimal performance.
              </p>
              <div className="trend-stat">
                <span className="stat-number">60%</span>
                <span className="stat-label">Of workforce now operates remotely</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Factors */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>The Urgency of Acting Now</h2>
            <p>Why delaying transformation puts your business at risk</p>
          </div>
          
          <div className="urgency-content">
            <div className="urgency-grid">
              <div className="urgency-item">
                <Clock size={32} />
                <h4>Competitive Advantage Window</h4>
                <p>
                  Early adopters of business transformation technologies gain significant 
                  competitive advantages that become harder to achieve as markets mature.
                </p>
              </div>

              <div className="urgency-item">
                <TrendingUp size={32} />
                <h4>Exponential Returns</h4>
                <p>
                  The ROI of transformation initiatives compounds over time. Starting now 
                  maximizes the long-term value and impact on your organization.
                </p>
              </div>

              <div className="urgency-item">
                <Shield size={32} />
                <h4>Risk Mitigation</h4>
                <p>
                  Businesses that fail to modernize face increasing operational risks, 
                  compliance challenges, and vulnerability to market disruptions.
                </p>
              </div>

              <div className="urgency-item">
                <Target size={32} />
                <h4>Market Positioning</h4>
                <p>
                  Strategic transformation enables better market positioning and 
                  customer value delivery in an increasingly competitive landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Organizations Already Benefiting</h2>
            <p>Real results from companies that acted decisively</p>
          </div>
          
          <div className="success-preview">
            <div className="success-stats">
              <div className="success-stat">
                <h3>200+</h3>
                <p>Companies Transformed</p>
              </div>
              <div className="success-stat">
                <h3>$50M+</h3>
                <p>Total Cost Savings Generated</p>
              </div>
              <div className="success-stat">
                <h3>40%</h3>
                <p>Average Efficiency Improvement</p>
              </div>
              <div className="success-stat">
                <h3>98%</h3>
                <p>Client Satisfaction Rate</p>
              </div>
            </div>
            
            <div className="success-quote">
              <blockquote>
                "The transformation initiative with 2N2 Solutions delivered results beyond 
                our expectations. We achieved 65% faster reporting and $2.3M in annual savings 
                within the first year."
              </blockquote>
              <cite>— Sarah Mitchell, CTO, Fortune 500 Financial Services</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section section-light">
        <div className="container">
          <div className="featured-article">
            <div className="article-content">
              <div className="article-tag">Featured Insight</div>
              <h2>Bridging the Data Divide: Why Most Companies Fail at Analytics</h2>
              <p>
                Discover the critical gap between data collection and actionable insights 
                that's preventing organizations from realizing their full potential. Learn 
                how to transform your data strategy for competitive advantage.
              </p>
              <Link to="/why-now/data-divide" className="btn btn-primary">
                Read Full Article
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="article-image">
              <div className="article-visual">
                <BarChart3 size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Your Next Steps</h2>
            <p>How to begin your transformation journey today</p>
          </div>
          
          <div className="action-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Assessment</h4>
                <p>Complete our comprehensive business assessment to identify optimization opportunities</p>
                <Link to="/contact" className="step-link">
                  Start Assessment <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Strategy Session</h4>
                <p>Schedule a free consultation to discuss your specific challenges and goals</p>
                <Link to="/contact" className="step-link">
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Implementation</h4>
                <p>Begin your transformation with a customized roadmap and expert guidance</p>
                <Link to="/solutions" className="step-link">
                  Explore Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Don't Wait for Tomorrow's Opportunities</h2>
            <p>
              The businesses that thrive in the next decade are making strategic 
              transformation decisions today. Join them.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Transformation Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .why-now-page {
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

        .trends-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .trend-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s ease;
        }

        .trend-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .trend-icon {
          width: 80px;
          height: 80px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .trend-icon svg {
          color: var(--primary-color);
        }

        .trend-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .trend-card p {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .trend-stat {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .urgency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .urgency-item {
          text-align: center;
          padding: 2rem;
        }

        .urgency-item svg {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .urgency-item h4 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .urgency-item p {
          color: var(--text-light);
          line-height: 1.6;
        }

        .success-preview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .success-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .success-stat {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .success-stat h3 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .success-stat p {
          color: var(--text-light);
          font-weight: 500;
          margin: 0;
        }

        .success-quote {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .success-quote blockquote {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-light);
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .success-quote cite {
          color: var(--secondary-color);
          font-weight: 600;
          font-style: normal;
        }

        .featured-article {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .article-tag {
          display: inline-block;
          background: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .article-content h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .article-content p {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .article-content .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .article-visual {
          width: 150px;
          height: 150px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .article-visual svg {
          color: var(--primary-color);
        }

        .action-steps {
          display: grid;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
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
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .step-content p {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .step-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        .step-link:hover {
          color: var(--primary-dark);
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

          .success-preview {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .success-stats {
            grid-template-columns: 1fr;
          }

          .featured-article {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .step-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyNowPage;