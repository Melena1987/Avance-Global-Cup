import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Teams from './components/Teams';
import Venue from './components/Venue';
import EventDetails from './components/EventDetails';
import Offer from './components/Offer';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('main');

  useEffect(() => {
    if (currentPage === 'main') {
      document.title = 'Avance Global Basketball Cup';
      document.documentElement.lang = 'en';
    } else if (currentPage === 'legal') {
      document.title = 'Terms and Conditions & Cookie Policy | Avance Global Cup';
      document.documentElement.lang = 'en';
    }
  }, [currentPage]);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gradient-to-b from-[#1a202c] to-[#2d3748] text-gray-200 font-sans">
      <Header navigateTo={navigateTo} />
      {currentPage === 'main' ? (
        <main>
          <Hero />
          <Overview />
          <Teams />
          <EventDetails />
          <Venue />
          <Offer />
        </main>
      ) : (
        <LegalPage navigateTo={navigateTo} />
      )}
      <Footer navigateTo={navigateTo} />
      <CookieBanner navigateTo={navigateTo} />
    </div>
  );
};

export default App;