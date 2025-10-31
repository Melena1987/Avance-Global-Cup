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

  return (
    <section 
        id="home" 
        className="relative min-h-screen flex flex-col text-center text-white overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-12.jpg?alt=media&token=528b931d-8ae2-44b7-af4e-a2cf197a42b9')" }}
    >
      <div className="absolute inset-0 bg-[#1a202c] opacity-70"></div>
      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col container mx-auto px-6 pb-8 pt-24">
        
        {/* Main Centered Content */}
        <div className="flex-grow flex flex-col items-center justify-center py-10">
          <div className="max-w-5xl mx-auto">
              <img 
                  src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761946347121_avance_global_cup_logo.png?alt=media&token=b4d7d75a-dc46-436c-b5c5-81edd0ba6154" 
                  alt="Avance Global Cup Logo" 
                  className="h-20 md:h-24 w-auto mx-auto mb-6"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase mb-3 drop-shadow-lg">
              AVANCE GLOBAL CUP 2026
              </h1>
              <div className="flex justify-center items-center gap-4 mb-10">
                  <span className="text-2xl md:text-3xl text-gray-200 drop-shadow-md">
                    by
                  </span>
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761947263093_Logo_THE_EMBBASSY_BLANCO_SIN_FONDO_400x400.png?alt=media&token=31d65c7b-9097-4fa6-a1b9-5aea3d115ff3" 
                    alt="The Embassy Logo"
                    className="h-10 md:h-12 w-auto"
                  />
              </div>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-md max-w-4xl mx-auto mb-12">
              This is a worldwide competition for high school and junior basketball clubs. It is an unprecedented event that aims to redefine basketball development by bringing together tomorrow's elite players on a global stage.
              </p>

              <div className="inline-block bg-gray-900/30 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-xl">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                      {/* Date */}
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 mr-3 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-md md:text-lg font-semibold text-gray-100">January 29 to 31, 2026</span>
                      </div>
                      <div className="w-px h-8 bg-white/20 hidden md:block"></div>
                      {/* Location */}
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 mr-3 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-md md:text-lg font-semibold text-gray-100">at The Embassy in Fuengirola, Málaga, Spain.</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
        {/* Bottom Team Logos */}
        <div className="w-full max-w-7xl mx-auto py-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 opacity-90">
              {teamLogos.map((logo) => {
                  const isSpecialLogo = logo.name === 'NBA Academy Africa' || logo.name === 'The Program';
                  const containerClass = isSpecialLogo 
                      ? "h-12 md:h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
                      : "h-10 md:h-12 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110";
                  
                  return (
                      <div key={logo.name} className={containerClass}>
                          <img src={logo.url} alt={`${logo.name} logo`} className="h-full w-auto object-contain" />
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