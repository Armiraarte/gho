import React from 'react';
import { SectionId } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { 
  SUBSIDIARY_LEGAL_IMG, 
  SUBSIDIARY_REAL_ESTATE_IMG, 
  SUBSIDIARY_TECH_IMG, 
  SUBSIDIARY_SPACES_IMG,
  SUBSIDIARY_LINKS,
  SUBSIDIARY_LOGOS
} from '../constants/imagenes_url';

const societies = [
  {
    id: '01',
    name: 'Hermosillo y Asociados',
    tagline: 'Excelencia Jurídica y Alta Consultoría',
    image: SUBSIDIARY_LEGAL_IMG,
    logo: SUBSIDIARY_LOGOS.LEGAL,
    url: SUBSIDIARY_LINKS.LEGAL,
    desc: 'Enfocados en diversas ramas del derecho, trabajamos con métodos confiables y precisos, respaldados por profesionales especializados en cada área.'
  },
  {
    id: '02',
    name: 'Hermosillo Inmobiliaria',
    tagline: 'Venta y Renta Patrimonial',
    image: SUBSIDIARY_REAL_ESTATE_IMG,
    logo: SUBSIDIARY_LOGOS.REAL_ESTATE,
    url: SUBSIDIARY_LINKS.REAL_ESTATE,
    desc: 'Especialistas en la comercialización de activos inmobiliarios de alto perfil. Nos enfocamos exclusivamente en la venta y renta de propiedades estratégicas para garantizar su patrimonio. Importante: No somos constructora; nuestra maestría reside en la gestión y arrendamiento de bienes raíces de lujo.'
  },
  {
    id: '03',
    name: 'ARMiRARTE',
    tagline: 'Transformación Tecnológica de Vanguardia',
    image: SUBSIDIARY_TECH_IMG,
    logo: SUBSIDIARY_LOGOS.TECH,
    url: SUBSIDIARY_LINKS.TECH,
    desc: 'Ecosistema digital especializado en el desarrollo de software de alta complejidad e inteligencia artificial. Optimizamos estructuras operativas mediante tecnología disruptiva y diseño de sistemas únicos.'
  },
  {
    id: '04',
    name: 'Espacio Chapultepec',
    tagline: 'Entornos Corporativos de Prestigio',
    image: SUBSIDIARY_SPACES_IMG,
    logo: SUBSIDIARY_LOGOS.SPACES,
    url: SUBSIDIARY_LINKS.SPACES,
    desc: 'Centros de negocios y oficinas corporativas de primer nivel ubicadas en la zona de mayor dinamismo ejecutivo. Diseñamos espacios que proyectan autoridad y fomentan la productividad de élite.'
  }
];

