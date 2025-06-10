import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyDropdownOpen, setIsApplyDropdownOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Startups', path: '/startups' },
    { name: 'Events', path: '/events' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Contact', path: '/contact' },
  ];

  const applyOptions = [
    { name: 'Corporate Partnership', path: '/corporate-partnership' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Investors', path: '/investors' },
    { name: 'Startup Incubation', path: '/startup-incubation' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-poppins font-bold text-brand-blue">
              CIT <span className="text-brand-purple">Incubate</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-brand-purple transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Apply Now Dropdown */}
              <div className="relative">
                <Button 
                  className="bg-brand-purple hover:bg-opacity-90 text-white flex items-center gap-1"
                  onClick={() => setIsApplyDropdownOpen(!isApplyDropdownOpen)}
                >
                  Apply Now
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                {isApplyDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-md shadow-lg border min-w-[200px] z-50">
                    {applyOptions.map((option) => (
                      <Link
                        key={option.name}
                        to={option.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-purple transition-colors first:rounded-t-md last:rounded-b-md"
                        onClick={() => setIsApplyDropdownOpen(false)}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden py-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-brand-purple transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Apply Options */}
              <div className="border-t pt-4 space-y-2">
                <p className="text-sm font-semibold text-gray-900 px-2">Apply Now:</p>
                {applyOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    className="block px-4 py-2 text-white bg-brand-purple hover:bg-opacity-90 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Click outside to close dropdown */}
        {isApplyDropdownOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsApplyDropdownOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
