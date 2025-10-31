import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

interface TeamPinProps {
  name: string;
  location: string;
  position: string;
  logo: string;
}

const TeamPin: React.FC<TeamPinProps> = ({ name, location, position, logo }) => (
  <div className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2 group`}>
    <div className="relative flex flex-col items-center">
      <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-800/80 border-2 border-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
        <span className="text-2xl font-bold">{logo}</span>
      </div>
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-full mb-3 w-48 bg-[#1a202c] text-white text-center text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-gray-400">{location}</p>
        <div className="absolute text-[#1a202c]" style={{left: '50%', transform: 'translateX(-50%)', top: '100%'}}>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="currentColor"><path d="M0 0 L8 8 L16 0 Z" /></svg>
        </div>
      </div>
    </div>
  </div>
);

const teamsData = [
    { name: 'Veritas Academy', location: 'Los Angeles, CA', position: 'top-[40%] left-[18%]', logo: 'V' },
    { name: 'Bellavista College Prep', location: 'Phoenix, AZ', position: 'top-[53%] left-[19%]', logo: 'B' },
    { name: 'Orangeville Institute', location: 'ON, Canada', position: 'top-[30%] left-[25%]', logo: 'O' },
    { name: 'The Program', location: 'Brooklyn, NY', position: 'top-[38%] left-[28%]', logo: 'P' },
    { name: 'Unicaja de Malaga', location: 'Malaga, Spain', position: 'top-[40%] left-[48%]', logo: 'U' },
    { name: 'Varese Pallacanestro', location: 'Varese, Italy', position: 'top-[33%] left-[52%]', logo: 'V' },
    { name: 'Dubai Basketball', location: 'Dubai, UAE', position: 'top-[52%] left-[68%]', logo: 'D' },
    { name: 'NBA Academy Africa', location: 'Saly, Senegal', position: 'top-[65%] left-[45%]', logo: 'N' },
    { name: 'Australia Elite', location: 'Australia', position: 'top-[80%] left-[85%]', logo: 'A' },
];

const Teams: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(contentRef, { threshold: 0.1 });

  return (
    <section id="teams" className="py-20 bg-[#1a202c] overflow-hidden">
      <div ref={contentRef} className={`reveal ${isVisible ? 'visible' : ''} container mx-auto px-6 text-center`}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <div><span className="text-5xl font-extrabold text-blue-400">5</span><p className="text-lg text-gray-300">Continents</p></div>
            <div><span className="text-5xl font-extrabold text-blue-400">7</span><p className="text-lg text-gray-300">Countries</p></div>
            <div><span className="text-5xl font-extrabold text-blue-400">10</span><p className="text-lg text-gray-300">Teams</p></div>
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-10">THE TEAMS</h2>
        
        <div className="relative w-full max-w-6xl mx-auto aspect-[2/1] rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/87/World_map_blank_gmt.svg')" , filter: 'invert(0.8) sepia(0.8) saturate(0.5) hue-rotate(180deg)'}}
            ></div>
            <div className="absolute inset-0">
                {teamsData.map(team => <TeamPin key={team.name} {...team} />)}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;