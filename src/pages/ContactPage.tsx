import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    
    // Step 2: Business Info
    industry: '',
    companySize: '',
    currentChallenges: [],
    
    // Step 3: Project Details
    projectType: '',
    timeline: '',
    budget: '',
    priorities: [],
    
    // Step 4: Additional Info
    message: '',
    hearAboutUs: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    const currentValues = formData[field as keyof typeof formData] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    handleInputChange(field, newValues);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your submission! We\'ll be in touch within 24 hours.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h3>Let's start with your basic information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <h3>Tell us about your business</h3>
            <div className="form-group">
              <label>Industry *</label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                required
              >
                <option value="">Select your industry</option>
                <option value="financial-services">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology</option>
                <option value="energy">Energy & Utilities</option>
                <option value="transportation">Transportation</option>
                <option value="real-estate">Real Estate</option>
                <option value="education">Education</option>
                <option value="government">Government</option>
                <option value="non-profit">Non-Profit</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Company Size *</label>
              <select
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                required
              >
                <option value="">Select company size</option>
                <option value="startup">Startup (1-10 employees)</option>
                <option value="small">Small Business (11-50 employees)</option>
                <option value="medium">Medium Business (51-200 employees)</option>
                <option value="large">Large Business (201-1000 employees)</option>
                <option value="enterprise">Enterprise (1000+ employees)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Current Business Challenges (Select all that apply)</label>
              <div className="checkbox-grid">
                {[
                  'Data management and analytics',
                  'Process inefficiencies',
                  'Manual workflows',
                  'System integration issues',
                  'Performance monitoring',
                  'Compliance and governance',
                  'Cost optimization',
                  'Digital transformation'
                ].map(challenge => (
                  <label key={challenge} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.currentChallenges.includes(challenge)}
                      onChange={() => handleCheckboxChange('currentChallenges', challenge)}
                    />
                    {challenge}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <h3>Project details and requirements</h3>
            <div className="form-group">
              <label>Type of Project *</label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                required
              >
                <option value="">Select project type</option>
                <option value="data-strategy">Data Strategy & Analytics</option>
                <option value="process-automation">Process Automation</option>
                <option value="operational-excellence">Operational Excellence</option>
                <option value="digital-transformation">Digital Transformation</option>
                <option value="business-intelligence">Business Intelligence</option>
                <option value="comprehensive">Comprehensive Assessment</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Project Timeline *</label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                required
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (Within 1 month)</option>
                <option value="short-term">Short-term (1-3 months)</option>
                <option value="medium-term">Medium-term (3-6 months)</option>
                <option value="long-term">Long-term (6+ months)</option>
                <option value="planning">Still in planning phase</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Budget Range</label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="500k-1m">$500,000 - $1,000,000</option>
                <option value="over-1m">Over $1,000,000</option>
                <option value="discuss">Prefer to discuss</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Project Priorities (Select top 3)</label>
              <div className="checkbox-grid">
                {[
                  'Cost reduction',
                  'Efficiency improvement',
                  'Revenue growth',
                  'Risk mitigation',
                  'Compliance',
                  'Innovation',
                  'Customer satisfaction',
                  'Employee productivity'
                ].map(priority => (
                  <label key={priority} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.priorities.includes(priority)}
                      onChange={() => handleCheckboxChange('priorities', priority)}
                      disabled={formData.priorities.length >= 3 && !formData.priorities.includes(priority)}
                    />
                    {priority}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="form-step">
            <h3>Additional information</h3>
            <div className="form-group">
              <label>Tell us more about your project</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={5}
                placeholder="Describe your specific needs, challenges, or goals..."
              />
            </div>
            
            <div className="form-group">
              <label>How did you hear about us?</label>
              <select
                value={formData.hearAboutUs}
                onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="referral">Referral</option>
                <option value="linkedin">LinkedIn</option>
                <option value="industry-event">Industry Event</option>
                <option value="partner">Partner/Vendor</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Get Your Free Business Assessment</h1>
            <p className="hero-subtitle">
              Discover how 2N2 Solutions can transform your business operations. 
              Complete our comprehensive assessment to receive personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="form-container">
              {/* Progress Bar */}
              <div className="progress-bar">
                <div className="progress-steps">
                  {[1, 2, 3, 4].map(step => (
                    <div
                      key={step}
                      className={`progress-step ${step <= currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}
                    >
                      {step < currentStep ? <CheckCircle size={20} /> : step}
                    </div>
                  ))}
                </div>
                <div className="progress-line">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="assessment-form">
                {renderStep()}
                
                <div className="form-navigation">
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="btn btn-secondary">
                      <ArrowLeft size={20} />
                      Previous
                    </button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button type="button" onClick={nextStep} className="btn btn-primary">
                      Next
                      <ArrowRight size={20} />
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary">
                      Submit Assessment
                      <Send size={20} />
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h3>Ready to Get Started?</h3>
                <p>
                  Our team of experts is ready to help you transform your business. 
                  Complete the assessment or reach out directly.
                </p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <Mail size={24} />
                    <div>
                      <h4>Email Us</h4>
                      <p>info@2n2solutions.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <Phone size={24} />
                    <div>
                      <h4>Call Us</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <MapPin size={24} />
                    <div>
                      <h4>Visit Us</h4>
                      <p>New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="benefits-card">
                <h4>What You'll Get:</h4>
                <ul>
                  <li><CheckCircle size={16} /> Comprehensive business analysis</li>
                  <li><CheckCircle size={16} /> Personalized recommendations</li>
                  <li><CheckCircle size={16} /> ROI projections</li>
                  <li><CheckCircle size={16} /> Implementation roadmap</li>
                  <li><CheckCircle size={16} /> Free 30-minute consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
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

        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .form-container {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .progress-bar {
          margin-bottom: 3rem;
          position: relative;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .progress-step {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e5e5e5;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .progress-step.active {
          background: var(--primary-color);
          color: white;
        }

        .progress-step.completed {
          background: var(--primary-color);
          color: white;
        }

        .progress-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: #e5e5e5;
          transform: translateY(-50%);
          z-index: 1;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary-color);
          transition: width 0.3s ease;
        }

        .form-step h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--secondary-color);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--secondary-color);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }

        .checkbox-label:hover {
          background-color: var(--background-light);
        }

        .checkbox-label input[type="checkbox"] {
          width: auto;
          margin: 0;
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 3rem;
          gap: 1rem;
        }

        .form-navigation .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card,
        .benefits-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border-color);
        }

        .info-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .info-card p {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-method svg {
          color: var(--primary-color);
          flex-shrink: 0;
        }

        .contact-method h4 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: var(--secondary-color);
        }

        .contact-method p {
          color: var(--text-light);
          margin: 0;
          font-size: 0.9rem;
        }

        .benefits-card h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .benefits-card ul {
          list-style: none;
          padding: 0;
        }

        .benefits-card ul li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .benefits-card ul li svg {
          color: var(--primary-color);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-container {
            padding: 2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .checkbox-grid {
            grid-template-columns: 1fr;
          }

          .form-navigation {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;