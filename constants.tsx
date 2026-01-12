
import { Service, Project, Product } from './types';

export const COLORS = {
  primary: '#0052CC', // Blue
  secondary: '#28a745', // Green
  accent: '#fd7e14', // Orange
};

export const SERVICES: Service[] = [
  {
    id: 'it-infra',
    title: 'IT Infrastructure & Maintenance',
    category: 'IT/ELV',
    description: 'Complete server setup, rack management, and ongoing hardware maintenance for businesses of all sizes.',
    icon: 'fa-server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'networking',
    title: 'Networking & WiFi Solutions',
    category: 'Networking',
    description: 'High-speed structured cabling, enterprise WiFi deployment, and robust network security.',
    icon: 'fa-network-wired',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cctv',
    title: 'CCTV & Access Control',
    category: 'IT/ELV',
    description: 'Advanced IP surveillance systems and biometric access control for enhanced security.',
    icon: 'fa-video',
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=1200&auto=format&fit=crop'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '86" 4K Interactive Touchscreen',
    model: 'AS-86-PRO-4K',
    category: 'Interactive Screens',
    description: 'Professional grade interactive flat panel with 20-point touch for boardrooms and classrooms.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Face & Fingerprint Access Terminal',
    model: 'AS-BIO-FACE-800',
    category: 'Access Control',
    description: 'AI-driven facial recognition with dual-camera technology for secure door access.',
    image: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Layer 3 Managed PoE Switch',
    model: 'AS-SW-24-POE',
    category: 'Switches',
    description: '24 Port Gigabit PoE+ switch for high-performance networking and CCTV powering.',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Smart WiFi Touch Switch 3-Gang',
    model: 'AS-SMART-SW-W3',
    category: 'Switches',
    description: 'Elegant glass touch panel with smartphone and voice control integration.',
    image: 'https://images.unsplash.com/photo-1558002038-103792e07a70?q=80&w=800&auto=format&fit=crop'
  }
];

export const PROJECTS: Project[] = [
  { id: 'p1', name: 'Gemini', logo: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200', description: 'IT Infrastructure deployment' },
  { id: 'p2', name: 'Gulf Smelter', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200', description: 'Network security & CCTV' },
  { id: 'p3', name: 'Humble Home', logo: 'https://images.unsplash.com/photo-1558002038-103792e07a70?auto=format&fit=crop&q=80&w=200', description: 'Smart home automation' },
  { id: 'p4', name: 'Al Jafiliya Tech', logo: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=200', description: 'Annual Maintenance Contract' }
];

export const TESTIMONIALS = [
  {
    name: 'Ahmed K.',
    role: 'Operations Manager',
    content: 'Al Shah Solutions transformed our office connectivity. Their networking team is top-notch.',
    stars: 5
  }
];
