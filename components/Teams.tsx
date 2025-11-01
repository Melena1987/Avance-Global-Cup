import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const Teams: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(contentRef, { threshold: 0.1 });

  return (
    <section id="teams" className="py-20 bg-[#151f28] overflow-hidden">
      <div ref={contentRef} className={`reveal ${isVisible ? 'visible' : ''} container mx-auto px-6 text-center`}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <div><span className="text-5xl font-extrabold text-blue-400">5</span><p className="text-lg text-gray-300">Continents</p></div>
            <div><span className="text-5xl font-extrabold text-blue-400">7</span><p className="text-lg text-gray-300">Countries</p></div>
            <div><span className="text-5xl font-extrabold text-blue-400">10</span><p className="text-lg text-gray-300">Teams</p></div>
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-10">THE TEAMS</h2>
        
        <div className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
          <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761985339371_mapa_con_logos_avance_global_cup.png?alt=media&token=a8c150b5-7a9d-4ffe-b581-d3d5acc07dca" 
              alt="Map of participating teams"
              className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Teams;