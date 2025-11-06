import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        // Set the event date to January 29, 2026, 9:00 AM local time
        const eventDate = new Date('2026-01-29T09:00:00').getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const addLeadingZero = (num: number) => {
        return num < 10 ? `0${num}` : num;
    };

    const timeIsUp = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    if (timeIsUp) {
        return null; // Or you can return a message like <p>The event has started!</p>
    }

    return (
        <div className="flex justify-center md:justify-start space-x-4 text-xs mt-2 text-gray-500 w-full" aria-label="Countdown to event">
            <div className="text-center w-12">
                <span className="font-semibold text-base text-gray-300 tabular-nums">{timeLeft.days}</span>
                <p>Days</p>
            </div>
            <div className="text-center w-12">
                <span className="font-semibold text-base text-gray-300 tabular-nums">{addLeadingZero(timeLeft.hours)}</span>
                <p>Hours</p>
            </div>
            <div className="text-center w-12">
                <span className="font-semibold text-base text-gray-300 tabular-nums">{addLeadingZero(timeLeft.minutes)}</span>
                <p>Mins</p>
            </div>
            <div className="text-center w-12">
                <span className="font-semibold text-base text-gray-300 tabular-nums">{addLeadingZero(timeLeft.seconds)}</span>
                <p>Secs</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
