import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';
import Link from 'next/link';

const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997473781_AVANCE_BASKETBALL_SanDiego_F_12_400x400.jpg?alt=media&token=d37c49cf-cdc9-43f0-bf43-0b36cee6ae77",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997253318_AVANCE_BASKETBALL_SanDiego_D2-91_400x400.jpg?alt=media&token=efd992b0-ef69-4787-ace0-c527a96a7729",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997253318_AVANCE_BASKETBALL_SanDiego_D2-62_400x400.jpg?alt=media&token=a634127c-5d4d-4067-8c61-d181fb63533b",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997253318_AVANCE_BASKETBALL_SanDiego_D2-10_400x400.jpg?alt=media&token=92036f77-b135-48b9-a6d5-750860328e94",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997253318_AVANCE_BASKETBALL_SanDiego_D2-15_400x400.jpg?alt=media&token=78fa7272-e8a2-4c20-805b-cbd4ca13ec08",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997253318_AVANCE_BASKETBALL_SanDiego_D2-74_400x400.jpg?alt=media&token=9006aecb-2f42-4593-9c0e-3040b97a0543",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761997253318_AVANCE_BASKETBALL_SanDiego_D2-56_400x400.jpg?alt=media&token=041b1879-d32c-4c83-ae60-29f868816c7a"
];

const GalleryPreview: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(contentRef, { threshold: 0.1 });

    return (
        <section id="gallery-preview" className="py-20 bg-[#151f28] overflow-hidden">
            <div ref={contentRef} className={`reveal ${isVisible ? 'visible' : ''} container mx-auto px-6 text-center`}>
                <h2 className="text-4xl font-extrabold text-white mb-4">The Last Edition in Images</h2>
                <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                    Relive the best moments of the Avance Global Cup 2024. A showcase of elite talent, intense competition, and unforgettable highlights from San Diego, California.
                </p>

                <div className="scrolling-ribbon mb-12">
                    <div className="scrolling-ribbon-content">
                        {[...galleryImages, ...galleryImages].map((src, index) => (
                            <img 
                                key={`gallery-img-${index}`} 
                                src={src} 
                                alt={`Avance Global Cup 2024 highlight ${index + 1}`} 
                                className="h-[250px] w-[250px] object-cover" 
                            />
                        ))}
                    </div>
                </div>

                <Link
                    href="/gallery2024"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    View Full Gallery
                </Link>
            </div>
        </section>
    );
};

export default GalleryPreview;
