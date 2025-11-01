import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

interface StatCardProps {
    value: string;
    title: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description }) => (
    <div className="text-center p-8 bg-[#222a35] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <p className="text-6xl font-extrabold text-blue-400 mb-2">{value}</p>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

interface ImpactProps {
  navigateTo: (page: string) => void;
}

const Impact: React.FC<ImpactProps> = ({ navigateTo }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(gridRef);

    const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigateTo('gallery');
    };

    return (
        <section id="impact" className="py-20 bg-[#1a202c] overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">Global Cup 2024 Impact</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Key metrics from the 2024 edition in San Diego, California, demonstrating our event's significant reach and influence.</p>
                <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
                    <div className={`reveal ${isVisible ? 'visible' : ''}`}>
                        <StatCard 
                            value="3.2M" 
                            title="Impressions" 
                            description="Media coverage in impressions on digital media and social networks." 
                        />
                    </div>
                    <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        <StatCard 
                            value="12+" 
                            title="Countries" 
                            description="Media coverage in over a dozen countries, highlighting global interest." 
                        />
                    </div>
                    <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '400ms'}}>
                        <StatCard 
                            value="85%" 
                            title="Audience" 
                            description="Qualified public between the ages of 16-35 with high purchasing power." 
                        />
                    </div>
                </div>
                <div className="text-center mt-16">
                    <a
                        href="/gallery"
                        onClick={handleGalleryClick}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        View 2024 Official Gallery
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Impact;