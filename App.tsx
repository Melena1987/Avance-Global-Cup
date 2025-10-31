import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Teams from './components/Teams';
import Vision from './components/Vision';
import Venue from './components/Venue';
import EventDetails from './components/EventDetails';
import Impact from './components/Impact';
import Offer from './components/Offer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a202c] to-[#2d3748] text-gray-200 font-sans">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Teams />
        <Vision />
        <Venue />
        <EventDetails />
        <Impact />
        <Offer />
      </main>
      <Footer />
    </div>
  );
};

export default App;