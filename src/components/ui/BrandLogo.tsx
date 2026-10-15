import React from 'react';
import { VnshLogo } from './VnshLogo';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  onClick,
}) => {
  const isFooter = variant === 'footer';

  return (
    <a
      href="#home"
      onClick={onClick}
      className={`inline-flex items-center group transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="VNSH SunTech - Your Roof, Your Power, Your Saving"
    >
      <VnshLogo
        variant="horizontal"
        inverted={isFooter}
        className="transform transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </a>
  );
};
