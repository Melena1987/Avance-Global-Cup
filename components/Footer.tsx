import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
        {children}
    </a>
);

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
                    <span className="font-bold text-gray-200">Phone:</span> <a href="tel:+16198509247" className="text-gray-300 hover:text-blue-400 transition-colors">(619) 850-9247</a>
                </p>
            </div>
          </div>
          
          {/* Column 3: Social Media */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
                <SocialIcon href="https://www.instagram.com/avancebasketballcup_/">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.849-.07c-3.26-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.482.01-4.698.067-2.61.12-3.834 1.344-3.954 3.954C3.309 8.73 3.299 9.095 3.299 12.001s.01 3.27.067 4.698c.12 2.61 1.344 3.834 3.954 3.954 1.217.056 1.582.067 4.698.067s3.482-.01 4.698-.067c2.61-.12 3.834-1.344 3.954-3.954.056-1.217.067-1.582.067-4.698s-.01-3.27-.067-4.698c-.12-2.61-1.344-3.834-3.954-3.954C15.482 3.613 15.117 3.603 12 3.603zM12 7.088c-2.71 0-4.912 2.202-4.912 4.912s2.202 4.912 4.912 4.912 4.912-2.202 4.912-4.912S14.71 7.088 12 7.088zm0 8.04c-1.72 0-3.128-1.408-3.128-3.128s1.408-3.128 3.128-3.128 3.128 1.408 3.128 3.128-1.408 3.128-3.128-3.128zm6.22-8.28c-.618 0-1.12.502-1.12 1.12s.502 1.12 1.12 1.12 1.12-.502 1.12-1.12-.502-1.12-1.12-1.12z" clipRule="evenodd" /></svg>
                </SocialIcon>
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