import React from 'react';
import { NAVBAR_LOGO } from '../constants/imagenes_url';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-black text-white pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 border-t border-white/10">
      <div data-reveal="up" className="w-full px-4 sm:px-6 lg:px-10 2xl:px-16 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <img
            src={NAVBAR_LOGO}
            alt="Grupo Hermosillo de Occidente"
            className="h-14 sm:h-20 w-auto"
            loading="lazy"
          />
        </div>

        {/* Nombre del Grupo */}
        <div className="flex flex-col items-center mb-14 sm:mb-24">
          <h2 className="title-depth-soft font-serif font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.14em] sm:tracking-widest uppercase">
            GRUPO <span className="text-white">HERMOSILLO</span>
          </h2>
          <span className="text-[9px] sm:text-[10px] uppercase text-white tracking-[0.22em] sm:tracking-[0.5em] mt-2">
            De Occidente
          </span>
        </div>

        {/* Línea Decorativa */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9ccd3]/30 to-transparent mb-8 sm:mb-12"></div>

        {/* Derechos Reservados en una sola línea */}
        <div className="max-w-[95vw] text-[8px] sm:text-[9px] md:text-xs text-white/85 uppercase tracking-[0.06em] sm:tracking-[0.2em] md:tracking-[0.4em] font-medium leading-relaxed sm:leading-loose break-words [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">
          2026 GRUPO HERMOSILLO DE OCCIDENTE S.A DE C.V — TODOS LOS DERECHOS RESERVADOS
        </div>
        
      </div>
    </footer>
  );
};

