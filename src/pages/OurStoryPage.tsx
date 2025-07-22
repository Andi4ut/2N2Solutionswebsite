import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const OurStoryPage: React.FC = () => {
  return (
    <div className="our-story-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Our Story</h1>
            <p className="hero-subtitle">
              Founded on the belief that every business has untapped potential, 2N2 Solutions 
              transforms organizations through strategic excellence and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <Target size={48} />
              <h3>Our Mission</h3>
              <p>
                To empower businesses with strategic insights and operational excellence, 
                transforming challenges into competitive advantages through innovative solutions 
                and data-driven decision making.
              </p>
            </div>
            <div className="vision-card">
              <TrendingUp size={48} />
              <h3>Our Vision</h3>
              <p>
                To be the leading strategic partner for businesses seeking sustainable growth, 
                recognized for our ability to unlock potential and drive measurable transformation 
                across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h4>Excellence</h4>
              <p>We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h4>Collaboration</h4>
              <p>We believe in the power of partnership, working closely with clients to achieve shared success.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <Target size={32} />
              </div>
              <h4>Innovation</h4>
              <p>We embrace cutting-edge technologies and methodologies to solve complex business challenges.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <TrendingUp size={32} />
              </div>
              <h4>Impact</h4>
              <p>We measure our success by the tangible improvements we create for our clients' businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth and evolution</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>Foundation</h4>
                <p>2N2 Solutions was founded with a vision to bridge the gap between business strategy and operational execution.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h4>First Major Success</h4>
                <p>Delivered our first enterprise-level transformation project, achieving 35% efficiency improvement for a Fortune 500 client.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Industry Recognition</h4>
                <p>Recognized as a leading consultancy in business process optimization, expanding our services across multiple industries.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>Global Expansion</h4>
                <p>Reached 200+ successful projects milestone and expanded our expertise to serve clients across 11+ industries.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>Innovation Leadership</h4>
                <p>Leading the industry in AI-powered business transformation and strategic data analytics solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Leadership Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/team-background.jpg" alt="Team Member" />
              </div>
              <h4>Sarah Johnson</h4>
              <p className="role">Chief Executive Officer</p>
              <p>15+ years of experience in strategic consulting and business transformation across Fortune 500 companies.</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <img src="/team-background.jpg" alt="Team Member" />
              </div>
              <h4>Michael Chen</h4>
              <p className="role">Chief Technology Officer</p>
              <p>Expert in data analytics and process automation with a track record of delivering innovative solutions.</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <img src="/team-background.jpg" alt="Team Member" />
              </div>
              <h4>Emily Rodriguez</h4>
              <p className="role">Head of Operations</p>
              <p>Specializes in operational excellence and change management with proven results in complex transformations.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .our-story-page {
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

        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }

        .mission-card,
        .vision-card {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          border: 1px solid var(--border-color);
        }

        .mission-card svg,
        .vision-card svg {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .mission-card h3,
        .vision-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .mission-card p,
        .vision-card p {
          color: var(--text-light);
          line-height: 1.7;
          font-size: 1.1rem;
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

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-item {
          text-align: center;
          padding: 2rem;
        }

        .value-icon {
          width: 80px;
          height: 80px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .value-icon svg {
          color: var(--primary-color);
        }

        .value-item h4 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .value-item p {
          color: var(--text-light);
          line-height: 1.6;
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-color);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-year {
          background: var(--primary-color);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          position: relative;
          z-index: 2;
        }

        .timeline-content {
          flex: 1;
          padding: 0 2rem;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          text-align: left;
        }

        .timeline-content h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .timeline-content p {
          color: var(--text-light);
          line-height: 1.6;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .team-member {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .member-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1.5rem;
          border: 4px solid var(--primary-color);
        }

        .member-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-member h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .team-member .role {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .team-member p:last-child {
          color: var(--text-light);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            flex-direction: row !important;
            padding-left: 60px;
          }

          .timeline-year {
            position: absolute;
            left: 0;
            transform: translateX(-50%);
          }

          .timeline-content {
            text-align: left !important;
            padding: 0 0 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OurStoryPage;