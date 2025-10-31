import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const Venue: React.FC = () => {
    const venuePoints = [
        "Strategic geographical connection between Europe, Africa, and North America.",
        "Deep-rooted basketball culture with an international tradition.",
        "Premium tourism infrastructure for world-class events.",
        "Perfect Mediterranean climate, which helps attract visitors in January."
    ];

    const textRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const isTextVisible = useOnScreen(textRef);
    const isImagesVisible = useOnScreen(imagesRef);

    return (
        <section id="venue" className="py-20 bg-[#1a202c] overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">The Venue: A Global Basketball Epicenter</h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div ref={textRef} className={`reveal ${isTextVisible ? 'visible' : ''}`}>
                        <p className="text-lg text-gray-300 mb-6">
                            The tournament will be held on the <span className="font-bold text-blue-300">Costa del Sol</span>, which is considered an ideal meeting point due to its:
                        </p>
                        <ul className="space-y-4 mb-10">
                            {venuePoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon />
                                    <span className="text-gray-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                         <p className="bg-[#222a35] p-6 rounded-lg text-gray-300 leading-relaxed border border-gray-700">
                            <span className="font-bold text-white">The Embassy</span>, is an elite center co-founded by former professional players José Manuel Calderón and Berni Rodríguez. NBA stars such as Donovan Mitchell, Jaylen Brown, and Karl-Anthony Towns have used its state-of-the-art facilities for their training.
                        </p>
                    </div>
                    <div ref={imagesRef} className={`reveal ${isImagesVisible ? 'visible' : ''} grid grid-cols-2 grid-rows-3 gap-4`} style={{transitionDelay: '200ms'}}>
                        <div className="col-span-2 row-span-1 rounded-lg overflow-hidden shadow-2xl">
                            <img src="https://picsum.photos/800/400?image=835" alt="Venue exterior" className="w-full h-full object-cover"/>
                        </div>
                        <div className="col-span-1 row-span-2 rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://picsum.photos/400/800?image=1078" alt="Basketball hoop detail" className="w-full h-full object-cover"/>
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://picsum.photos/400/400?image=292" alt="Training center court" className="w-full h-full object-cover"/>
                        </div>
                         <div className="col-span-1 row-span-1 rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://picsum.photos/400/400?image=1062" alt="Training center building" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;