import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Teams from '../components/Teams';
import EventDetails from '../components/EventDetails';
import Venue from '../components/Venue';
import Offer from '../components/Offer';
import GalleryPreview from '../components/GalleryPreview';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Avance Global Basketball Cup</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="description" content="Experience the Avance Global Basketball Cup 2026 in Málaga, Spain. The world's premier international tournament for elite high school and junior basketball clubs. Witness the future of basketball." />
        <meta name="keywords" content="Avance Global Basketball Cup, international basketball tournament, youth basketball, elite high school basketball, Málaga 2026, The Embassy Spain" />
        <link rel="icon" type="image/png" href="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" />
        <link rel="canonical" href="https://www.avanceglobalcup.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avanceglobalcup.com/" />
        <meta property="og:title" content="Avance Global Basketball Cup 2026" />
        <meta property="og:description" content="Experience the Avance Global Basketball Cup 2026 in Málaga, Spain. The world's premier international tournament for elite high school and junior basketball clubs. Witness the future of basketball." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.avanceglobalcup.com/" />
        <meta property="twitter:title" content="Avance Global Basketball Cup 2026" />
        <meta property="twitter:description" content="Experience the Avance Global Basketball Cup 2026 in Málaga, Spain. The world's premier international tournament for elite high school and junior basketball clubs. Witness the future of basketball." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Avance Global Basketball Cup 2026",
              "startDate": "2026-01-29",
              "endDate": "2026-01-31",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "The Embassy",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Fuengirola",
                  "addressRegion": "Málaga",
                  "addressCountry": "ES"
                }
              },
              "image": [
                "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9"
              ],
              "description": "A worldwide competition for high school and junior basketball clubs. An unprecedented event aiming to redefine basketball development by bringing together tomorrow's elite players on a global stage.",
              "organizer": {
                "@type": "Organization",
                "name": "AVANCE Global",
                "url": "https://www.avanceglobalcup.com/"
              },
              "sponsor": {
                "@type": "Organization",
                "name": "The Embassy",
                "url": "https://www.theembassytc.com/"
              },
              "performer": [
                {"@type": "SportsTeam", "name": "Fundación Unicaja"},
                {"@type": "SportsTeam", "name": "NBA Academy Africa"},
                {"@type": "SportsTeam", "name": "Dubai Basketball"},
                {"@type": "SportsTeam", "name": "Explorers"},
                {"@type": "SportsTeam", "name": "Orangeville Institute"},
                {"@type": "SportsTeam", "name": "Veritas Academy"},
                {"@type": "SportsTeam", "name": "AUS Elite"},
                {"@type": "SportsTeam", "name": "Varese Academy"},
                {"@type": "SportsTeam", "name": "The Program"},
                {"@type": "SportsTeam", "name": "Bella Vista"}
              ]
            })
          }}
        />
      </Head>
      <>
        <Hero />
        <Overview />
        <Teams />
        <EventDetails />
        <Venue />
        <Offer />
        <GalleryPreview />
      </>
    </>
  );
};

export default HomePage;
