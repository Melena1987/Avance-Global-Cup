import React, { useState, useEffect } from 'react';

interface HeaderProps {
  navigateTo: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#teams', label: 'Teams' },
    { href: '#event', label: 'Event' },
    { href: '#venue', label: 'Venue' },
    { href: '#offer', label: 'Offer' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a202c]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigateTo('main')} className="cursor-pointer">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" 
            alt="Avance Global Cup Logo" 
            className="h-12 w-auto"
          />
        </button>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;