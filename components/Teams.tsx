import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

interface TeamsProps {
  navigateTo: (page: string) => void;
}

const Teams: React.FC<TeamsProps> = ({ navigateTo }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(contentRef, { threshold: 0.1 });

  const handlePartnerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('partner');
  };

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

        <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Connect your brand with the next generation of basketball superstars and a passionate global audience.
            </p>
            <a
                href="/partner"
                onClick={handlePartnerClick}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Become a Partner
            </a>
        </div>
      </div>
    </section>
  );
};

export default Teams;