import React, { useRef } from 'react';
import useOnScreen from './useOnScreen';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span className="text-gray-300">{children}</span>
    </li>
);

const Offer: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const isTextVisible = useOnScreen(textRef);
    const isImageVisible = useOnScreen(imageRef);

    return (
        <section id="offer" className="py-20 bg-[#222a35] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div ref={textRef} className={`reveal ${isTextVisible ? 'visible' : ''}`}>
                        <h2 className="text-4xl font-extrabold text-white mb-6">What we offer?</h2>
                        <ul className="space-y-3 list-disc list-inside text-lg text-gray-300 mb-10">
                            <li>Elite scholastic teams from the U.S, Europe, Asia and Oceania</li>
                            <li>Exposure to NCAA coaches, professional scouts, and global basketball leaders</li>
                            <li>Networking with executives from multiple industries</li>
                            <li>Cultural immersion in historic Málaga, Spain</li>
                        </ul>
                        
                        <h3 className="text-3xl font-bold text-white mb-6">Benefits to participating teams</h3>
                        <ul className="space-y-4">
                            <CheckListItem>Travel allowance for the team (up to 18 people — 12 players minimum)</CheckListItem>
                            <CheckListItem>Five nights of hotel accommodations (double occupancy)</CheckListItem>
                            <CheckListItem>All-inclusive resort — all meals covered</CheckListItem>
                            <CheckListItem>Ground transportation provided (teams are responsible for airfare)</CheckListItem>
                            <CheckListItem>Access to certified athletic trainers</CheckListItem>
                            <CheckListItem>VIP access to all AVANCE Global Spain sessions & events</CheckListItem>
                            <CheckListItem>Teams must provide international travel and medical insurance</CheckListItem>
                        </ul>
                    </div>
                    <div ref={imageRef} className={`reveal ${isImageVisible ? 'visible' : ''} w-full h-full min-h-[500px] rounded-lg overflow-hidden shadow-2xl`} style={{transitionDelay: '200ms'}}>
                        <img src="https://picsum.photos/600/800?image=106" alt="Basketball player in action" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;