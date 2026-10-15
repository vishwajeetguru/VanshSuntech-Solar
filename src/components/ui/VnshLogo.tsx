import React from 'react';

interface VnshLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  inverted?: boolean;
}

export const VnshLogo: React.FC<VnshLogoProps> = ({
  className = '',
  variant = 'horizontal',
  inverted = false,
}) => {
  // If mark-only (sun + dual panels)
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 400 280"
        className={`w-auto select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="VNSH SunTech Symbol"
        role="img"
      >
        <defs>
          <linearGradient id="sunGradient" x1="200" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="panelGradientLeft" x1="140" y1="120" x2="190" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="panelGradientRight" x1="260" y1="120" x2="210" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>

        {/* 1. Radiating Sun Rays */}
        <g fill="#F59E0B">
          {/* Central top ray */}
          <polygon points="200,20 205,90 195,90" />
          {/* Upper symmetrical rays */}
          <polygon points="230,26 218,94 209,92" />
          <polygon points="170,26 191,92 182,94" />
          <polygon points="262,44 233,103 224,98" />
          <polygon points="138,44 176,98 167,103" />
          <polygon points="292,72 245,116 237,109" />
          <polygon points="108,72 163,109 155,116" />
          <polygon points="314,108 253,132 247,123" />
          <polygon points="86,108 153,123 147,132" />
          <polygon points="328,148 256,150 252,140" />
          <polygon points="72,148 148,140 144,150" />
          <polygon points="322,188 254,166 250,158" />
          <polygon points="78,188 150,158 146,166" />
        </g>

        {/* 2. Golden Sun Core */}
        <circle cx="200" cy="145" r="56" fill="url(#sunGradient)" />

        {/* 3. Dual Angled Solar Photovoltaic Panels in Perspective */}
        {/* Left Panel */}
        <g>
          {/* Panel Base & Outer Dark Blue Frame */}
          <polygon points="194,124 108,136 78,226 182,238" fill="#0B2545" stroke="#0B2545" strokeWidth="4" strokeLinejoin="round" />
          {/* Panel Solar Surface */}
          <polygon points="192,126 110,138 82,224 180,236" fill="url(#panelGradientLeft)" />

          {/* Grid lines (Solar Cell matrix 4 rows x 3 cols in perspective) */}
          {/* Vertical cell lines */}
          <line x1="165" y1="130" x2="148" y2="232" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          <line x1="138" y1="134" x2="114" y2="228" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          {/* Horizontal cell lines */}
          <line x1="190" y1="154" x2="103" y2="162" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          <line x1="186" y1="182" x2="95" y2="188" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          <line x1="183" y1="210" x2="88" y2="212" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />

          {/* Cell reflections */}
          <polygon points="190,128 138,135 118,185 186,180" fill="#60A5FA" opacity="0.25" />
        </g>

        {/* Right Panel */}
        <g>
          {/* Panel Base & Outer Dark Blue Frame */}
          <polygon points="206,124 292,136 322,226 218,238" fill="#0B2545" stroke="#0B2545" strokeWidth="4" strokeLinejoin="round" />
          {/* Panel Solar Surface */}
          <polygon points="208,126 290,138 318,224 220,236" fill="url(#panelGradientRight)" />

          {/* Grid lines */}
          {/* Vertical cell lines */}
          <line x1="235" y1="130" x2="252" y2="232" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          <line x1="262" y1="134" x2="286" y2="228" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          {/* Horizontal cell lines */}
          <line x1="210" y1="154" x2="297" y2="162" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          <line x1="214" y1="182" x2="305" y2="188" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />
          <line x1="217" y1="210" x2="312" y2="212" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />

          {/* Cell reflections */}
          <polygon points="210,128 262,135 282,185 214,180" fill="#93C5FD" opacity="0.2" />
        </g>
      </svg>
    );
  }

  // Horizontal variant (Ideal for Top Navigation Bar)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Emblem */}
        <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 400 280" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hSunGrad" x1="200" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="hPanelLeft" x1="140" y1="120" x2="190" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="hPanelRight" x1="260" y1="120" x2="210" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>

            {/* Sun Rays */}
            <g fill="#F59E0B">
              <polygon points="200,20 205,90 195,90" />
              <polygon points="230,26 218,94 209,92" />
              <polygon points="170,26 191,92 182,94" />
              <polygon points="262,44 233,103 224,98" />
              <polygon points="138,44 176,98 167,103" />
              <polygon points="292,72 245,116 237,109" />
              <polygon points="108,72 163,109 155,116" />
              <polygon points="314,108 253,132 247,123" />
              <polygon points="86,108 153,123 147,132" />
              <polygon points="328,148 256,150 252,140" />
              <polygon points="72,148 148,140 144,150" />
            </g>

            <circle cx="200" cy="145" r="56" fill="url(#hSunGrad)" />

            {/* Left Panel */}
            <polygon points="194,124 108,136 78,226 182,238" fill="#0B2545" stroke="#0B2545" strokeWidth="4" />
            <polygon points="192,126 110,138 82,224 180,236" fill="url(#hPanelLeft)" />
            <line x1="165" y1="130" x2="148" y2="232" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="138" y1="134" x2="114" y2="228" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="190" y1="154" x2="103" y2="162" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="186" y1="182" x2="95" y2="188" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="183" y1="210" x2="88" y2="212" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

            {/* Right Panel */}
            <polygon points="206,124 292,136 322,226 218,238" fill="#0B2545" stroke="#0B2545" strokeWidth="4" />
            <polygon points="208,126 290,138 318,224 220,236" fill="url(#hPanelRight)" />
            <line x1="235" y1="130" x2="252" y2="232" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="262" y1="134" x2="286" y2="228" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="210" y1="154" x2="297" y2="162" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="214" y1="182" x2="305" y2="188" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="217" y1="210" x2="312" y2="212" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          </svg>
        </div>

        {/* Wordmark and Tagline */}
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-tight text-xl sm:text-2xl uppercase ${
              inverted ? 'text-white' : 'text-[#0B2545]'
            }`}
          >
            VNSH <span className="text-[#1557A6]">SUNTECH</span>
          </span>
          <span
            className="text-[6.5px] sm:text-[7.5px] font-bold tracking-[0.16em] text-[#E59700] uppercase mt-0.5"
          >
            YOUR ROOF, YOUR POWER, YOUR SAVING
          </span>
        </div>
      </div>
    );
  }

  // Full stacked variant (Emblem on top, text below)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <div className="w-24 h-20 mb-2">
        <svg viewBox="0 0 400 280" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fSunGrad" x1="200" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="fPanelLeft" x1="140" y1="120" x2="190" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="fPanelRight" x1="260" y1="120" x2="210" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>

          {/* Sun Rays */}
          <g fill="#F59E0B">
            <polygon points="200,20 205,90 195,90" />
            <polygon points="230,26 218,94 209,92" />
            <polygon points="170,26 191,92 182,94" />
            <polygon points="262,44 233,103 224,98" />
            <polygon points="138,44 176,98 167,103" />
            <polygon points="292,72 245,116 237,109" />
            <polygon points="108,72 163,109 155,116" />
            <polygon points="314,108 253,132 247,123" />
            <polygon points="86,108 153,123 147,132" />
            <polygon points="328,148 256,150 252,140" />
            <polygon points="72,148 148,140 144,150" />
            <polygon points="322,188 254,166 250,158" />
            <polygon points="78,188 150,158 146,166" />
          </g>

          <circle cx="200" cy="145" r="56" fill="url(#fSunGrad)" />

          {/* Left Panel */}
          <polygon points="194,124 108,136 78,226 182,238" fill="#0B2545" stroke="#0B2545" strokeWidth="4" />
          <polygon points="192,126 110,138 82,224 180,236" fill="url(#fPanelLeft)" />
          <line x1="165" y1="130" x2="148" y2="232" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="138" y1="134" x2="114" y2="228" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="190" y1="154" x2="103" y2="162" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="186" y1="182" x2="95" y2="188" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="183" y1="210" x2="88" y2="212" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

          {/* Right Panel */}
          <polygon points="206,124 292,136 322,226 218,238" fill="#0B2545" stroke="#0B2545" strokeWidth="4" />
          <polygon points="208,126 290,138 318,224 220,236" fill="url(#fPanelRight)" />
          <line x1="235" y1="130" x2="252" y2="232" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="262" y1="134" x2="286" y2="228" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="210" y1="154" x2="297" y2="162" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="214" y1="182" x2="305" y2="188" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="217" y1="210" x2="312" y2="212" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
        </svg>
      </div>

      <span
        className={`font-black tracking-tight text-2xl uppercase ${
          inverted ? 'text-white' : 'text-[#0B2545]'
        }`}
      >
        VNSH SUNTECH
      </span>
      <span className="text-[8px] sm:text-[8.5px] font-bold tracking-[0.18em] text-[#E59700] uppercase mt-0.5">
        YOUR ROOF, YOUR POWER, YOUR SAVING
      </span>
    </div>
  );
};
