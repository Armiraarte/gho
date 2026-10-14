import heroBackgroundDesktopWebm from '../components/images/hero-bg-desktop.webm';
import heroBackgroundDesktopMp4 from '../components/images/hero-bg-desktop.mp4';
import heroBackgroundMobileWebm from '../components/images/hero-bg-mobile.webm';
import heroBackgroundMobileMp4 from '../components/images/hero-bg-mobile.mp4';
import heroBackgroundDesktopBwMp4 from '../components/images/hero-bg-desktop-bw.mp4';
import heroBackgroundMobileBwMp4 from '../components/images/hero-bg-mobile-bw.mp4';
import navbarLogo from '../components/images/LOGO_GHO.png';
import aboutCorporateImg from '../components/images/2.webp';
import subsidiaryLegalImg from '../components/images/subsidiary-legal.jpg';
import subsidiaryRealEstateImg from '../components/images/3.webp';
import subsidiarySpacesImg from '../components/images/espacio_chapultepec_11zon.webp';
import subsidiaryTechImg from '../components/images/subsidiary-tech.jpg';
import legalLogo from '../components/images/logo1.png';
import techLogo from '../components/images/LOGO_ARMIRARTE.png';
import realEstateLogo from '../components/images/log_inmobi.png';
import spacesLogo from '../components/images/espacio.webp';

// Hero
export const HERO_BACKGROUND_DESKTOP_WEBM = heroBackgroundDesktopWebm;
export const HERO_BACKGROUND_DESKTOP_MP4 = heroBackgroundDesktopMp4;
export const HERO_BACKGROUND_MOBILE_WEBM = heroBackgroundMobileWebm;
export const HERO_BACKGROUND_MOBILE_MP4 = heroBackgroundMobileMp4;
export const HERO_BACKGROUND_DESKTOP_BW_MP4 = heroBackgroundDesktopBwMp4;
export const HERO_BACKGROUND_MOBILE_BW_MP4 = heroBackgroundMobileBwMp4;

// Backward compatibility
export const HERO_BACKGROUND_WEBM = HERO_BACKGROUND_DESKTOP_WEBM;
export const HERO_BACKGROUND_MP4 = HERO_BACKGROUND_DESKTOP_MP4;

// Navbar
export const NAVBAR_LOGO = navbarLogo;

// About
export const ABOUT_CORPORATE_IMG = aboutCorporateImg;

// Subsidiary background imagery
export const SUBSIDIARY_LEGAL_IMG = subsidiaryLegalImg;
export const SUBSIDIARY_REAL_ESTATE_IMG = subsidiaryRealEstateImg;
export const SUBSIDIARY_TECH_IMG = subsidiaryTechImg;
export const SUBSIDIARY_SPACES_IMG = subsidiarySpacesImg;

// Subsidiary logos
export const SUBSIDIARY_LOGOS = {
  LEGAL: legalLogo,
  REAL_ESTATE: realEstateLogo,
  TECH: techLogo,
  SPACES: spacesLogo,
} as const;

// Subsidiary links
export const SUBSIDIARY_LINKS = {
  LEGAL: 'https://hermosilloyasoc.com',
  REAL_ESTATE: 'https://hermosilloinmobiliaria.com',
  TECH: 'https://armiraarte.com',
  SPACES: 'https://espaciochapultepec.com',
} as const;