export const Subsidiaries: React.FC = () => {
  return (
    <section id={SectionId.SUBSIDIARIES} className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black overflow-x-clip">
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-14 2xl:px-16">
        <div className="mx-auto max-w-[1780px]">
        
        {/* Cabecera Corporativa */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 sm:mb-24 md:mb-40 gap-8 sm:gap-12">
          <div data-reveal="left" className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px w-12 gold-bg"></div>
              <span className="gold-text font-bold tracking-[0.2em] sm:tracking-[0.5em] uppercase text-[10px] sm:text-[11px]">Estructura del Holding</span>
            </div>
            <h2 className="title-depth-strong text-[clamp(1.9rem,8.4vw,8rem)] font-serif font-bold text-white leading-[0.9] tracking-tight">
              Nuestras <br/> <span className="text-white">Sociedades</span>
            </h2>
          </div>
          <div data-reveal="right" data-reveal-delay="100" className="flex flex-col space-y-6 min-w-0">
            <div className="hidden md:block w-40 h-[1px] bg-white/10"></div>
            <p className="text-gray-200 max-w-sm text-xs md:text-sm uppercase tracking-[0.12em] sm:tracking-[0.2em] font-light leading-relaxed text-left sm:text-justify break-words">
              Un conjunto de identidades consolidadas que definen el liderazgo de nuestro grupo en sectores clave del desarrollo económico.
            </p>
          </div>
        </div>

        {/* Listado Cinematográfico por Filas */}
        <div className="space-y-24 sm:space-y-36 lg:space-y-56">
          {societies.map((item, index) => (
            <div 
              key={item.id}
              className={`group flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} items-center gap-10 sm:gap-14 xl:gap-16 2xl:gap-28 min-w-0`}
            >
              {/* Composición Visual (Lado Imagen de Fondo) */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${item.name}`}
                data-reveal={index % 2 === 0 ? 'left' : 'right'}
                data-reveal-delay="60"
                className="w-full xl:w-[58%] relative h-[68vw] min-h-[250px] max-h-[420px] sm:h-[56vw] sm:min-h-[330px] sm:max-h-[520px] md:h-[520px] md:max-h-none xl:h-[620px] 2xl:h-[700px] overflow-hidden block"
              >
                <div className="absolute inset-3 sm:inset-4 border border-white/15 z-20 pointer-events-none transition-all duration-700 group-hover:inset-6 sm:group-hover:inset-8 group-hover:border-[#c9ccd3]/40"></div>
                
                <div className="absolute inset-0 z-0 transition-transform duration-[3000ms] ease-out group-hover:scale-105">
                  <img 
                    src={item.image} 
                    alt={`${item.name} - ${item.tagline}`} 
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full h-full object-cover grayscale brightness-[0.72] contrast-[1.08] opacity-[0.55] group-hover:grayscale-0 group-hover:brightness-[0.86] group-hover:opacity-[0.85] transition-all duration-[1500ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10"></div>
                </div>
                
                <div className={`absolute -bottom-6 sm:-bottom-10 ${index % 2 === 0 ? 'right-2 sm:-right-10' : 'left-2 sm:-left-10'} z-10 opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-1000`}>
                  <span className="text-[8rem] sm:text-[14rem] md:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] font-serif font-bold text-white leading-none select-none">
                    {item.id}
                  </span>
                </div>
              </a>

              {/* Contenido Narrativo (Lado Texto y Logo) */}
              <div
                data-reveal={index % 2 === 0 ? 'right' : 'left'}
                data-reveal-delay="140"
                className="w-full xl:w-[42%] max-w-[780px] flex flex-col justify-center min-w-0"
              >
                
                {/* Espacio Restaurado para el LOGO de la Sociedad */}
                <div className="mb-8 sm:mb-12">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${item.name}`}
                    className="block w-24 h-24 sm:w-28 sm:h-28"
                  >
                    <div className="w-full h-full platinum-border rounded-sm flex items-center justify-center transition-all duration-700 relative overflow-hidden group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24),0_0_28px_rgba(206,213,225,0.36)]">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`Logo de ${item.name}`}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="flex flex-col items-center opacity-30 group-hover:opacity-100 transition-opacity">
                          <span className="gold-text text-[9px] uppercase tracking-[0.4em] font-bold">Logo</span>
                          <span className="text-gray-600 text-[7px] uppercase tracking-widest mt-1">Sociedad</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#c9ccd3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                </div>

                <div className="mb-8 flex flex-col">
                  <span className="gold-text text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.4em] font-bold mb-2 break-words">
                    División Corporativa
                  </span>
                  <span className="text-gray-300 text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-light break-words">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="title-depth-medium text-[clamp(1.8rem,6.2vw,4.2rem)] font-serif font-bold text-white mb-6 sm:mb-10 leading-tight transition-all duration-700 break-words">
                  {item.name}
                </h3>

                <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-200 font-light leading-relaxed mb-10 sm:mb-14 border-l border-[#c9ccd3]/35 pl-5 sm:pl-8 text-left sm:text-justify break-words">
                  {item.desc}
                </p>

                {/* BOTÓN CON REDIRECCIÓN */}
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group/action cursor-pointer w-full sm:w-fit"
                >
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-4 sm:mr-6">
                    <div className="absolute inset-0 border border-white/10 rounded-full transition-all duration-700 group-hover/action:scale-110 group-hover/action:border-[#c9ccd3] group-hover/action:bg-[#c9ccd3]/5"></div>
                    <ArrowUpRight size={20} className="text-white group-hover/action:gold-text transition-colors" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.14em] sm:tracking-[0.4em] text-gray-300 mb-1 break-words">Redirección Externa</span>
                    <span className="text-[11px] sm:text-sm font-bold uppercase tracking-[0.06em] sm:tracking-[0.2em] text-white group-hover/action:gold-text transition-colors break-words">
                      Visitar Portal Oficial
                    </span>
                  </div>
                </a>

                <div className="mt-12 sm:mt-20 flex items-center space-x-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#c9ccd3]/20 to-transparent"></div>
                  <div className="w-1 h-1 gold-bg rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Declaración de Cierre */}
        <div data-reveal="up" className="mt-24 sm:mt-40 md:mt-60 relative py-20 sm:py-24 md:py-32 border-y border-white/5">
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <span className="gold-text text-[10px] uppercase tracking-[0.24em] sm:tracking-[1em] mb-8 sm:mb-12 font-bold">Excelencia Institucional</span>
                <h4 className="title-depth-medium text-xl sm:text-2xl md:text-4xl font-serif font-semibold text-white max-w-4xl leading-relaxed tracking-[0.01em]">
                  "Nuestra solidez reside en la integración de talentos y la diversificación estratégica de cada una de nuestras sociedades."
                </h4>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};




