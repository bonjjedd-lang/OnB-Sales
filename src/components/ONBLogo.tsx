import React from 'react';

interface ONBLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'full' | 'mark' | 'badge' | 'lockup-horizontal';
}

export const ONBLogo: React.FC<ONBLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  variant = 'badge',
}) => {
  // Dimensions map
  const scale = {
    sm: 0.65,
    md: 0.9,
    lg: 1.25,
    hero: 1.8,
  }[size];

  const primaryBlue = '#3B68A8'; // Exact slate-cobalt blue tone from uploaded official logo
  const blueShadow = '#C2D5EE'; // Dimension highlight behind B

  // Horizontal compact lockup for navigation bars
  if (variant === 'lockup-horizontal') {
    const h = size === 'sm' ? 38 : size === 'md' ? 44 : 52;
    return (
      <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
        {/* The Exact Official Emblem scaled */}
        <svg
          width={h}
          height={h}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <rect width="200" height="200" rx="32" fill="#000000" />
          <rect width="200" height="200" rx="32" stroke="#1E293B" strokeWidth="1.5" />
          
          {/* Circular Blue Ring with Top & Bottom Splits */}
          <path
            d="M 102 34 A 66 66 0 0 1 166 100 A 66 66 0 0 1 102 166"
            stroke={primaryBlue}
            strokeWidth="10"
            strokeLinecap="square"
            fill="none"
          />
          <path
            d="M 98 34 A 66 66 0 0 0 34 100 A 66 66 0 0 0 98 166"
            stroke={primaryBlue}
            strokeWidth="10"
            strokeLinecap="square"
            fill="none"
          />

          {/* The "N" in slate-blue */}
          <path d="M 84 60 L 84 166 L 94 166 L 94 84 Z" fill={primaryBlue} />
          <path d="M 84 60 L 122 142 L 122 80 L 112 80 L 84 60 Z" fill={primaryBlue} />
          <path d="M 112 34 L 112 142 L 122 142 L 122 34 Z" fill={primaryBlue} />

          {/* The "O" */}
          <ellipse cx="68" cy="102" rx="27" ry="29" fill="none" stroke="#FFFFFF" strokeWidth="15" />

          {/* The "B" */}
          <path
            d="M 124 66 L 145 66 C 154 66 160 72 160 81 C 160 87 156 91 151 94 C 158 97 163 103 163 113 C 163 125 154 133 141 133 L 124 133 Z"
            fill={blueShadow}
            opacity="0.85"
            transform="translate(3, 0)"
          />
          <path
            d="M 124 66 L 145 66 C 154 66 160 72 160 81 C 160 87 156 91 151 94 C 158 97 163 103 163 113 C 163 125 154 133 141 133 L 124 133 Z"
            fill="#FFFFFF"
          />
          <path d="M 134 76 L 142 76 C 146 76 149 78 149 82 C 149 86 146 88 142 88 L 134 88 Z" fill="#000000" />
          <path d="M 134 101 L 144 101 C 149 101 152 103 152 109 C 152 115 149 117 144 117 L 134 117 Z" fill="#000000" />
        </svg>

        {/* Wordmark Lockup */}
        <div className="flex flex-col text-left justify-center">
          <div className="font-black tracking-wider leading-none text-white text-lg">
            ONB
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2.5 h-[1.5px] bg-[#3B68A8]" />
              <span className="font-bold text-[8.5px] tracking-[0.24em] text-[#CBD5E1] uppercase">
                SALES FIRM
              </span>
              <span className="w-2.5 h-[1.5px] bg-[#3B68A8]" />
            </div>
          )}
        </div>
      </div>
    );
  }
  if (variant === 'mark') {
    const width = 100 * scale;
    const height = 100 * scale;
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block select-none ${className}`}
        aria-label="ONB Logo Mark"
      >
        {/* Background plate */}
        <rect width="200" height="200" rx="36" fill="#000000" />
        <rect width="200" height="200" rx="36" stroke="#1E293B" strokeWidth="1.5" />

        {/* Outer Circular Ring with Top and Bottom Split Cuts */}
        {/* Top-Right Arc */}
        <path
          d="M 102 30 A 70 70 0 0 1 170 100 A 70 70 0 0 1 102 170"
          stroke={primaryBlue}
          strokeWidth="11"
          strokeLinecap="square"
          fill="none"
        />
        {/* Top-Left Arc */}
        <path
          d="M 98 30 A 70 70 0 0 0 30 100 A 70 70 0 0 0 98 170"
          stroke={primaryBlue}
          strokeWidth="11"
          strokeLinecap="square"
          fill="none"
        />

        {/* The "N" in exact blue tone matching the ring */}
        <g>
          {/* Left vertical stem going down to the ring */}
          <path d="M 83 58 L 83 170 L 94 170 L 94 82 Z" fill={primaryBlue} />
          {/* Diagonal slash of N */}
          <path d="M 83 58 L 117 142 L 117 76 L 106 76 L 83 58 Z" fill={primaryBlue} />
          {/* Right vertical stem going up to the ring */}
          <path d="M 106 30 L 106 142 L 117 142 L 117 30 Z" fill={primaryBlue} />
        </g>

        {/* The "O" in bold white */}
        <ellipse cx="68" cy="100" rx="27" ry="29" fill="none" stroke="#FFFFFF" strokeWidth="15" />

        {/* The "B" with subtle 3D/light blue layer behind it */}
        {/* Back dimensional layer */}
        <path
          d="M 124 64 L 144 64 C 153 64 159 69 159 78 C 159 84 155 88 150 91 C 157 94 162 100 162 108 C 162 119 154 126 142 126 L 124 126 Z"
          fill={blueShadow}
          opacity="0.8"
          transform="translate(3, 0)"
        />
        {/* Front White B */}
        <path
          d="M 120 64 L 142 64 C 151 64 157 69 157 78 C 157 84 153 88 147 91 C 154 94 159 100 159 108 C 159 119 151 126 139 126 L 120 126 Z"
          fill="#FFFFFF"
        />
        {/* Cutouts for B */}
        <path
          d="M 131 73 L 140 73 C 145 73 148 75 148 79 C 148 83 145 85 140 85 L 131 85 Z"
          fill="#000000"
        />
        <path
          d="M 131 98 L 141 98 C 147 98 150 100 150 105 C 150 110 146 112 140 112 L 131 112 Z"
          fill="#000000"
        />
      </svg>
    );
  }

  // Full Badge / Standalone Lockup (Exact match to uploaded 1.png)
  const baseW = 240 * scale;
  const baseH = 240 * scale;

  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none group transition-all duration-300 ${className}`}
      style={{ width: baseW, height: baseH }}
    >
      <svg
        viewBox="0 0 300 300"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
        aria-label="ONB Sales Firm Official Logo"
      >
        {/* Deep Black Background with crisp border */}
        <rect width="300" height="300" rx="40" fill="#000000" />
        <rect width="300" height="300" rx="40" stroke="#161E2E" strokeWidth="1.5" />

        {/* Subtle Watermark in background matching the authentic 1.png */}
        <g opacity="0.06">
          <circle cx="150" cy="130" r="105" stroke="#FFFFFF" strokeWidth="6" />
          <text
            x="150"
            y="145"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="90"
            letterSpacing="6"
          >
            ONB
          </text>
        </g>

        {/* MAIN EMBLEM GROUP */}
        <g transform="translate(150, 130)">
          {/* The Circular Blue Ring with Top & Bottom Splits (Radius ~ 66px, Stroke ~ 10px) */}
          {/* Top-Right Arc */}
          <path
            d="M 2 -66 A 66 66 0 0 1 66 0 A 66 66 0 0 1 2 66"
            stroke={primaryBlue}
            strokeWidth="10"
            strokeLinecap="square"
            fill="none"
          />
          {/* Top-Left Arc */}
          <path
            d="M -2 -66 A 66 66 0 0 0 -66 0 A 66 66 0 0 0 -2 66"
            stroke={primaryBlue}
            strokeWidth="10"
            strokeLinecap="square"
            fill="none"
          />

          {/* THE "N" IN SLATE-BLUE (#3B68A8) */}
          {/* Left vertical stem extending downwards to the circle boundary */}
          <path
            d="M -16 -40 L -16 66 L -6 66 L -6 -16 Z"
            fill={primaryBlue}
          />
          {/* Diagonal cut of N */}
          <path
            d="M -16 -40 L 22 42 L 22 -20 L 12 -20 L -16 -40 Z"
            fill={primaryBlue}
          />
          {/* Right vertical stem extending upwards to the circle boundary */}
          <path
            d="M 12 -66 L 12 42 L 22 42 L 22 -66 Z"
            fill={primaryBlue}
          />

          {/* THE "O" IN PURE WHITE */}
          {/* Bold circular geometric letterform overlapping left side of N and Ring */}
          <ellipse
            cx="-32"
            cy="2"
            rx="27"
            ry="29"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="15"
          />

          {/* THE "B" IN PURE WHITE WITH LIGHT-BLUE SHADOW */}
          {/* Dimension shadow offset to the right */}
          <path
            d="M 28 -34 L 49 -34 C 58 -34 65 -28 65 -18 C 65 -12 61 -8 56 -5 C 63 -2 69 4 69 14 C 69 26 60 34 47 34 L 28 34 Z"
            fill={blueShadow}
            opacity="0.85"
            transform="translate(4, 0)"
          />
          {/* Front Pure White B */}
          <path
            d="M 28 -34 L 49 -34 C 58 -34 65 -28 65 -18 C 65 -12 61 -8 56 -5 C 63 -2 69 4 69 14 C 69 26 60 34 47 34 L 28 34 Z"
            fill="#FFFFFF"
          />
          {/* Top hole in B */}
          <path
            d="M 39 -24 L 47 -24 C 52 -24 55 -21 55 -17 C 55 -13 52 -10 47 -10 L 39 -10 Z"
            fill="#000000"
          />
          {/* Bottom hole in B */}
          <path
            d="M 39 4 L 49 4 C 55 4 59 7 59 13 C 59 19 55 22 49 22 L 39 22 Z"
            fill="#000000"
          />
        </g>

        {/* SUBTITLE: — SALES FIRM — */}
        {showSubtitle && (
          <g transform="translate(150, 235)">
            {/* Left Accent Dash in #3B68A8 */}
            <line x1="-106" y1="-5" x2="-74" y2="-5" stroke={primaryBlue} strokeWidth="3" strokeLinecap="round" />

            {/* "SALES FIRM" in wide-spaced white typography */}
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="700"
              fontSize="14.5"
              letterSpacing="6.5"
            >
              SALES FIRM
            </text>

            {/* Right Accent Dash in #3B68A8 */}
            <line x1="74" y1="-5" x2="106" y2="-5" stroke={primaryBlue} strokeWidth="3" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};
