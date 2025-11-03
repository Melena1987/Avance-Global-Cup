import React from 'react';
import Head from 'next/head';
import GalleryPage from '../components/GalleryPage';

const Gallery: React.FC = () => {
    return (
        <>
            <Head>
                <title>Official Gallery 2024 | Avance Global Cup</title>
            </Head>
            <GalleryPage />
        </>
    );
};
export default Gallery;
