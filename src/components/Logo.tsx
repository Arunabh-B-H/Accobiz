import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-14 md:h-16' : 'h-10 md:h-12';

  return (
    <div className={`inline-flex items-center space-x-2 transition-all ${className}`}>
      {/* Transparent PNG Logo with White & Gold Drop-Shadow for Ultra-High Contrast on Dark Backgrounds */}
      <img
        src="/images/accobiz_logo.png"
        alt="Accobiz LLP Logo"
        className={`${heightClass} object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_1px_8px_rgba(255,255,255,0.85)]`}
      />
    </div>
  );
};
