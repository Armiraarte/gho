import React from 'react';
import { SectionId } from '../types';
import { Icon } from './Icons';
import { ABOUT_CORPORATE_IMG } from '../constants/imagenes_url';

export const About: React.FC = () => {
  const focusAreas = [
    {
      icon: 'Briefcase',
      text: 'Gestión Estratégica',
      badgeClass: 'border-indigo-300/40 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.18)]',
      iconClass: 'text-indigo-200',
      textClass: 'text-indigo-100'
    },
    {
      icon: 'Zap',
      text: 'Alto Rendimiento',
      badgeClass: 'border-amber-300/45 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]',
      iconClass: 'text-amber-200',
      textClass: 'text-amber-100'
    },
    {
      icon: 'Scale',
      text: 'Cumplimiento Ético',
      badgeClass: 'border-emerald-300/45 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]',
      iconClass: 'text-emerald-200',
      textClass: 'text-emerald-100'
    },
    {
      icon: 'Globe',
      text: 'Presencia de Marca',
      badgeClass: 'border-rose-300/40 bg-rose-500/10 shadow-[0_0_20px_rgba(244,63,94,0.2)]',
      iconClass: 'text-rose-200',
      textClass: 'text-rose-100'
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-black border-b border-white/5 overflow-x-clip">
      <div className="w-full px-4 sm:px-6 lg:px-10 2xl:px-16">
        <div className="mx-auto w-full max-w-[1700px]">
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 sm:gap-14 xl:gap-10 xl:justify-between">
            <div data-reveal="left" className="w-full xl:w-[52%] order-2 xl:order-1 min-w-0">
              <span className="gold-text text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.5em] font-bold block mb-4">Filosofía Empresarial</span>
              <h2 className="title-depth-medium text-[clamp(1.9rem,6.2vw,3.8rem)] font-serif font-bold text-white mb-6 sm:mb-8">
                Holding empresarial con visión multisectorial
              </h2>
              <div className="w-24 h-[1px] gold-bg mb-8 sm:mb-12"></div>

              <p className="text-[clamp(0.95rem,2.1vw,1.25rem)] text-gray-200 mb-10 sm:mb-12 leading-relaxed font-light text-left sm:text-justify break-words">
                <span className="text-white font-medium">Grupo Hermosillo de Occidente</span> se consolida como un holding empresarial de alto perfil en Mexico. Nuestra estructura integra <span className="gold-text">especialistas de alto nivel</span> para atender necesidades de gestion patrimonial, consultoria juridica, comercializacion inmobiliaria, desarrollo tecnologico y espacios corporativos.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 lg:gap-8">
                {focusAreas.map((item, idx) => (
                  <li
                    key={idx}
                    data-reveal={idx % 2 === 0 ? 'left' : 'right'}
                    data-reveal-delay={String(80 + idx * 60)}
                    className="flex items-center font-light min-w-0"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center mr-4 sm:mr-5 transition-all duration-500 ${item.badgeClass}`}
                    >
                      <Icon name={item.icon as any} size={18} className={item.iconClass} />
                    </div>
                    <span className={`text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] font-semibold break-words ${item.textClass}`}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-reveal="right"
              data-reveal-delay="120"
              className="w-full xl:w-[44%] order-1 xl:order-2 flex xl:justify-end min-w-0"
            >
              <div className="relative group overflow-hidden md:overflow-visible w-full max-w-[560px] xl:max-w-[620px] h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] xl:h-[560px] mx-auto xl:mx-0">
                <div className="absolute inset-0 border border-[#c9ccd3]/30 -m-2 sm:-m-4 md:-m-8 z-0"></div>
                <img
                  src={ABOUT_CORPORATE_IMG}
                  alt="Grupo Hermosillo de Occidente, holding empresarial en Mexico"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="relative z-10 w-full h-full object-cover grayscale brightness-[0.72] contrast-[1.08] group-hover:grayscale-0 group-hover:brightness-[0.86] transition-all duration-[2000ms] opacity-80 group-hover:opacity-95"
                />
                <div className="hidden sm:block absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 gold-bg/10 -z-0 backdrop-blur-xl border border-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
