export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'architecture' | 'interior' | 'exterior' | 'detailing' | 'cad';
  description: string;
  scope: string[];
  specs: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
    type: 'render' | 'blueprint' | 'elevation' | 'detail';
  }[];
  cadPlan?: string;
  renderComparison?: {
    blueprint: string;
    render: string;
    title: string;
  };
  featured: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  audience: string[];
  formats: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  details: string[];
  output: string;
}
