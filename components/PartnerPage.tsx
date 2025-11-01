import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';
import Vision from './Vision';
import Impact from './Impact';

interface PartnerPageProps {
  navigateTo: (page: string) => void;
}

const FeatureCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; isVisible: boolean, delay: number }> = ({ title, children, icon, isVisible, delay }) => (
    <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="bg-[#222a35]/60 backdrop-blur-md p-8 rounded-lg border border-gray-700 shadow-xl h-full transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
                {children}
            </p>
        </div>
    </div>
);

const SponsorshipListItem: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        <div>
            <span className="font-bold text-white">{title}</span>
            <p className="text-gray-400">{description}</p>
        </div>
    </li>
);

const PartnerPage: React.FC<PartnerPageProps> = ({ navigateTo }) => {
    const whyPartnerRef = useRef<HTMLDivElement>(null);
    const opportunitiesRef = useRef<HTMLDivElement>(null);
    const isWhyPartnerVisible = useOnScreen(whyPartnerRef);
    const isOpportunitiesVisible = useOnScreen(opportunitiesRef);
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
        e.preventDefault();
        navigateTo(page);
    };

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            navigateTo('main');
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };
  
    return (
    <>
        <section 
            className="relative text-white bg-cover bg-center bg-fixed pt-52 pb-28"
            style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945821047_AVANCE_BASKETBALL_67.jpg?alt=media&token=86799e0c-b8f5-422e-9e70-eb6bfacb316c')" }}
            aria-label="Basketball players planning a strategy during a timeout"
        >
            <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase drop-shadow-lg">
                    Be a Partner
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Join us in shaping the future of global basketball and connect your brand with an elite, international audience.
                </p>
                <div className="mt-10">
                    <a 
                        href="/#contact"
                        onClick={handleContactClick}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Contact Us for Partnership
                    </a>
                </div>
            </div>
        </section>

        <section 
            id="why-partner"
            className="relative py-20 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761994360612_AVANCE_BASKETBALL_SanDiego_F_2.jpg?alt=media&token=98e66d3d-adb4-4400-bdcc-a26767a9bdd1')" }}
            aria-label="View from behind the hoop of a basketball game in progress"
        >
             <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
            <div className="relative z-10 container mx-auto px-6">
                <a href="/" onClick={(e) => handleNavClick(e, 'main')} className="mb-8 text-blue-400 hover:text-blue-300 transition-colors">
                    &larr; Back to main page
                </a>
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">Why Partner With AVANCE GLOBAL CUP?</h2>
                <div ref={whyPartnerRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <FeatureCard title="Global Brand Visibility" isVisible={isWhyPartnerVisible} delay={0} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.905 11A9 9 0 005.065 19h13.87A9 9 0 0016.095 11m-8.19 0a9 9 0 0110.38 0M12 11V3m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>}>
                        Hosted in Málaga, Spain — a world-class tourist and cultural hub. Multi-continent media coverage with live streaming to thousands worldwide. Premium on-site branding in a venue used by NBA and international teams.
                    </FeatureCard>
                    <FeatureCard title="Targeted Market Access" isVisible={isWhyPartnerVisible} delay={150} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}>
                        Direct engagement with sports decision-makers, athletes, and coaches. Access to multicultural and next-generation consumer markets via AVANCE’s global network.
                    </FeatureCard>
                    <FeatureCard title="Corporate Social Responsibility" isVisible={isWhyPartnerVisible} delay={300} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}>
                        Support a 360° athlete development model blending competition, education, and cultural exchange. Empower the next generation through sport, mentorship, and leadership opportunities.
                    </FeatureCard>
                    <FeatureCard title="VIP Networking & Hospitality" isVisible={isWhyPartnerVisible} delay={450} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
                        Exclusive access to networking with executives, investors, and thought leaders. Curated hospitality packages for clients and partners in an elite international setting.
                    </FeatureCard>
                </div>
            </div>
        </section>

        <Vision />
        <Impact />

        <section 
            id="sponsorship-opportunities" 
            className="relative py-20 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945946387_AVANCE_BASKETBALL_SanDiego_D2-70.jpg?alt=media&token=a4f8464d-afbb-4d61-9958-b60e9ea269af')" }}
            aria-label="Team celebrating a victory at the Avance Global Basketball Cup"
        >
            <div className="absolute inset-0 bg-[#1a202c]/80" aria-hidden="true"></div>
             <div className="relative container mx-auto px-6">
                <div ref={opportunitiesRef} className={`reveal ${isOpportunitiesVisible ? 'visible' : ''} max-w-4xl mx-auto`}>
                    <div className="bg-[#1a202c]/70 backdrop-blur-md p-8 md:p-10 rounded-lg border border-gray-700 shadow-2xl">
                        <h2 className="text-4xl font-extrabold text-white mb-6">Sponsorship Opportunities</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            The AVANCE Global Cup is a premier platform for brands to connect with sports fans, industry leaders, and decision-makers worldwide. As part of the AVANCE Global Conference, sponsors gain year-round value — with exposure during the tournament and across three days of panels, keynotes, and networking with executives, investors, athletes, and media.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-10">
                            Our sponsorship packages are designed to maximize brand visibility, influence, and engagement, offering:
                        </p>
                        
                        <ul className="space-y-6">
                            <SponsorshipListItem 
                                title="Title & Presenting Sponsorships"
                                description="Exclusive naming rights and top-tier recognition as the event’s leading partner." 
                            />
                            <SponsorshipListItem 
                                title="Court & Venue Branding"
                                description="High-impact visibility in prime locations for both live audiences and broadcast viewers." 
                            />
                            <SponsorshipListItem 
                                title="Digital Integration"
                                description="Extended reach through live-stream features, social media activations, and branded content." 
                            />
                            <SponsorshipListItem 
                                title="Athlete & Team Partnerships"
                                description="Authentic storytelling through alignment with elite players and teams." 
                            />
                            <SponsorshipListItem 
                                title="VIP Event Sponsorship"
                                description="Premium hospitality and exclusive networking with global industry leaders." 
                            />
                            <SponsorshipListItem 
                                title="Conference Participation"
                                description="Position your brand as a thought leader through panels, workshops, and product activations at the AVANCE Global Conference." 
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default PartnerPage;