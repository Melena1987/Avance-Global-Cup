import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Teams from './components/Teams';
import Venue from './components/Venue';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a202c] to-[#2d3748] text-gray-200 font-sans">
      <Header />
      <main>
        <Hero />
        <Teams />
        <Venue />
        <EventDetails />
      </main>
      <Footer />
    </div>
  );
};

export default App;