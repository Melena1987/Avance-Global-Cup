import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const FibaLogo: React.FC = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#D8392B"/>
        <path d="M30 25 L70 25 L70 35 L50 35 L50 75 L40 75 L40 35 L30 35 Z" fill="white"/>
        <path d="M70 40 a15 15 0 1 1 0 30 a15 15 0 1 1 0 -30 Z" fill="#0072CE"/>
        <path d="M70 45 a10 10 0 1 1 0 20 a10 10 0 1 1 0 -20 Z" fill="#FFC72C"/>
        <path d="M70 50 a5 5 0 1 1 0 10 a5 5 0 1 1 0 -10 Z" fill="#00A651"/>
    </svg>
);

const NbaLogo: React.FC = () => (
    <svg width="40" height="80" viewBox="0 0 30 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 H30 V60 H0 Z" fill="#C8102E"/>
        <path d="M0 0 H15 V60 H0 Z" fill="#006BB6"/>
        <path d="M15 10 C 20 15, 20 25, 15 30 C 10 25, 10 15, 15 10 Z" fill="white"/>
        <path d="M13 28 L17 28 L17 45 L22 50 L18 55 L12 55 L8 50 L13 45 Z" fill="white"/>
    </svg>
);

const Overview: React.FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesVisible = useOnScreen(imagesRef, { threshold: 0.2 });
  const textVisible = useOnScreen(textRef, { threshold: 0.2 });

  return (
    <section id="overview" className="py-20 bg-[#222a35] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imagesRef} className={`reveal ${imagesVisible ? 'visible' : ''} space-y-6`}>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?image=101" alt="Basketball court" className="w-full h-full object-cover"/>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?image=219" alt="Sports conference" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div ref={textRef} className={`reveal ${textVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-4xl font-extrabold text-white mb-6">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              The AVANCE Global Cup in Málaga, Spain will bring together 10 elite teams from across the globe, featuring top talent from North America, Europe, Africa, Oceania and Asia in a one-of-a-kind international basketball tournament. Hosted at The Embassy Training Facility – a world-class venue that has welcomed NBA players and national teams from around the world – this prestigious event offers an unmatched setting for competition and global exposure.
            </p>
            <h3 className="text-3xl font-bold text-white mb-4">Event Context</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              AVANCE Global Cup builds on the success of the AVANCE at L'ATTITUDE Basketball Classic, which drew over 50 NCAA coaches and 25 NBA scouts. More than a tournament, it is a global stage where sports, business, media, and culture converge — uniting elite teams from around the world and attracting international attention.
            </p>
            <div className="bg-[#1a202c] p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 mb-4">*Our event is being sanctioned by:</p>
                <div className="flex items-center space-x-6">
                    <NbaLogo />
                    <span className="text-3xl font-thin text-gray-500">&</span>
                    <FibaLogo />
                    <p className="text-lg font-semibold text-gray-300">FIBA<br/><span className="text-xs font-normal">We Are Basketball</span></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;