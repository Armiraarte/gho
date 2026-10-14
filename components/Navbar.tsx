import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVBAR_LOGO } from '../constants/imagenes_url';
import { SectionId } from '../types';

const navLinks = [
  { label: 'Inicio', href: SectionId.HOME },
  { label: 'Vision', href: SectionId.ABOUT },
  { label: 'Sociedades', href: SectionId.SUBSIDIARIES },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const marker = scrollY + window.innerHeight * 0.35;
      let currentSection = SectionId.HOME;

      for (const link of navLinks) {
        const section = document.getElementById(link.href);
        if (section && section.offsetTop <= marker) {
          currentSection = link.href;
        }
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      } left-0 top-0 safe-mobile-top`}
    >
      <div className="w-full max-w-[1780px] mx-auto px-3 sm:px-6 lg:px-10 2xl:px-16">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="flex items-center"
            onClick={() => scrollToSection(SectionId.HOME)}
            aria-label="Ir a inicio"
          >
            <img
              src={NAVBAR_LOGO}
              alt="Grupo Hermosillo de Occidente"
              className="h-9 sm:h-12 w-auto"
              loading="eager"
            />
          </button>

          <div className="hidden xl:flex xl:space-x-9 2xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-1 py-2 transition-all duration-500 text-xs font-medium uppercase tracking-[0.2em] ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-brand-gold'
                  }`}
                >
                  <span className={`${isActive ? 'gold-text [text-shadow:0_0_10px_rgba(229,232,238,0.55),0_0_22px_rgba(201,204,211,0.35)]' : ''}`}>
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-gold" aria-label="Abrir menu">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-b border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-3 text-sm font-medium border-b border-white/5 transition-all duration-300 ${
                  activeSection === link.href
                    ? 'text-white [text-shadow:0_0_10px_rgba(229,232,238,0.5),0_0_20px_rgba(201,204,211,0.3)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
