
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Security from './pages/Security';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass-nav border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 bg-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              L
            </div>
            <span className="text-2xl font-display font-extrabold tracking-tight text-primary-900 dark:text-white">Lejit AI</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold transition-colors ${location.pathname === link.path ? 'text-primary-700 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-700"
            >
              Contact
            </Link>
            <button className="hidden sm:block bg-primary-700 hover:bg-primary-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary-700/20 active:scale-95">
              Start free trial
            </button>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="material-icons-round">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 mt-4 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-lg font-bold px-4 py-2 rounded-xl transition-colors ${location.pathname === link.path ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-4">
               <Link 
                to="/contact" 
                className="text-lg font-bold px-4 py-2 text-slate-600 dark:text-slate-300"
              >
                Contact
              </Link>
              <button className="w-full bg-primary-700 hover:bg-primary-800 text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary-700/20">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const sections = [
    {
      title: 'Product',
      links: [
        { name: 'Platform', path: '/platform' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Security', path: '/security' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', path: '#' },
        { name: 'Privacy Policy', path: '#' },
        { name: 'Cookie Policy', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">Lejit AI</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed mb-8">
              All your legal work in one connected workspace. Built for law firms, corporates, and citizens.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400 transition-colors"><span className="material-icons-round">facebook</span></a>
              <a href="#" className="hover:text-primary-400 transition-colors font-bold">X</a>
              <a href="#" className="hover:text-primary-400 transition-colors font-bold text-lg">in</a>
            </div>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 opacity-40 grayscale hover:opacity-100 transition-opacity">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6bx3HJSeY5G8ZmfbyV0_8sxkUrzFwNe1qRgWQ-od9cKpVP_4-wB0UUjBPa6I-sn7h9jFbu4-ZC_CtpGB5IeejAuPt572w3K_cQeMaAuMM1Uq6SLSDmjR5xk9R0UhknqUoLQwh7cehOe7JUHvdjdXMKjwXlLepaDDba2mjK5i3o0B4YrMhhzUKxT5yuUFI6VoEFAuX2nmWekgop77pzx_wSF6e3wGclltHBBcwRv4X_1QOSIW1JYkcKcplPrMD8PS3tIT2ZVhqX_U" alt="AICPA SOC2" className="h-6" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpbrevSIT66ANLvpSeY0KAf8azeezN-PomRDkXzQI5VhNxwGm0jTZd9DnHpOta6lq55mkE3ZietS0mUQNITKJN_gd6JDcGxEIs5HfoevEjxFlqdMMO-7uauENUYRFZ8JvYfZ_DpnbRzfytbG3UFM6EmT20jMCFSQEAzy_2YV79DCbX2r2MG3CmCS_kUSk9PV2umzuQnfT58CwOtClloj9PGH6-whDujEoamcuhR_5mOzeKp6mrJkm4ztQo1UCqCvawnNNd6pTIuCM" alt="ISO" className="h-8" />
          </div>
          <p className="text-xs">Lejit AI Software Pvt Ltd © 2025. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
