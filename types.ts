
export interface Service {
  id: string;
  title: string;
  category: 'IT/ELV' | 'Networking' | 'Maintenance' | 'Interior';
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  category: 'Switches' | 'Interactive Screens' | 'Access Control' | 'Hardware' | 'Others';
  description: string;
  image: string;
}
