import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-policy-page">
      {/* Header */}
      <section className="policy-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          
          <div className="header-content">
            <div className="header-icon">
              <Shield size={48} />
            </div>
            <div>
              <h1>Privacy Policy</h1>
              <p className="last-updated">Last updated: January 22, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="content-layout">
            <div className="main-content">
              <div className="policy-section">
                <h2>Introduction</h2>
                <p>
                  At 2N2 Solutions ("we," "our," or "us"), we are committed to protecting your privacy 
                  and ensuring the security of your personal information. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our services.
                </p>
                <p>
                  By accessing or using our services, you agree to the collection and use of information 
                  in accordance with this policy. If you do not agree with our policies and practices, 
                  do not use our services.
                </p>
              </div>

              <div className="policy-section">
                <h2>Information We Collect</h2>
                
                <h3>Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
                  <li><strong>Business Information:</strong> Industry, company size, business challenges, project requirements</li>
                  <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence with our team</li>
                  <li><strong>Professional Information:</strong> Work history, expertise areas, professional interests</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul>
                  <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, referral sources</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Cookies and Tracking:</strong> Session data, preferences, analytics information</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                
                <div className="usage-grid">
                  <div className="usage-item">
                    <div className="usage-icon">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4>Service Delivery</h4>
                      <p>Providing consultancy services, business assessments, and strategic recommendations</p>
                    </div>
                  </div>
                  
                  <div className="usage-item">
                    <div className="usage-icon">
                      <Eye size={24} />
                    </div>
                    <div>
                      <h4>Communication</h4>
                      <p>Responding to inquiries, providing updates, and maintaining client relationships</p>
                    </div>
                  </div>
                  
                  <div className="usage-item">
                    <div className="usage-icon">
                      <Lock size={24} />
                    </div>
                    <div>
                      <h4>Improvement</h4>
                      <p>Analyzing usage patterns to improve our services and website functionality</p>
                    </div>
                  </div>
                </div>

                <h3>Legal Basis for Processing</h3>
                <p>We process your personal information based on:</p>
                <ul>
                  <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
                  <li><strong>Contract:</strong> When processing is necessary for service delivery</li>
                  <li><strong>Legitimate Interest:</strong> For business operations, security, and service improvement</li>
                  <li><strong>Legal Obligation:</strong> When required by applicable laws and regulations</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                
                <h3>Service Providers</h3>
                <p>
                  We may share information with trusted third-party service providers who assist us in 
                  operating our business, such as:
                </p>
                <ul>
                  <li>Cloud hosting and data storage providers</li>
                  <li>Email marketing and communication platforms</li>
                  <li>Analytics and website optimization services</li>
                  <li>Professional services (legal, accounting, consulting)</li>
                </ul>

                <h3>Legal Requirements</h3>
                <p>We may disclose your information when required by law or to:</p>
                <ul>
                  <li>Comply with legal processes, court orders, or government requests</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Investigate potential violations of our terms of service</li>
                  <li>Prevent fraud or other illegal activities</li>
                </ul>

                <h3>Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be 
                  transferred as part of the business transaction, subject to confidentiality agreements.
                </p>
              </div>

              <div className="policy-section">
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                
                <div className="security-measures">
                  <div className="security-item">
                    <h4>Encryption</h4>
                    <p>Data transmission and storage using industry-standard encryption protocols</p>
                  </div>
                  <div className="security-item">
                    <h4>Access Controls</h4>
                    <p>Restricted access to personal information on a need-to-know basis</p>
                  </div>
                  <div className="security-item">
                    <h4>Regular Audits</h4>
                    <p>Periodic security assessments and vulnerability testing</p>
                  </div>
                  <div className="security-item">
                    <h4>Employee Training</h4>
                    <p>Regular privacy and security training for all team members</p>
                  </div>
                </div>
              </div>

              <div className="policy-section">
                <h2>Your Rights and Choices</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <div className="rights-list">
                  <div className="right-item">
                    <h4>Access</h4>
                    <p>Request a copy of the personal information we hold about you</p>
                  </div>
                  <div className="right-item">
                    <h4>Correction</h4>
                    <p>Request correction of inaccurate or incomplete information</p>
                  </div>
                  <div className="right-item">
                    <h4>Deletion</h4>
                    <p>Request deletion of your personal information under certain circumstances</p>
                  </div>
                  <div className="right-item">
                    <h4>Portability</h4>
                    <p>Request transfer of your data to another service provider</p>
                  </div>
                  <div className="right-item">
                    <h4>Objection</h4>
                    <p>Object to certain types of processing of your personal information</p>
                  </div>
                  <div className="right-item">
                    <h4>Restriction</h4>
                    <p>Request restriction of processing under specific circumstances</p>
                  </div>
                </div>

                <p>
                  To exercise these rights, please contact us using the information provided in the 
                  "Contact Us" section below. We will respond to your request within the timeframe 
                  required by applicable law.
                </p>
              </div>

              <div className="policy-section">
                <h2>Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience 
                  and analyze website usage:
                </p>
                
                <h3>Types of Cookies</h3>
                <ul>
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>

                <p>
                  You can control cookie settings through your browser preferences. However, disabling 
                  certain cookies may affect website functionality.
                </p>
              </div>

              <div className="policy-section">
                <h2>Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the 
                  purposes outlined in this policy, unless a longer retention period is required by law:
                </p>
                <ul>
                  <li><strong>Client Data:</strong> Retained for the duration of our business relationship plus 7 years</li>
                  <li><strong>Marketing Data:</strong> Retained until you opt out or request deletion</li>
                  <li><strong>Website Analytics:</strong> Typically retained for 26 months</li>
                  <li><strong>Legal Records:</strong> Retained as required by applicable laws</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your 
                  country of residence. We ensure appropriate safeguards are in place for international 
                  transfers, including:
                </p>
                <ul>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children. If we become aware that we have collected 
                  personal information from a child, we will take steps to delete such information promptly.
                </p>
              </div>

              <div className="policy-section">
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by:
                </p>
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Providing notice through our services</li>
                </ul>
                <p>
                  Your continued use of our services after any changes indicates your acceptance of the 
                  updated policy.
                </p>
              </div>

              <div className="policy-section">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or 
                  our data practices, please contact us:
                </p>
                
                <div className="contact-info">
                  <div className="contact-method">
                    <h4>Email</h4>
                    <p>privacy@2n2solutions.com</p>
                  </div>
                  <div className="contact-method">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="contact-method">
                    <h4>Address</h4>
                    <p>
                      2N2 Solutions<br />
                      Privacy Officer<br />
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card">
                <h4>Quick Navigation</h4>
                <ul className="nav-links">
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#information-collection">Information We Collect</a></li>
                  <li><a href="#information-use">How We Use Information</a></li>
                  <li><a href="#information-sharing">Information Sharing</a></li>
                  <li><a href="#data-security">Data Security</a></li>
                  <li><a href="#your-rights">Your Rights</a></li>
                  <li><a href="#cookies">Cookies</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Need Help?</h4>
                <p>
                  Have questions about our privacy practices? Our team is here to help.
                </p>
                <Link to="/contact" className="btn btn-secondary btn-small">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .privacy-policy-page {
          padding-top: 80px;
        }

        .policy-header {
          padding: 2rem 0;
          background: var(--background-light);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
        }

        .breadcrumb span {
          color: var(--text-light);
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .header-icon {
          width: 80px;
          height: 80px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-icon svg {
          color: var(--primary-color);
        }

        .header-content h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--secondary-color);
        }

        .last-updated {
          color: var(--text-light);
          font-size: 0.9rem;
          margin: 0;
        }

        .policy-content {
          padding: 4rem 0;
        }

        .content-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }

        .main-content {
          max-width: none;
        }

        .policy-section {
          margin-bottom: 3rem;
        }

        .policy-section h2 {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          color: var(--secondary-color);
          border-bottom: 2px solid var(--primary-color);
          padding-bottom: 0.5rem;
        }

        .policy-section h3 {
          font-size: 1.25rem;
          margin: 2rem 0 1rem;
          color: var(--secondary-color);
        }

        .policy-section h4 {
          font-size: 1.1rem;
          margin: 1.5rem 0 0.5rem;
          color: var(--secondary-color);
        }

        .policy-section p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .policy-section ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .policy-section ul li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          color: var(--text-light);
        }

        .usage-grid {
          display: grid;
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .usage-item {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .usage-icon {
          width: 50px;
          height: 50px;
          background: rgba(66, 217, 200, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .usage-icon svg {
          color: var(--primary-color);
        }

        .usage-item h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }

        .usage-item p {
          margin: 0;
          font-size: 0.9rem;
        }

        .security-measures {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .security-item {
          padding: 1.5rem;
          background: var(--background-light);
          border-radius: 8px;
          border-left: 4px solid var(--primary-color);
        }

        .security-item h4 {
          margin: 0 0 0.5rem;
          color: var(--secondary-color);
        }

        .security-item p {
          margin: 0;
          font-size: 0.9rem;
        }

        .rights-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }

        .right-item {
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .right-item h4 {
          margin: 0 0 0.5rem;
          color: var(--primary-color);
          font-size: 1rem;
        }

        .right-item p {
          margin: 0;
          font-size: 0.9rem;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .contact-method h4 {
          margin: 0 0 0.5rem;
          color: var(--secondary-color);
        }

        .contact-method p {
          margin: 0;
          color: var(--text-light);
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .sidebar-card h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .nav-links {
          list-style: none;
          padding: 0;
        }

        .nav-links li {
          margin-bottom: 0.5rem;
        }

        .nav-links a {
          color: var(--text-light);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .sidebar-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .btn-small {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .content-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .usage-grid,
          .security-measures,
          .rights-list,
          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;