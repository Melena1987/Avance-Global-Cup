import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Teams from './components/Teams';
import Venue from './components/Venue';
import EventDetails from './components/EventDetails';
import Offer from './components/Offer';
import GalleryPreview from './components/GalleryPreview';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import CookieBanner from './components/CookieBanner';
import PartnerPage from './components/PartnerPage';
import GalleryPage from './components/GalleryPage';

const pageConfig = {
  main: { path: '/', title: 'Avance Global Basketball Cup' },
  partner: { path: '/partner', title: 'Be a Partner | Avance Global Cup' },
  gallery: { path: '/gallery2024', title: 'Official Gallery 2024 | Avance Global Cup' },
  legal: { path: '/legal', title: 'Terms and Conditions & Cookie Policy | Avance Global Cup' },
};

const getPageFromPath = (path: string): string => {
  return Object.keys(pageConfig).find(page => pageConfig[page as keyof typeof pageConfig].path === path) || 'main';
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(getPageFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  useEffect(() => {
    document.title = pageConfig[currentPage as keyof typeof pageConfig].title;
    document.documentElement.lang = 'en';
  }, [currentPage]);

  const navigateTo = (page: string) => {
    if (currentPage === page && window.location.pathname === pageConfig[page as keyof typeof pageConfig].path) {
        window.scrollTo(0, 0);
        return;
    }
    
    const newPath = pageConfig[page as keyof typeof pageConfig].path;
    window.history.pushState({ page }, '', newPath);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'legal':
        return <LegalPage navigateTo={navigateTo} />;
      case 'partner':
        return <PartnerPage navigateTo={navigateTo} />;
      case 'gallery':
        return <GalleryPage navigateTo={navigateTo} />;
      case 'main':
      default:
        return (
          <main>
            <Hero />
            <Overview />
            <Teams navigateTo={navigateTo} />
            <EventDetails />
            <Venue />
            <Offer />
            <GalleryPreview navigateTo={navigateTo} />
          </main>
        );
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#1a202c] to-[#2d3748] text-gray-200 font-sans">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      {renderContent()}
      <Footer navigateTo={navigateTo} />
      <CookieBanner navigateTo={navigateTo} />
    </div>
  );
};

export default App;