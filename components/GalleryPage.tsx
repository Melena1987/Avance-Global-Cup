import React from 'react';

interface GalleryPageProps {
  navigateTo: (page: string) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ navigateTo }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigateTo(page);
  };
  
  return (
    <section className="py-24 pt-40 bg-[#1a202c]">
      <div className="container mx-auto px-6 text-gray-300">
        <a href="/" onClick={(e) => handleNavClick(e, 'main')} className="mb-8 text-blue-400 hover:text-blue-300 transition-colors inline-block">
          &larr; Back to main page
        </a>

        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Official Gallery: Avance Global Cup 2024</h1>
        
        <div className="w-full mx-auto rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          <iframe
            src="https://galeriaoficial.app/?embed=true#/public/album/IuHRHDVXbqaGED2KQEvH"
            width="100%"
            style={{ border: 0, display: 'block', height: '80vh', minHeight: '600px' }}
            allowFullScreen={true}
            loading="lazy"
            title="Galería: Avance Global Cup 2024 - Galería Oficial"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;