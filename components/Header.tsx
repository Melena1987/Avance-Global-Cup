import React, { useState, useEffect } from 'react';

interface HeaderProps {
  navigateTo: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#teams', label: 'Teams' },
    { href: '#event', label: 'Event' },
    { href: '#venue', label: 'Venue' },
    { href: '#offer', label: 'Offer' },
    { href: '#gallery-preview', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigateTo(page);
    setIsMenuOpen(false);
  };
  
  const handleAnchorClick = () => {
      setIsMenuOpen(false);
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-[#1a202c]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" onClick={(e) => handleNavClick(e, 'main')} className="cursor-pointer z-50">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" 
              alt="Avance Global Cup Logo" 
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-4">
            {currentPage === 'main' && navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                {link.label}
              </a>
            ))}
            <a href="/partner" onClick={(e) => handleNavClick(e, 'partner')} className="text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 px-4 py-2 rounded-md text-sm font-semibold">
                Be a Partner
            </a>
          </nav>
          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#1a202c] z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {currentPage === 'main' ? navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={handleAnchorClick} className="text-2xl text-gray-300 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          )) : (
             <a href="/" onClick={(e) => handleNavClick(e, 'main')} className="text-2xl text-gray-300 hover:text-white transition-colors duration-200">Home</a>
          )}
           <a href="/partner" onClick={(e) => handleNavClick(e, 'partner')} className="text-2xl text-blue-400 hover:text-blue-300 transition-colors duration-200">
             Be a Partner
           </a>
        </nav>
      </div>
    </>
  );
};

export default Header;