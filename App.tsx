import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Subsidiaries } from './components/Subsidiaries';
import { Footer } from './components/Footer';
import {
  HERO_BACKGROUND_DESKTOP_BW_MP4,
  HERO_BACKGROUND_MOBILE_BW_MP4
} from './constants/imagenes_url';

const clamp01 = (value: number): number => Math.max(0, Math.min(value, 1));

const hexToRgba = (hex: string, alpha: number): string => {
  const cleanHex = hex.replace('#', '').trim();
  const isHexColor = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(cleanHex);

  if (!isHexColor) {
    return `rgba(0, 0, 0, ${clamp01(alpha)})`;
  }

  const fullHex = cleanHex.length === 3
    ? cleanHex.split('').map((char) => `${char}${char}`).join('')
    : cleanHex;

  const red = Number.parseInt(fullHex.slice(0, 2), 16);
  const green = Number.parseInt(fullHex.slice(2, 4), 16);
  const blue = Number.parseInt(fullHex.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${clamp01(alpha)})`;
};

function App() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const overlayColor = '#000000';
  const overlayStrength = 68;

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!revealElements.length) return;

    revealElements.forEach((element) => {
      const direction = element.dataset.reveal || 'up';
      const delay = Number(element.dataset.revealDelay || '0');

      element.classList.add('reveal-item', `reveal-${direction}`);
      if (!Number.isNaN(delay) && delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
      }
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((element) => element.classList.add('reveal-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const intensity = Math.max(0, Math.min(overlayStrength, 100)) / 100;
  const overlayGradient = `linear-gradient(
    to bottom,
    ${hexToRgba(overlayColor, intensity)} 0%,
    ${hexToRgba(overlayColor, intensity * 0.82)} 45%,
    ${hexToRgba(overlayColor, intensity * 0.46)} 100%
  )`;
  const backgroundOverlay = isVideoReady ? overlayGradient : '#000000';

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-200 selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden">
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none bg-black">
        <video
          className="video-backdrop w-full h-full object-cover"
          style={{ opacity: isVideoReady ? 1 : 0, transition: 'opacity 500ms ease-out' }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedData={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
        >
          <source media="(min-width: 1024px)" src={HERO_BACKGROUND_DESKTOP_BW_MP4} type="video/mp4" />
          <source media="(max-width: 1023px)" src={HERO_BACKGROUND_MOBILE_BW_MP4} type="video/mp4" />
          <source src={HERO_BACKGROUND_DESKTOP_BW_MP4} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{ background: backgroundOverlay }}
        />
      </div>

      <Navbar />

      <main className="site-content relative z-10">
        <Hero />

        <div className="site-sections relative">
          <About />
          <Subsidiaries />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
