import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const Overview: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(contentRef, { threshold: 0.1 });

  return (
    <section id="overview" className="py-20 bg-[#1a202c] overflow-hidden">
      <div ref={contentRef} className={`reveal ${isVisible ? 'visible' : ''} container mx-auto px-6 max-w-4xl`}>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          The AVANCE Global Cup in Málaga, Spain will bring together 10 elite teams from across the world, showcasing top talent from North America, Europe, Africa, Oceania, and Asia in a one-of-a-kind international tournament. Hosted at The Embassy Training Facility — a world-class venue that has welcomed NBA stars and national teams — this prestigious event provides an unparalleled stage for competition, development, and global exposure.
        </p>

        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Event Context</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          AVANCE Global Cup builds on the success of the AVANCE at L'ATTITUDE Basketball Classic, which drew over <span className="font-bold text-white">100+ NCAA</span> coaches and <span className="font-bold text-white">28 NBA scouts and front office personnel</span>. More than a tournament, it is a global stage where sports, business, media, and culture converge — uniting elite teams from around the world and attracting international attention.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 mt-8">
          <p className="text-gray-300 text-lg">Officially sanctioned by the NBA.</p>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762446589359_logo_nba_400x400.png?alt=media&token=98a22c9b-5ef4-4594-a2b9-11838230c606" 
            alt="NBA Logo" 
            className="h-16 w-auto object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;