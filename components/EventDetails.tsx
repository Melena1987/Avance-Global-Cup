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
        <section id="event" className="py-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=974')" }}>
             <div className="absolute inset-0 bg-[#1a202c] opacity-80"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">The Event: Beyond the game</h2>
                <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
                    <div className={`reveal ${isVisible ? 'visible' : ''}`}>
                        <DetailCard title="Format" description="Round-Robin + Grand Final to Crown the champion. All games will be held in The Embassy.">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </DetailCard>
                    </div>
                     <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        <DetailCard title="Complete Experience" description="Fan Zone will be available, featuring brand activations, games, food trucks, live music, and official event merchandise.">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.5M17 18h-5.564a2 2 0 01-1.932-2.523l1.437-4.312A2 2 0 0113 9h4a2 2 0 012 2v4.5M17 18a2 2 0 002 2h1a2 2 0 002-2v-4.5a2 2 0 00-2-2h-1"></path></svg>
                        </DetailCard>
                    </div>
                     <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '400ms'}}>
                        <DetailCard title="Global Reach" description="The event will be broadcast globally via streaming, bringing the action to fans worldwide.">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 10.743L5.45 8.456a2 2 0 00-2.828 0L2 9.07m18 0l.546.546a2 2 0 010 2.828l-2.288 2.288M12 17.553V12.01m0-3.013V4.944c0-.528.21-1.036.586-1.414l2.288-2.288a1 1 0 011.414 0l.546.546"></path></svg>
                        </DetailCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;