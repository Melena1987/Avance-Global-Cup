import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

interface GalleryPreviewProps {
  navigateTo: (page: string) => void;
}

const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945821047_AVANCE_BASKETBALL_57.jpg?alt=media&token=ac5097fb-5f0f-41fa-a46c-d97770835c3a",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-30.jpg?alt=media&token=a060537d-4372-47a9-96f4-1fd3e0d0cc93",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945821047_AVANCE_BASKETBALL_42.jpg?alt=media&token=f9981e01-d2d5-4d21-a9f3-1e5edb341f65",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761994360612_AVANCE_BASKETBALL_SanDiego_F_2.jpg?alt=media&token=98e66d3d-adb4-4400-bdcc-a26767a9bdd1",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-70.jpg?alt=media&token=a4f8464d-afbb-4d61-9958-b60e9ea269af"
];

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ navigateTo }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(contentRef, { threshold: 0.1 });

    const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigateTo('gallery');
    };

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
                                className="h-[250px] object-cover" 
                            />
                        ))}
                    </div>
                </div>

                <a
                    href="/gallery2024"
                    onClick={handleGalleryClick}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    View Full Gallery
                </a>
            </div>
        </section>
    );
};

export default GalleryPreview;