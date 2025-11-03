import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-b from-[#1a202c] to-[#2d3748] text-gray-200 font-sans">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default MyApp;
