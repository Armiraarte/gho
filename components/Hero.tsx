import React from 'react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-[100svh] min-h-[560px] md:min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/72 via-black/40 to-black/20" />

      <div data-reveal="up" className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-10 2xl:px-16 flex flex-col items-center justify-center py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-[95vw]">
          <span className="gold-text text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.28em] sm:tracking-[0.48em] font-semibold mb-5 sm:mb-6">
            Holding empresarial en Mexico
          </span>
          <h1 className="title-depth-strong text-[clamp(2.2rem,11vw,10rem)] font-serif font-bold text-white tracking-tight leading-[0.95]">
            Grupo <span className="text-white">Hermosillo</span>
          </h1>
          <span className="title-depth-medium text-[clamp(0.8rem,3.5vw,3rem)] font-serif italic text-white tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase mt-3 sm:mt-4">
            De Occidente
          </span>
          <p className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base lg:text-lg text-gray-200/90 leading-relaxed font-light text-balance">
            Grupo empresarial con enfoque en gestion patrimonial, comercializacion inmobiliaria, consultoria juridica,
            tecnologia y espacios corporativos de alto perfil.
          </p>
        </div>

        <div className="absolute bottom-8 md:bottom-12 flex flex-col items-center w-full">
          <div className="w-px h-16 sm:h-24 bg-gradient-to-b from-[#c9ccd3]/50 via-[#c9ccd3]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
