import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  isVisible: boolean;
}

const easeOutCubic = (t: number): number => (--t) * t * t + 1;

const Counter: React.FC<CounterProps> = ({ end, duration = 1500, isVisible }) => {
  const [count, setCount] = useState(0);
  // FIX: Explicitly initialize useRef with null. The `useRef<number>()` overload can cause an "Expected 1 arguments, but got 0" error in some environments.
  const animationFrameId = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentCount = Math.floor(easedProgress * end);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      animationFrameId.current = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
};

export default Counter;
