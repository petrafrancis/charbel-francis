import React from 'react';
export function ManuscriptHeader() {
  return (
    <header className="relative py-20 px-4 text-center overflow-hidden">
      {/* Decorative Corner Borders */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#8b7355] rounded-tl-3xl opacity-60">
        <div className="absolute top-2 left-2 w-24 h-24 border-t-2 border-l-2 border-[#d4af37] rounded-tl-2xl"></div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#8b7355] rounded-tr-3xl opacity-60">
        <div className="absolute top-2 right-2 w-24 h-24 border-t-2 border-r-2 border-[#d4af37] rounded-tr-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-4 text-[#8b2e2e] font-ornamental tracking-widest text-sm uppercase">
          Est. MDCCCXCII
        </div>

        <h1 className="text-6xl md:text-8xl font-ornamental text-[#4a3f35] mb-6 tracking-wide drop-shadow-sm">
          Arthur <span className="text-[#8b2e2e]">V.</span> Blackwood
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-[#8b7355] w-24 opacity-50"></div>
          <p className="text-xl md:text-2xl italic text-[#6d5a43] font-manuscript">
            Purveyor of Fine Gothic Mysteries & Eldritch Tales
          </p>
          <div className="h-px bg-[#8b7355] w-24 opacity-50"></div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-2xl">
        <svg
          viewBox="0 0 400 20"
          className="w-full h-auto text-[#8b7355] opacity-40"
          fill="currentColor">

          <path
            d="M0,10 Q100,20 200,10 T400,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2" />

          <circle cx="200" cy="10" r="4" />
          <circle cx="100" cy="15" r="2" />
          <circle cx="300" cy="5" r="2" />
        </svg>
      </div>
    </header>);

}