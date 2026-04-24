import type { FeaturedProject, PrivateProject } from '../types';

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Knowledge AIO',
    description: "Piattaforma di apprendimento dell'inglese con karaoke musicale, 7 modalità di esercizio, vocabolario tecnico in 4 domini (cybersecurity, Python, Linux, software dev), gamification completa e sfondo 3D con Three.js. Single Page App, zero framework.",
    tags: [
      { label: 'JavaScript', variant: 'blue' },
      { label: 'Three.js', variant: 'blue' },
      { label: 'Web Audio API' },
      { label: 'IndexedDB' },
      { label: 'PWA' },
      { label: 'Docker' },
    ],
    badge: { label: 'Live', variant: 'live' },
    visualClass: 'fcard__visual--knowledge',
    links: [
      { label: 'Demo Live', href: 'https://english-app-renan.netlify.app/', variant: 'blue' },
      { label: 'GitHub', href: 'https://github.com/renanaugustomacena-ux/security-teacher', variant: 'ghost' },
    ],
  },
  {
    title: 'Mini Cozy Room',
    description: 'Desktop companion game in pixel art. Arreda stanze con 53 decorazioni drag-and-drop, ascolta musica lo-fi con crossfading, salva i design localmente o sincronizzali nel cloud. Costruito con Godot 4.5, architettura event-driven.',
    tags: [
      { label: 'Godot 4.5', variant: 'gold' },
      { label: 'GDScript', variant: 'gold' },
      { label: 'SQLite' },
      { label: 'Supabase' },
      { label: 'CI/CD' },
    ],
    badge: { label: 'Progetto di Gruppo', variant: 'collab' },
    visualClass: 'fcard__visual--cozy',
    links: [
      { label: 'GitHub', href: 'https://github.com/renanaugustomacena-ux/project-work-311', variant: 'ghost' },
    ],
  },
];

export const privateProjects: PrivateProject[] = [
  {
    title: 'Trading Ecosystem',
    description: 'Sistema di trading autonomo e auto-apprendente che opera in modo continuo, adattandosi alle condizioni di mercato.',
    tag: 'Python',
  },
  {
    title: 'CS2 Coach AI',
    description: 'Strumento di analisi completa del gameplay di Counter-Strike 2 per migliorare le performance dei giocatori.',
    tag: 'Python',
  },
  {
    title: 'GOLIATH Engine',
    description: 'Motore di trading algoritmico puro — analisi tecnica automatizzata e esecuzione disciplinata delle operazioni.',
    tag: 'Python',
  },
];
