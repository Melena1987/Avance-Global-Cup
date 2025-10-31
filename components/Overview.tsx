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
          The AVANCE Global Cup in Málaga, Spain will bring together 10 elite teams from across the globe, featuring top talent from North America, Europe, Africa, Oceania and Asia in a one-of-a-kind international basketball tournament. Hosted at The Embassy Training Facility — a world-class venue that has welcomed NBA players and national teams from around the world — this prestigious event offers an unmatched setting for competition and global exposure.
        </p>

        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Event Context</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          AVANCE Global Cup builds on the success of the AVANCE at L'ATTITUDE Basketball Classic, which drew over <span className="font-bold text-white">50 NCAA</span> coaches and <span className="font-bold text-white">25 NBA scouts</span>. More than a tournament, it is a global stage where sports, business, media, and culture converge — uniting elite teams from around the world and attracting international attention.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 mt-8">
          <p className="text-gray-400 italic text-lg shrink-0">*Our event is being sanctioned by the :</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761953861247_nba.png?alt=media&token=738375bd-9369-4ba6-97db-0c2879131116" 
              alt="NBA Logo" 
              className="h-16 w-auto object-contain" 
            />
            <span className="text-2xl text-gray-500">&</span>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761953861247_fiba.png?alt=media&token=9bfb33df-5c09-4d97-a105-72d20dad3436" 
              alt="FIBA Logo" 
              className="h-14 w-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;