import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigateTo(page);
  };

  return (
    <footer id="contact" className="bg-[#151f28] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-gray-400">
        
        <div className="text-center mb-12 pb-12 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-3">Interested in Partnership?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Elevate your brand by joining a premier international event that unites sports, business, and culture.
            </p>
            <a 
                href="/partner" 
                onClick={(e) => handleNavClick(e, 'partner')}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Explore Opportunities
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Logo & Event Info */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <a href="/" onClick={(e) => handleNavClick(e, 'main')} className="cursor-pointer" aria-label="Go to homepage">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" 
                alt="Avance Global Cup Logo" 
                className="h-16 w-auto"
              />
            </a>
            <p className="mt-4 text-center md:text-left">Málaga, Spain | January 29 to 31, 2026</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 text-center md:text-left">
             <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
             <ul className="space-y-2">
                <li><a href="/" onClick={(e) => handleNavClick(e, 'main')} className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/partner" onClick={(e) => handleNavClick(e, 'partner')} className="text-gray-300 hover:text-blue-400 transition-colors">Be a Partner</a></li>
                <li><a href="/gallery2024" onClick={(e) => handleNavClick(e, 'gallery')} className="text-gray-300 hover:text-blue-400 transition-colors">Gallery 2024</a></li>
             </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-base">
                <p className="text-gray-200">
                    <span className="font-bold uppercase">Hernan Olaya</span> / Director of Operations
                </p>
                <p>
                    <span className="font-bold text-gray-200">Email:</span> <a href="mailto:hernan@avancesports.org" className="text-gray-300 hover:text-blue-400 transition-colors">hernan@avancesports.org</a>
                </p>
                <p>
                    <span className="font-bold text-gray-200">Website:</span> <a href="http://www.avanceglobalcup.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">www.avanceglobalcup.com</a>
                </p>
                <p>
                    <span className="font-bold text-gray-200">Phone:</span> <a href="tel:+16198509247" className="text-gray-300 hover:text-blue-400 transition-colors">+1 (619) 850-9247</a>
                </p>
            </div>
          </div>
          
          {/* Column 4: Social Media */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/avancebasketballcup_/" target="_blank" rel="noopener noreferrer" className="group">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/87/87390.png" 
                        alt="Instagram" 
                        className="w-8 h-8 filter invert opacity-75 group-hover:opacity-100 transition-opacity duration-200"
                    />
                </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} AVANCE Global. All rights reserved.</p>
            <a href="/legal" onClick={(e) => handleNavClick(e, 'legal')} className="order-1 sm:order-2 text-gray-400 hover:text-white transition-colors duration-200">
                Terms and Conditions & Cookie Policy
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;