import React from 'react';

interface RingMotifProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const RingMotif: React.FC<RingMotifProps> = ({
  className = '',
  size = 600,
  opacity = 0.15,
}) => {
  return (
    <div
      className={`pointer-events-none absolute select-none flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {/* Subtle radial center bloom */}
        <circle cx="300" cy="300" r="160" fill="url(#blueCenterGlow)" />

        {/* Concentric rings mirroring the ONB motif */}
        <circle cx="300" cy="300" r="280" stroke="#3B68A8" strokeWidth="1" strokeDasharray="6 8" />
        <circle cx="300" cy="300" r="230" stroke="#3B68A8" strokeWidth="2.5" />
        <circle cx="300" cy="300" r="180" stroke="#3B68A8" strokeWidth="1" opacity="0.6" />
        <circle cx="300" cy="300" r="120" stroke="#3B68A8" strokeWidth="1.5" strokeDasharray="3 5" />
        <circle cx="300" cy="300" r="70" stroke="#3B68A8" strokeWidth="2" opacity="0.8" />

        {/* Subtle crosshair vertical split cuts reflecting the logo */}
        <line x1="300" y1="10" x2="300" y2="40" stroke="#3B68A8" strokeWidth="2" />
        <line x1="300" y1="560" x2="300" y2="590" stroke="#3B68A8" strokeWidth="2" />
        <line x1="10" y1="300" x2="40" y2="300" stroke="#3B68A8" strokeWidth="2" />
        <line x1="560" y1="300" x2="590" y2="300" stroke="#3B68A8" strokeWidth="2" />

        <defs>
          <radialGradient
            id="blueCenterGlow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(300 300) rotate(90) scale(160)"
          >
            <stop stopColor="#3B68A8" stopOpacity="0.12" />
            <stop offset="1" stopColor="#3B68A8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
