'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Refs for dropdown menus
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
            
            {/* About Dropdown - Modified to use hover */}
            <div 
              ref={aboutDropdownRef} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div 
                className="relative font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300 group flex items-center cursor-pointer"
              >
                About Us
                <svg className="ml-1 w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </div>
              
              <div
                className={`absolute left-0 mt-0 pt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-20 transition-opacity duration-200 ${activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <DropdownLink href="/about" label="About Company" onClick={() => {}} />
                <DropdownLink href="/about/principals" label="Bios of Principals" onClick={() => {}} />
              </div>
            </div>
            
            {/* Services Dropdown - Modified to use hover */}
            <div 
              ref={servicesDropdownRef} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div 
                className="relative font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300 group flex items-center cursor-pointer"
              >
                Services
                <svg className="ml-1 w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </div>
              
              <div
                className={`absolute left-0 mt-0 pt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-20 transition-opacity duration-200 ${activeDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <DropdownLink href="/services/financial-planning" label="Financial Planning" onClick={() => {}} />
                <DropdownLink href="/services/retirement-planning" label="Retirement Planning" onClick={() => {}} />
                <DropdownLink href="/services/wealth-planning" label="Wealth Planning" onClick={() => {}} />
              </div>
            </div>
            
            <NavLink href="/resources" label="Resources" />
            <NavLink href="/news" label="Industry News" />
            <NavLink href="/contact" label="Contact Us" />
            
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white rounded-lg font-medium shadow-md shadow-primary-200/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </Link>
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
              
              {/* Mobile About Dropdown */}
              <MobileDropdown 
                title="About Us" 
                items={[
                  { href: "/about", label: "About Company" },
                  { href: "/about/principals", label: "Bios of Principals" }
                ]} 
                onItemClick={() => setIsMobileMenuOpen(false)} 
              />
              
              {/* Mobile Services Dropdown */}
              <MobileDropdown 
                title="Services" 
                items={[
                  { href: "/services/financial-planning", label: "Financial Planning" },
                  { href: "/services/retirement-planning", label: "Retirement Planning" },
                  { href: "/services/wealth-planning", label: "Wealth Planning" }
                ]} 
                onItemClick={() => setIsMobileMenuOpen(false)} 
              />
              
              <MobileNavLink href="/resources" label="Resources" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/news" label="Industry News" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/contact" label="Contact Us" onClick={() => setIsMobileMenuOpen(false)} />
              
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link>
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

const DropdownLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
    >
      {label}
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