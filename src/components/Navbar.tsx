'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-br from-primary-700 via-primary-500 to-primary-600 bg-clip-text text-transparent">Garfield</span>
              <span className="ml-1 text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Financial</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About Us" />
            
            {/* Services Dropdown */}
            <div 
              ref={servicesRef} 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300 group"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  >
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium"
                    >
                      Services
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link
                      href="/services/financial-planning"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      Financial Planning
                    </Link>
                    <Link
                      href="/services/wealth-planning"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      Wealth Planning
                    </Link>
                    <Link
                      href="/services/retirement-planning"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      Retirement Planning
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink href="/resources" label="Resources" />
            <NavLink href="/blogs" label="Blogs" />
            <NavLink href="/contact" label="Contact Us" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavLink href="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/about" label="About Us" onClick={() => setIsMobileMenuOpen(false)} />
              
              {/* Mobile Services Dropdown */}
              <MobileDropdown 
                title="Services" 
                items={[
                  { href: "/services", label: "Services" },
                  { href: "/services/financial-planning", label: "Financial Planning" },
                  { href: "/services/wealth-planning", label: "Wealth Planning" },
                  { href: "/services/retirement-planning", label: "Retirement Planning" }
                ]} 
                onItemClick={() => setIsMobileMenuOpen(false)} 
              />
              
              <MobileNavLink href="/resources" label="Resources" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/blogs" label="Blogs" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/contact" label="Contact Us" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="relative font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

const MobileNavLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 px-4 text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-300"
    >
      {label}
    </Link>
  );
};

const MobileDropdown = ({ 
  title, 
  items, 
  onItemClick 
}: { 
  title: string; 
  items: { href: string; label: string }[]; 
  onItemClick: () => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 px-4 text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-300"
      >
        <span>{title}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-6"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  onItemClick();
                }}
                className="block py-2 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;