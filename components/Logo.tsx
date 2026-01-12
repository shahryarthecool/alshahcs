
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon Reconstruction of the Al Shah Logo */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#00A3FF" />
          </linearGradient>
        </defs>
        
        {/* The Building Blocks */}
        <rect x="25" y="40" width="8" height="35" rx="1" fill="url(#logo-grad)" />
        <rect x="36" y="25" width="8" height="50" rx="1" fill="url(#logo-grad)" />
        <rect x="47" y="35" width="8" height="40" rx="1" fill="url(#logo-grad)" />
        
        {/* The Circuit Nodes (Left) */}
        <circle cx="10" cy="45" r="2" fill="#0052CC" />
        <path d="M10 45 L25 45" stroke="#0052CC" strokeWidth="1" />
        <circle cx="12" cy="55" r="2" fill="#0052CC" />
        <path d="M12 55 L25 55" stroke="#0052CC" strokeWidth="1" />
        <circle cx="15" cy="65" r="2" fill="#0052CC" />
        <path d="M15 65 L25 65" stroke="#0052CC" strokeWidth="1" />
        
        {/* The Swoosh */}
        <path 
          d="M20 75 Q45 95 80 50" 
          stroke="#0052CC" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M22 82 Q45 100 85 55" 
          stroke="#00A3FF" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.6"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-2xl font-black tracking-tighter leading-none ${light ? 'text-white' : 'text-[#0052CC]'}`}>
            AL SHAH
          </span>
          <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${light ? 'text-blue-200' : 'text-gray-500'}`}>
            Complete Solutions
          </span>
          <div className="h-[1px] w-full bg-gray-200 my-0.5"></div>
          <span className={`text-[7px] font-medium italic ${light ? 'text-blue-300' : 'text-gray-400'}`}>
            Technical & ELV Services
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
