import type { NavLink } from '../types';

export const landingNav: NavLink[] = [
  { label: 'Chi Sono', href: '#about' },
  { label: 'Clienti', href: '/freelance-portfolio/clienti/' },
  { label: 'Templates', href: '/freelance-portfolio/templates/' },
  { label: 'Progetti', href: '/freelance-portfolio/projects/' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Parliamo', href: '#contatti', isCta: true },
];

export const pageNav: NavLink[] = [
  { label: 'Home', href: '/freelance-portfolio/' },
  { label: 'Clienti', href: '/freelance-portfolio/clienti/' },
  { label: 'Templates', href: '/freelance-portfolio/templates/' },
  { label: 'Progetti', href: '/freelance-portfolio/projects/' },
  { label: 'Parliamo', href: '/freelance-portfolio/#contatti', isCta: true },
];
