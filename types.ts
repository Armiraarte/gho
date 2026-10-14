export interface Subsidiary {
  id: string;
  name: string;
  sector: string;
  description: string;
  iconName: 'Building' | 'Zap' | 'Briefcase' | 'Cpu' | 'Truck' | 'HeartPulse' | 'Code' | 'Scale';
  color: string;
  stats: { label: string; value: string }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'inicio',
  ABOUT = 'nosotros',
  SUBSIDIARIES = 'empresas',
  SUSTAINABILITY = 'sostenibilidad',
  CONTACT = 'contacto'
}