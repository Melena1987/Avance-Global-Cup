import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer id="contact" className="bg-[#151f28] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Logo & Event Info */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" 
              alt="Avance Global Cup Logo" 
              className="h-16 w-auto"
            />
            <p className="mt-4 text-center md:text-left">Málaga, Spain | January 29 to 31, 2026</p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="md:col-span-5 text-center md:text-left">
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
          
          {/* Column 3: Social Media */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end">
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
            <button onClick={() => navigateTo('legal')} className="order-1 sm:order-2 text-gray-400 hover:text-white transition-colors duration-200">
                Términos y Condiciones y Política de Cookies
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;