import React from 'react';
export function BiographySection() {
  return (
    <section className="relative max-w-3xl mx-auto px-8 py-12">
      <div className="absolute -left-4 top-0 bottom-0 w-px bg-[#8b7355] opacity-20 hidden md:block"></div>

      <h2 className="text-3xl font-ornamental text-[#8b2e2e] mb-8 text-center tracking-wider border-b border-[#8b7355] border-opacity-30 pb-4 inline-block mx-auto w-full">
        About the Author
      </h2>

      <div className="prose prose-lg prose-stone max-w-none font-manuscript text-[#4a3f35] leading-relaxed text-justify">
        <p className="mb-6">
          <span className="float-left text-7xl font-ornamental text-[#d4af37] leading-[0.8] mr-3 mt-[-4px] drop-shadow-sm border border-[#8b7355] p-2 bg-[#4a3f35] bg-opacity-5 rounded-sm">
            B
          </span>
          orn in the misty highlands during the late autumn of 1892, Arthur
          Blackwood has spent a lifetime chronicling the whispers that echo
          through the corridors of time. His fascination with the arcane began
          not in a library, but in the crumbling ruins of his ancestral home,
          where he discovered a cache of letters detailing encounters with the
          unexplained.
        </p>

        <p className="mb-6 indent-8">
          Educated at Miskatonic University before its unfortunate closure,
          Blackwood dedicated his early years to the study of folklore and
          forgotten dialects. It was during his travels through the Carpathians
          that he first put quill to parchment, drafting what would become his
          seminal work, <em>The Shadow Over Innsmouth</em>.
        </p>

        <p className="indent-8">
          Today, he resides in a repurposed lighthouse off the coast of Maine,
          accompanied only by his loyal wolfhound, Barnaby, and an extensive
          collection of maps to places that no longer exist. He writes
          exclusively by candlelight, believing that electric illumination
          chases away the very shadows he seeks to capture.
        </p>
      </div>

      <div className="mt-12 flex justify-end">
        <div className="relative">
          <p
            className="font-cursive text-3xl text-[#8b2e2e] transform -rotate-6 opacity-80"
            style={{
              fontFamily: 'cursive'
            }}>

            Arthur V. Blackwood
          </p>
          <div className="h-px w-full bg-[#8b2e2e] opacity-50 mt-1"></div>
        </div>
      </div>
    </section>);

}