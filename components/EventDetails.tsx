import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

interface DetailCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const DetailCard: React.FC<DetailCardProps> = ({ title, description, children }) => (
    <div className="bg-[#222a35]/60 backdrop-blur-md p-8 rounded-lg border border-gray-700 shadow-xl h-full transition-transform duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center mr-4">
                {children}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
            {description}
        </p>
    </div>
);

const EventDetails: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(gridRef);
    
    return (
        <section id="event" className="relative grid">
            <div 
                className="col-start-1 row-start-1 w-full h-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-30.jpg?alt=media&token=a060537d-4372-47a9-96f4-1fd3e0d0cc93')" }}
            ></div>
            <div className="col-start-1 row-start-1 w-full h-full bg-[#1a202c] opacity-80"></div>
            <div className="container mx-auto px-6 relative z-10 col-start-1 row-start-1 py-20">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">The Event: Beyond the game</h2>
                <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
                    <div className={`reveal ${isVisible ? 'visible' : ''}`}>
                        <DetailCard title="Format" description="Round-Robin + Grand Final to Crown the champion. All games will be held in The Embassy.">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </DetailCard>
                    </div>
                     <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        <DetailCard title="Complete Experience" description="Fan Zone will be available, featuring brand activations, games, food trucks, live music, and official event merchandise.">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.5"></path></svg>
                        </DetailCard>
                    </div>
                     <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '400ms'}}>
                        <DetailCard title="Global Reach" description="The event will be broadcast globally via streaming, bringing the action to fans worldwide.">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 01-9-9m-9 9a9 9 0 019-9"></path></svg>
                        </DetailCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
