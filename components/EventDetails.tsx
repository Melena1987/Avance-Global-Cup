import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

interface DetailCardProps {
    title: string;
    description: React.ReactNode;
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
                        <DetailCard 
                            title="Format" 
                            description={
                                <>
                                    10 teams in 2 groups. A group stage leads to a final day of placement games to crown the champion at <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">The Embassy</a>.
                                </>
                            }
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </DetailCard>
                    </div>
                     <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        <DetailCard title="Complete Experience" description="A weekend of basketball complemented by fan activations and entertainment, creating an unforgettable experience beyond the court.">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12H22" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C14.7614 2 17 6.47715 17 12C17 17.5228 14.7614 22 12 22" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22" />
                            </svg>
                        </DetailCard>
                    </div>
                     <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '400ms'}}>
                        <DetailCard title="Global Reach" description="The event will be broadcast globally via streaming, bringing the action to fans worldwide.">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.25 9.75h17.5M3.25 14.25h17.5M9.75 3.25c1.5-1.5 4.5-1.5 6 0M14.25 20.75c-1.5 1.5-4.5 1.5-6 0"></path>
                            </svg>
                        </DetailCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;