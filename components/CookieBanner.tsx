import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  navigateTo: (page: string) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ navigateTo }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a202c]/95 backdrop-blur-sm p-4 z-50 border-t border-gray-700">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          This website uses cookies to ensure you get the best experience. By continuing, you agree to our use of cookies. For more information, see our{' '}
          <button onClick={() => navigateTo('legal')} className="text-blue-400 hover:underline">
            Cookie Policy
          </button>.
        </p>
        <button 
          onClick={handleAccept} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;