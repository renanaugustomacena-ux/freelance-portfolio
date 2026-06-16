export interface SiteConfig {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  tagline: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface Service {
  num: string;
  title: string;
  description: string;
}

export interface TemplateDemoVariant {
  name: string;
  label: string;
  style: string;
  styleTheme: 'dark' | 'light';
  href: string;
  visualClass: string;
  decoration?: string;
  decorationText?: string;
}

export interface TemplateDemo {
  category: string;
  name: string;
  description: string;
  tags: string[];
  variants: TemplateDemoVariant[];
}

export interface FeaturedProject {
  title: string;
  description: string;
  tags: { label: string; variant?: 'blue' | 'gold' | 'default' }[];
  badge: { label: string; variant: 'live' | 'collab' | 'wip' };
  visualClass: string;
  links: { label: string; href: string; variant: 'blue' | 'ghost' }[];
}

export interface PrivateProject {
  title: string;
  description: string;
  tag: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics: string[];
}

export interface SkillGroup {
  title: string;
  skills: { label: string; variant?: 'blue' | 'gold' | 'green' | 'default' }[];
}

export interface MusicMember {
  name: string;
  href: string;
}

export interface Client {
  slug: string;
  name: string;            // legal / display name
  category: string;        // sector
  location: string;
  year: number;
  tagline: string;         // one-line positioning
  description: string;     // short case narrative
  liveUrl: string;
  status: 'live' | 'in-progress' | 'archived';
  scope: string[];         // what was delivered
  services: string[];      // the client's offered services (showcase)
  palette: string[];       // brand swatch hexes
  thumbnail: string;       // path relative to BASE_URL (e.g. 'clients/x.webp')
  badge?: string;          // e.g. 'Primo cliente'
  featured?: boolean;
}
