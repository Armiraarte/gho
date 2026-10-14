import React from 'react';
import { Building2, Zap, Briefcase, Cpu, Truck, HeartPulse, ChevronRight, BarChart3, Globe, Users, ArrowRight, Scale, Code2 } from 'lucide-react';

export const IconMap = {
  Building: Building2,
  Zap: Zap,
  Briefcase: Briefcase,
  Cpu: Cpu,
  Truck: Truck,
  HeartPulse: HeartPulse,
  ChevronRight: ChevronRight,
  BarChart: BarChart3,
  Globe: Globe,
  Users: Users,
  ArrowRight: ArrowRight,
  Scale: Scale,
  Code: Code2
};

interface IconProps {
  name: keyof typeof IconMap;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name];
  return <IconComponent className={className} size={size} />;
};