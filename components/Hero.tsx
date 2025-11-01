import React from 'react';

const Hero: React.FC = () => {
    const teamLogos = [
        { name: 'Fundación Unicaja', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_unicaja_400x400.png?alt=media&token=f9b311d0-92c6-4ced-abd7-77dd7a7b7d3a' },
        { name: 'NBA Academy Africa', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_nba_adcademy_400x400.png?alt=media&token=82ba5d7b-4438-4f7a-aa7b-515bff9b055b' },
        { name: 'Dubai Basketball', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_dubai_400x400.png?alt=media&token=265d6df0-2734-409d-806f-1439f4f0acac' },
        { name: 'Bella Vista', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_bella_vista_400x400.png?alt=media&token=7786bc1d-a943-4c35-a1c8-b5682f07bfda' },
        { name: 'The Program', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_the_program_400x400.png?alt=media&token=a16e7618-ff6d-4c19-9cfc-bb9d6a092c58' },
        { name: 'Varese', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_varese_400x400.png?alt=media&token=467519c9-50df-4582-b6f4-0202f5aa5ba9' },
        { name: 'Explorers', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_los_explorers_400x400.png?alt=media&token=eb7ff9b3-6e8c-4ddd-b173-01b60eddaaa4' },
        { name: 'Orangeville Institute', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_oso_400x400.png?alt=media&token=7048c2b0-d0f1-485b-8e9d-367ceb8a3cf5' },
        { name: 'Veritas Academy', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_v-ball_400x400.png?alt=media&token=8787e9fc-c7f5-487e-ab06-f6373cb60781' },
        { name: 'AUS Elite', url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946892702_aus_elite_400x400.png?alt=media&token=9f2b6a5c-ded2-448d-adbb-caa2fc58a05c' },
    ];
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Avance%20Global%20Basketball%20Cup%202026&dates=20260129T090000/20260131T210000&location=The%20Embassy%20in%20Fuengirola%2C%20M%C3%A1laga%2C%20Spain&details=Join%20the%20Avance%20Global%20Basketball%20Cup%202026%20in%20M%C3%A1laga%2C%20Spain!%20An%20elite%20international%20tournament%20for%20high%20school%20and%20junior%20clubs.%20More%20info%20at%20https%3A%2F%2Fwww.avanceglobalcup.com%2F`;
    const googleMapsUrl = `https://maps.app.goo.gl/VrtcZp7iWtcPDcfh7`;

  return (
    <section 
        id="home" 
        className="relative grid text-white"
    >
      <div 
        className="col-start-1 row-start-1 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9')" }}
      ></div>
      <div className="col-start-1 row-start-1 w-full h-full bg-black/60"></div>
      
      <div className="relative z-10 col-start-1 row-start-1 container mx-auto px-6 pt-40 pb-20">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column: Main Info */}
            <div className="text-center md:text-left">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" 
                    alt="Avance Global Cup Logo" 
                    className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase mb-3 drop-shadow-lg">
                AVANCE GLOBAL CUP 2026
                </h1>
                <div className="flex justify-center md:justify-start items-center gap-4 mb-6">
                    <span className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
                      by
                    </span>
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761947263093_Logo_THE_EMBBASSY_BLANCO_SIN_FONDO_400x400.png?alt=media&token=31d65c7b-9097-4fa6-a1b9-5aea3d115ff3" 
                      alt="The Embassy Logo"
                      className="h-8 md:h-10 w-auto"
                    />
                </div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed drop-shadow-md max-w-xl mx-auto md:mx-0">
                    This is a worldwide competition for high school and junior basketball clubs. It is an unprecedented event that aims to redefine basketball development by bringing together tomorrow's elite players on a global stage.
                </p>
            </div>
            {/* Right Column: Event Details Card */}
            <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md bg-gray-900/30 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8 shadow-xl space-y-4">
                    <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" aria-label="Add to Google Calendar" className="block transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-400">Date</p>
                                <span className="text-lg font-semibold text-gray-100">January 29 to 31, 2026</span>
                            </div>
                        </div>
                    </a>
                    <div className="w-full h-px bg-white/20"></div>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="View location on Google Maps" className="block transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <span className="text-lg font-semibold text-gray-100">The Embassy in Fuengirola, Málaga, Spain</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        
        {/* Scrolling Logo Ribbon */}
        <div className="scrolling-ribbon">
            <div className="scrolling-ribbon-content">
              {[...teamLogos, ...teamLogos].map((logo, index) => {
                  const isSpecialLogo = logo.name === 'NBA Academy Africa' || logo.name === 'The Program';
                  return (
                      <div key={`${logo.name}-${index}`} title={logo.name} className="flex-shrink-0 mx-6 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110">
                          <img 
                            src={logo.url} 
                            alt={`${logo.name} logo`} 
                            className={`w-auto object-contain ${isSpecialLogo ? 'h-16' : 'h-12'} opacity-80 hover:opacity-100 transition-opacity`}
                          />
                      </div>
                  );
              })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;