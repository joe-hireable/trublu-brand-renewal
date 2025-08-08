import { useEffect, useState } from 'react';

const AnimatedHouseLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${className} relative`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`${isAnimated ? 'animate-draw-house' : ''}`}
        style={{
          strokeDasharray: isAnimated ? '1000 0' : '0 1000',
          transition: 'all 2s ease-out'
        }}
      >
        {/* House outline */}
        <path
          d="M20 80 L20 50 L50 20 L80 50 L80 80 Z M30 80 L30 60 L70 60 L70 80"
          stroke="url(#houseGradient)"
          strokeWidth="2.5"
          fill="url(#houseFill)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isAnimated ? 'animate-fill-house' : ''}
          style={{
            fillOpacity: isAnimated ? '0.1' : '0'
          }}
        />
        
        {/* Door */}
        <rect
          x="45"
          y="65"
          width="10"
          height="15"
          stroke="url(#houseGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: isAnimated ? '50 0' : '0 50',
            transition: 'all 1s ease-out 1s'
          }}
        />
        
        {/* Window */}
        <rect
          x="60"
          y="45"
          width="8"
          height="8"
          stroke="url(#houseGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: isAnimated ? '32 0' : '0 32',
            transition: 'all 0.8s ease-out 1.5s'
          }}
        />

        <defs>
          <linearGradient id="houseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(211 100% 35%)" />
            <stop offset="32%" stopColor="hsl(194 100% 39%)" />
            <stop offset="100%" stopColor="hsl(174 100% 41%)" />
          </linearGradient>
          <linearGradient id="houseFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(211 100% 35%)" stopOpacity="0.1" />
            <stop offset="32%" stopColor="hsl(194 100% 39%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(174 100% 41%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedHouseLogo;