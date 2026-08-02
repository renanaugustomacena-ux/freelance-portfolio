import type { Client } from '../types';

// Real, live clients. Add a new one by appending an object + dropping a webp
// into public/clients/. No new components required.
export const clients: Client[] = [
  {
    slug: 'mastertetto',
    name: 'MasterTetto',
    category: 'Edilizia · Lavori in quota',
    location: 'Verona',
    year: 2026,
    tagline: 'Manutenzione acrobatica del tetto, senza ponteggi.',
    description:
      'MasterTetto interviene sulle coperture con tecniche acrobatiche certificate — senza ponteggi, più rapido e meno invasivo. Il sito porta online otto servizi (dal ripasso al rifacimento completo), un sistema di richiesta preventivo e una presenza credibile che prima non esisteva.',
    liveUrl: 'https://www.mastertetto.it',
    status: 'live',
    scope: ['Design', 'Sviluppo', 'SEO Locale', 'Performance', 'Preventivo'],
    services: [
      'Sistema Anticaduta',
      'Senza Ponteggi',
      'Ripasso del Tetto',
      'Rifacimento del Tetto',
      'Sostituzione Lucernari',
      'Pulizia Grondaia',
      'Pulizia Pannelli Fotovoltaici',
      'Reti Anti-Piccione',
    ],
    palette: ['#1A1410', '#C62828', '#B8A898', '#25D366'],
    thumbnail: 'clients/mastertetto.webp',
    badge: 'Primo cliente',
    featured: true,
    caseStudy: 'clienti/mastertetto/',
  },
];
