import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquareText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-primary-600">
          <MessageSquareText className="h-7 w-7" />
          <span>Helperfy AI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-primary-600 transition-colors">Home</a>
          <a href="#features" className="font-medium hover:text-primary-600 transition-colors">Features</a>
          <a href="#pricing" className="font-medium hover:text-primary-600 transition-colors">Pricing</a>
          <a href="#" className="font-medium hover:text-primary-600 transition-colors">Login</a>
          <a href="#" className="btn-primary">Try Free</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="container flex flex-col space-y-4">
            <a 
              href="#" 
              className="font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="font-medium px-4 py-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a 
              href="#" 
              className="btn-primary mx-4"
              onClick={() => setIsOpen(false)}
            >
              Try Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;