import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const visionConcepts = [
    { number: "01", title: "Excellence" },
    { number: "02", title: "Global Projection" },
    { number: "03", title: "Talent Discovery" },
    { number: "04", title: "Complete Experience" },
];

const VisionCard: React.FC<{ number: string; title: string; delay: number; isVisible: boolean }> = ({ number, title, delay, isVisible }) => (
    <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="bg-[#2d3748]/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 h-full transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2">
            <span className="block text-5xl font-extrabold text-blue-400/50 mb-4">{number}</span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
    </div>
);

const Vision: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(contentRef);

    return (
        <section 
            id="vision" 
            className="relative py-20 overflow-hidden"
        >
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945821047_AVANCE_BASKETBALL_57.jpg?alt=media&token=ac5097fb-5f0f-41fa-a46c-d97770835c3a')" }}
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-[#1a202c]/80" aria-hidden="true"></div>
            <div ref={contentRef} className="relative container mx-auto px-6">
                <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
                    <h2 className="text-4xl font-extrabold text-white">Vision & Concept</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {visionConcepts.map((concept, index) => (
                        <VisionCard 
                            key={concept.number}
                            number={concept.number} 
                            title={concept.title} 
                            delay={index * 150}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
                
                <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                    <p className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed text-lg">
                        The goal is to establish the Global Basketball Cup as the most prestigious international youth basketball tournament in the world, creating a platform that acts as a bridge between continents. The event is inspired by major sporting events, blending top-level competition, culture, and entertainment into a high-impact spectacle for sponsors and fans.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;