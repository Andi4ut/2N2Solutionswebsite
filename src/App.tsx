import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import SolutionsPage from './pages/SolutionsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactPage from './pages/ContactPage';
import WhyNowPage from './pages/WhyNowPage';
import DataDividePage from './pages/DataDividePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/why-now" element={<WhyNowPage />} />
            <Route path="/why-now/data-divide" element={<DataDividePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;