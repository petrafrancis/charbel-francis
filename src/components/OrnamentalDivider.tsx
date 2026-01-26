import React from 'react';
interface OrnamentalDividerProps {
  className?: string;
  variant?: 'simple' | 'complex' | 'end';
}
export function OrnamentalDivider({
  className = '',
  variant = 'simple'
}: OrnamentalDividerProps) {
  if (variant === 'complex') {
    return (
      <div
        className={`flex items-center justify-center py-12 opacity-80 ${className}`}>

        <div className="h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent w-1/4"></div>
        <div className="mx-4 text-[#8b7355]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="transform rotate-45">

            <rect x="2" y="2" width="20" height="20" rx="2" />
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent w-1/4"></div>
      </div>);

  }
  if (variant === 'end') {
    return (
      <div
        className={`flex flex-col items-center justify-center py-16 opacity-70 ${className}`}>

        <div className="text-[#4a3f35] text-2xl font-serif tracking-[0.5em]">
          FINIS
        </div>
        <div className="mt-2 text-[#8b7355]">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="currentColor">
            <path
              d="M0,10 Q15,0 30,10 T60,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" />

            <circle cx="30" cy="10" r="3" />
          </svg>
        </div>
      </div>);

  }
  // Simple variant
  return (
    <div
      className={`flex items-center justify-center py-8 opacity-60 ${className}`}>

      <svg
        width="100"
        height="20"
        viewBox="0 0 100 20"
        fill="none"
        stroke="#8b7355"
        strokeWidth="1.5">

        <path d="M0,10 C20,10 20,0 40,0 S60,20 80,20 S100,10 100,10" />
      </svg>
    </div>);

}