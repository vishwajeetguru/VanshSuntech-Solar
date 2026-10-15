import React from 'react';

interface SolarIllustrationProps {
  type:
    | 'hero'
    | 'technician'
    | 'on-grid'
    | 'off-grid'
    | 'hybrid'
    | 'water-pump'
    | 'water-heater'
    | 'products'
    | 'commercial';
  className?: string;
}

export const SolarIllustration: React.FC<SolarIllustrationProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'hero':
      return (
        <svg
          viewBox="0 0 800 500"
          className={`w-full h-full object-cover select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Solar rooftop array on a bright sunny day"
          role="img"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CDE4FA" />
              <stop offset="60%" stopColor="#EAF3FC" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="50%" stopColor="#172554" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="metalFrame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>

          {/* Sky background */}
          <rect width="800" height="500" fill="url(#skyGrad)" />

          {/* Glowing Sun in top corner */}
          <circle cx="680" cy="90" r="110" fill="url(#sunGlow)" />
          <circle cx="680" cy="90" r="44" fill="#FBBF24" />
          <circle cx="680" cy="90" r="34" fill="#FDE047" />

          {/* Distant building silhouette */}
          <path
            d="M0 340 L80 340 L80 310 L160 310 L160 340 L260 340 L260 325 L340 325 L340 340 L450 340 L800 340 L800 500 L0 500 Z"
            fill="#E2E8F0"
            opacity="0.5"
          />

          {/* Modern Building Roof Surface */}
          <polygon points="40,430 760,430 710,280 90,280" fill="#E2E8F0" />
          <polygon points="90,280 710,280 670,220 130,220" fill="#CBD5E1" />

          {/* Mounting Racks & Stanchions */}
          <path d="M120 380 L120 420 M260 380 L260 420 M400 380 L400 420 M540 380 L540 420 M680 380 L680 420" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
          <path d="M150 310 L150 345 M290 310 L290 345 M430 310 L430 345 M570 310 L570 345 M650 310 L650 345" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />

          {/* Elevated Solar Panels - Front Row */}
          {/* Panel 1 */}
          <g>
            <polygon points="100,370 230,370 210,310 80,310" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="165" y1="370" x2="145" y2="310" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
            <line x1="90" y1="340" x2="220" y2="340" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          </g>
          {/* Panel 2 */}
          <g>
            <polygon points="245,370 375,370 355,310 225,310" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="310" y1="370" x2="290" y2="310" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
            <line x1="235" y1="340" x2="365" y2="340" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          </g>
          {/* Panel 3 */}
          <g>
            <polygon points="390,370 520,370 500,310 370,310" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="455" y1="370" x2="435" y2="310" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
            <line x1="380" y1="340" x2="510" y2="340" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          </g>
          {/* Panel 4 */}
          <g>
            <polygon points="535,370 665,370 645,310 515,310" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="600" y1="370" x2="580" y2="310" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
            <line x1="525" y1="340" x2="655" y2="340" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Elevated Solar Panels - Second Tier Row (Top) */}
          <g opacity="0.95">
            <polygon points="140,290 260,290 245,240 125,240" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.2" />
            <polygon points="275,290 395,290 380,240 260,240" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.2" />
            <polygon points="410,290 530,290 515,240 395,240" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.2" />
            <polygon points="545,290 665,290 650,240 530,240" fill="url(#panelGrad)" stroke="#38BDF8" strokeWidth="1.2" />
          </g>

          {/* Clean energy surge lines */}
          <path d="M400 370 L400 450 L480 450" stroke="#F5B82E" strokeWidth="3" strokeDasharray="6 4" />
          <circle cx="480" cy="450" r="5" fill="#F5B82E" />

          {/* Subtle terrace railing */}
          <line x1="30" y1="440" x2="770" y2="440" stroke="#94A3B8" strokeWidth="4" />
          <line x1="30" y1="410" x2="770" y2="410" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M50 410 L50 450 M200 410 L200 450 M400 410 L400 450 M600 410 L600 450 M750 410 L750 450" stroke="#94A3B8" strokeWidth="3" />
        </svg>
      );

    case 'technician':
      return (
        <svg
          viewBox="0 0 600 450"
          className={`w-full h-full object-cover select-none ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Solar site inspection and quality engineering"
          role="img"
        >
          <rect width="600" height="450" fill="#F0F7FF" />
          {/* Subtle grid pattern */}
          <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          </pattern>
          <rect width="600" height="450" fill="url(#techGrid)" />

          {/* Large Solar Module Structure */}
          <rect x="70" y="80" width="460" height="260" rx="8" fill="#0B2545" stroke="#1557A6" strokeWidth="4" />
          {/* Solar cell grid lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="70"
              y1={80 + (i + 1) * 43.3}
              x2="530"
              y2={80 + (i + 1) * 43.3}
              stroke="#2563EB"
              strokeWidth="1.5"
            />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={70 + (i + 1) * 57.5}
              y1="80"
              x2={70 + (i + 1) * 57.5}
              y2="340"
              stroke="#2563EB"
              strokeWidth="1.5"
            />
          ))}

          {/* Reflection gloss */}
          <polygon points="120,80 260,80 180,340 70,340" fill="#38BDF8" opacity="0.12" />

          {/* Quality Assurance Card Overlay */}
          <g transform="translate(180, 240)">
            <rect width="360" height="150" rx="12" fill="#FFFFFF" filter="drop-shadow(0 10px 15px rgba(11,37,69,0.12))" stroke="#E3EAF2" strokeWidth="1.5" />
            <circle cx="46" cy="46" r="24" fill="#EAF3FC" />
            <path d="M38 46 L44 52 L56 38" stroke="#1557A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="86" y="42" fill="#0B2545" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Engineering Inspection Verified
            </text>
            <text x="86" y="62" fill="#637083" fontSize="13" fontFamily="sans-serif">
              Structural tilt, shadow analysis & inverter efficiency
            </text>
            <line x1="24" y1="84" x2="336" y2="84" stroke="#E3EAF2" strokeWidth="1" />
            <text x="24" y="115" fill="#1557A6" fontSize="13" fontWeight="600" fontFamily="sans-serif">
              Gwalior Central Regional Service Unit
            </text>
            <circle cx="316" cy="112" r="6" fill="#10B981" />
          </g>
        </svg>
      );

    case 'on-grid':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#F8FAFC" />
          {/* Solar Panel */}
          <polygon points="50,180 160,180 140,90 30,90" fill="#1557A6" stroke="#38BDF8" strokeWidth="2" />
          <line x1="95" y1="180" x2="85" y2="90" stroke="#60A5FA" strokeWidth="1" />
          <line x1="40" y1="135" x2="150" y2="135" stroke="#60A5FA" strokeWidth="1" />
          {/* Bi-directional Meter */}
          <rect x="180" y="80" width="70" height="90" rx="8" fill="#FFFFFF" stroke="#0B2545" strokeWidth="2" />
          <rect x="190" y="95" width="50" height="25" rx="3" fill="#0B2545" />
          <text x="198" y="112" fill="#38BDF8" fontSize="10" fontFamily="monospace">14.8 kW</text>
          <circle cx="215" cy="145" r="10" fill="#EAF3FC" />
          <path d="M210 145 H220 M216 141 L220 145 L216 149" stroke="#1557A6" strokeWidth="1.5" />
          {/* Power Grid Tower */}
          <g transform="translate(280, 50)">
            <path d="M45 10 L20 150 M45 10 L70 150 M15 50 L75 50 M25 90 L65 90 M20 150 L70 150" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
            <path d="M20 50 L65 90 M70 50 L25 90" stroke="#0B2545" strokeWidth="1.5" />
          </g>
          {/* Connecting Power lines */}
          <path d="M140 135 L180 120" stroke="#F5B82E" strokeWidth="2.5" strokeDasharray="4 3" />
          <path d="M250 120 L300 100" stroke="#1557A6" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
      );

    case 'off-grid':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#F8FAFC" />
          {/* Solar Panel */}
          <polygon points="50,170 160,170 140,80 30,80" fill="#0B2545" stroke="#38BDF8" strokeWidth="2" />
          <line x1="95" y1="170" x2="85" y2="80" stroke="#60A5FA" strokeWidth="1" />
          <line x1="40" y1="125" x2="150" y2="125" stroke="#60A5FA" strokeWidth="1" />
          {/* Off-grid Charge Controller & Inverter */}
          <rect x="180" y="70" width="70" height="100" rx="8" fill="#FFFFFF" stroke="#0B2545" strokeWidth="2" />
          <circle cx="215" cy="100" r="14" fill="#EAF3FC" />
          <path d="M215 92 v16 M207 100 h16" stroke="#1557A6" strokeWidth="2" />
          <text x="190" y="145" fill="#637083" fontSize="10" fontWeight="bold">OFF-GRID</text>
          {/* Battery Bank */}
          <g transform="translate(280, 80)">
            <rect x="0" y="0" width="80" height="90" rx="6" fill="#1E293B" />
            <rect x="15" y="-6" width="16" height="6" rx="2" fill="#94A3B8" />
            <rect x="49" y="-6" width="16" height="6" rx="2" fill="#94A3B8" />
            {/* Battery Level Indicators */}
            <rect x="12" y="18" width="56" height="14" rx="2" fill="#10B981" />
            <rect x="12" y="38" width="56" height="14" rx="2" fill="#10B981" />
            <rect x="12" y="58" width="56" height="14" rx="2" fill="#10B981" />
            <text x="22" y="82" fill="#94A3B8" fontSize="8" fontWeight="bold">BATTERY</text>
          </g>
          {/* Energy flow */}
          <path d="M140 125 L180 120" stroke="#F5B82E" strokeWidth="2.5" strokeDasharray="4 3" />
          <path d="M250 120 L280 120" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 3" />
        </svg>
      );

    case 'hybrid':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#F8FAFC" />
          {/* Hybrid Central Hub */}
          <circle cx="200" cy="120" r="46" fill="#FFFFFF" stroke="#1557A6" strokeWidth="3" />
          <text x="176" y="125" fill="#0B2545" fontSize="12" fontWeight="bold">HYBRID</text>
          {/* Three Connected Nodes: Solar, Battery, Grid */}
          {/* Solar Node */}
          <g transform="translate(40, 80)">
            <rect width="70" height="60" rx="6" fill="#0B2545" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="35" y1="0" x2="35" y2="60" stroke="#38BDF8" strokeWidth="1" />
            <line x1="0" y1="30" x2="70" y2="30" stroke="#38BDF8" strokeWidth="1" />
            <text x="18" y="75" fill="#172B45" fontSize="9" fontWeight="600">Solar Array</text>
          </g>
          {/* Battery Node */}
          <g transform="translate(290, 40)">
            <rect width="60" height="60" rx="6" fill="#1E293B" />
            <rect x="10" y="15" width="40" height="10" fill="#10B981" />
            <rect x="10" y="30" width="40" height="10" fill="#10B981" />
            <text x="10" y="75" fill="#172B45" fontSize="9" fontWeight="600">Battery Bank</text>
          </g>
          {/* Grid Node */}
          <g transform="translate(290, 140)">
            <rect width="60" height="60" rx="6" fill="#EAF3FC" stroke="#1557A6" strokeWidth="1.5" />
            <path d="M30 15 L20 45 M30 15 L40 45 M15 25 L45 25" stroke="#1557A6" strokeWidth="2" />
            <text x="12" y="75" fill="#172B45" fontSize="9" fontWeight="600">Public Grid</text>
          </g>
          {/* Connected conduits */}
          <path d="M110 110 L154 116" stroke="#F5B82E" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M236 100 L290 75" stroke="#10B981" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M236 135 L290 165" stroke="#1557A6" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      );

    case 'water-pump':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#F0FDF4" />
          {/* Field green ground */}
          <path d="M0 160 Q 200 150 400 160 L400 240 L0 240 Z" fill="#DCFCE7" />
          {/* Sun */}
          <circle cx="70" cy="50" r="22" fill="#FBBF24" />
          {/* Solar Panel Racks for Pump */}
          <polygon points="50,150 140,150 120,90 30,90" fill="#0B2545" stroke="#38BDF8" strokeWidth="2" />
          <line x1="85" y1="150" x2="75" y2="90" stroke="#60A5FA" strokeWidth="1" />
          {/* Solar Controller Cabinet */}
          <rect x="170" y="110" width="36" height="50" rx="4" fill="#FFFFFF" stroke="#0B2545" strokeWidth="2" />
          <circle cx="188" cy="125" r="5" fill="#10B981" />
          {/* Water Pump & Outlet Pipe */}
          <rect x="250" y="130" width="60" height="40" rx="6" fill="#1557A6" />
          <path d="M290 140 L350 140 L350 170" stroke="#0284C7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Flowing Water Gush */}
          <path d="M350 170 Q 365 190 375 220" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" fill="none" />
          <circle cx="365" cy="205" r="4" fill="#38BDF8" />
          <circle cx="380" cy="225" r="6" fill="#38BDF8" />
          <circle cx="355" cy="215" r="5" fill="#38BDF8" />
        </svg>
      );

    case 'water-heater':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#FFFBEB" />
          {/* Sun with heat wave rays */}
          <circle cx="320" cy="50" r="24" fill="#F59E0B" />
          {/* Evacuated Tube Solar Water Heater */}
          {/* Insulated Storage Tank */}
          <rect x="70" y="60" width="180" height="44" rx="10" fill="#E2E8F0" stroke="#475569" strokeWidth="3" />
          <rect x="75" y="65" width="170" height="8" rx="2" fill="#FFFFFF" opacity="0.8" />
          <text x="110" y="86" fill="#0B2545" fontSize="11" fontWeight="bold">SOLAR TANK</text>
          {/* Evacuated Glass Collector Tubes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`tube-${i}`}
              x1={85 + i * 20}
              y1="104"
              x2={45 + i * 20}
              y2="190"
              stroke="#0284C7"
              strokeWidth="7"
              strokeLinecap="round"
            />
          ))}
          {/* Mounting stand */}
          <line x1="50" y1="195" x2="250" y2="195" stroke="#64748B" strokeWidth="4" />
          <line x1="70" y1="100" x2="45" y2="195" stroke="#64748B" strokeWidth="4" />
          <line x1="240" y1="100" x2="215" y2="195" stroke="#64748B" strokeWidth="4" />
          <line x1="215" y1="195" x2="240" y2="195" stroke="#64748B" strokeWidth="4" />
          {/* Hot water steam icon indicator */}
          <path d="M270 80 Q 280 70 275 60 M285 82 Q 295 72 290 62" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'products':
    default:
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#F8FAFC" />
          {/* Solar Light / Lantern */}
          <g transform="translate(60, 60)">
            <polygon points="10,50 40,50 35,20 15,20" fill="#0B2545" stroke="#38BDF8" />
            <rect x="18" y="50" width="14" height="40" fill="#94A3B8" />
            <circle cx="25" cy="100" r="15" fill="#FEF08A" />
            <circle cx="25" cy="100" r="8" fill="#F59E0B" />
          </g>
          {/* Inverter Unit */}
          <g transform="translate(150, 70)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#0B2545" strokeWidth="2" />
            <rect x="15" y="20" width="50" height="20" rx="3" fill="#0B2545" />
            <text x="22" y="34" fill="#38BDF8" fontSize="10" fontFamily="monospace">PURE SINE</text>
            <circle cx="25" cy="65" r="4" fill="#10B981" />
            <circle cx="40" cy="65" r="4" fill="#F5B82E" />
            <circle cx="55" cy="65" r="4" fill="#64748B" />
          </g>
          {/* High Efficiency Monocrystalline Module */}
          <g transform="translate(260, 60)">
            <rect width="90" height="110" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <line x1="30" y1="0" x2="30" y2="110" stroke="#38BDF8" strokeWidth="1" />
            <line x1="60" y1="0" x2="60" y2="110" stroke="#38BDF8" strokeWidth="1" />
            <line x1="0" y1="36" x2="90" y2="36" stroke="#38BDF8" strokeWidth="1" />
            <line x1="0" y1="73" x2="90" y2="73" stroke="#38BDF8" strokeWidth="1" />
          </g>
        </svg>
      );
  }
};
