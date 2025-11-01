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

    const venueImages = [
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_015_400x400.jpg?alt=media&token=2d4244b8-f480-4ff3-adc1-dfc165edaa3a",
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_025_400x400.jpg?alt=media&token=0734f083-4749-4a46-9f88-f6ee7bfd0f53",
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_019_400x400.jpg?alt=media&token=6bf0b512-e239-4863-af3c-3455d7c77f7a",
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036_400x400.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763",
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031_400x400.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092",
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_030_400x400.jpg?alt=media&token=23ced551-732f-4253-b49f-5d07c3fd78d5",
        "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050_400x400.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a"
    ];

    const textRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const isTextVisible = useOnScreen(textRef);
    const isImagesVisible = useOnScreen(imagesRef);

    return (
        <section 
            id="venue" 
            className="relative py-20 overflow-hidden"
            aria-label="Interior view of The Embassy, a modern basketball training facility in Málaga"
        >
             <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_WhatsApp-Image-2021-12-13-at-10.15.51-AM.jpeg?alt=media&token=147a429f-4059-47c3-8b1a-cb8782f922b0')" }}
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>

            <div className="relative container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">The Venue: A Global Basketball Epicenter</h2>

                <div ref={textRef} className={`reveal ${isTextVisible ? 'visible' : ''} max-w-4xl mx-auto`}>
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
                    <a href="https://www.theembassytc.com/" target="_blank" rel="noopener noreferrer" className="block" aria-label="Visit The Embassy website">
                        <div className="bg-[#222a35]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761947263093_Logo_THE_EMBBASSY_BLANCO_SIN_FONDO_400x400.png?alt=media&token=31d65c7b-9097-4fa6-a1b9-5aea3d115ff3" 
                                alt="The Embassy Logo"
                                className="h-10 w-auto mb-4"
                            />
                            <p className="text-gray-300 leading-relaxed">
                                <span className="font-bold text-white">The Embassy</span>, is an elite center co-founded by former professional players José Manuel Calderón and Berni Rodríguez. National teams like USA, Spain, and Germany, along with NBA stars such as Jimmy Butler, Donovan Mitchell, Jaylen Brown, and Karl-Anthony Towns have used its state-of-the-art facilities for their training.
                            </p>
                        </div>
                    </a>
                </div>
                
                <div ref={imagesRef} className={`reveal ${isImagesVisible ? 'visible' : ''} mt-16`} style={{transitionDelay: '200ms'}}>
                    <div className="scrolling-ribbon">
                        <div className="scrolling-ribbon-content">
                            {venueImages.map((src, index) => <img key={`img1-${index}`} src={src} alt={`The Embassy training facility in Málaga, photo ${index + 1}`} className="h-[250px]" />)}
                            {venueImages.map((src, index) => <img key={`img2-${index}`} src={src} alt={`The Embassy training facility in Málaga, photo ${index + 1}`} className="h-[250px]" />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;