import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span className="text-gray-300">{children}</span>
    </li>
);

const Offer: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const isContentVisible = useOnScreen(contentRef);

    return (
        <section 
            id="offer" 
            className="relative py-20 bg-cover bg-center bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761945821047_AVANCE_BASKETBALL_42.jpg?alt=media&token=f9981e01-d2d5-4d21-a9f3-1e5edb341f65')" }}
            aria-label="An elite player dunking a basketball during an Avance event"
        >
            <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
            
            <div className="relative container mx-auto px-6">
                <div 
                    ref={contentRef} 
                    className={`reveal ${isContentVisible ? 'visible' : ''} max-w-4xl mx-auto`}
                >
                    <div className="bg-[#1a202c]/70 backdrop-blur-md p-8 md:p-10 rounded-lg border border-gray-700 shadow-2xl">
                        <h2 className="text-4xl font-extrabold text-white mb-6">What we offer?</h2>
                        <ul className="space-y-3 list-disc list-inside text-lg text-gray-300 mb-10">
                            <li>Elite scholastic teams from the U.S, Europe, Asia and Oceania</li>
                            <li>Exposure to NCAA coaches, professional scouts, and global basketball leaders</li>
                            <li>Networking with executives from multiple industries</li>
                            <li>Cultural immersion in historic Málaga, Spain</li>
                        </ul>
                        
                        <h3 className="text-3xl font-bold text-white mb-6">Benefits to participating teams</h3>
                        <ul className="space-y-4">
                            <CheckListItem>Travel allowance for the team (up to 16 people — 12 players minimum)</CheckListItem>
                            <CheckListItem>Five nights of hotel accommodations (double occupancy)</CheckListItem>
                            <CheckListItem>All-inclusive resort — all meals covered</CheckListItem>
                            <CheckListItem>Ground transportation provided (teams are responsible for airfare)</CheckListItem>
                            <CheckListItem>Access to certified athletic trainers</CheckListItem>
                            <CheckListItem>VIP access to all AVANCE Global Spain sessions & events</CheckListItem>
                            <CheckListItem>Teams must provide international travel and medical insurance</CheckListItem>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;