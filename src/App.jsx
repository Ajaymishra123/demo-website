import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen"> {/* Light background for the whole app */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Software Co.</div>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-gray-500">Home</Link>
              <Link to="/services" className="hover:text-gray-500">Services</Link>
              <Link to="/about-us" className="hover:text-gray-500">About Us</Link>
              <Link to="/testimonials" className="hover:text-gray-500">Testimonials</Link>
              <Link to="/contact-us" className="hover:text-gray-500">Contact Us</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
