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
    title: 'GOLIATH Engine',
    description: 'Motore di trading algoritmico puro — analisi tecnica automatizzata e esecuzione disciplinata delle operazioni.',
    tag: 'Python',
  },
  {
    title: 'Macena SmartERP',
    description: 'Gestionale cloud multi-tenant per le PMI manifatturiere del Veronese: produzione, magazzino, vendite e contabilità FatturaPA/SDI con adempimenti italiani (Piano dei Conti IV CEE, Conservazione a Norma) integrati nativamente.',
    tag: 'TypeScript',
  },
  {
    title: 'Macena LogiTrack',
    description: 'Kit modulare di software logistico per ingaggi freelance: piattaforma Go + MongoDB con verticali (logistica A22 / Quadrante Europa, rifiuti speciali RENTRI) forkati e personalizzati per ogni cliente, senza canone SaaS.',
    tag: 'Go',
  },
  {
    title: 'Macena GreenMetrics',
    description: 'Energy management e reporting di sostenibilità per le PMI energivore: ingerisce letture dei contatori e genera l\'attestazione Piano Transizione 5.0 (credito d\'imposta fino al 45%), report CSRD/ESRS E1, Conto Termico e TEE.',
    tag: 'Go',
  },
  {
    title: 'Macena TeamFlow',
    description: 'HR e payroll per le PMI italiane: codifica i CCNL (Metalmeccanici, Commercio, Edilizia, Chimico), automatizza INPS/INAIL/IRPEF, TFR, UNIEMENS, F24 e l\'intero catalogo permessi (ferie, ROL, malattia, maternità, Legge 104).',
    tag: 'Ruby',
  },
  {
    title: 'Macena FatturaFlow',
    description: 'Ciclo completo della fattura elettronica: generazione XML FatturaPA v1.2.2, firma XAdES-BES, trasmissione SDI tramite intermediario accreditato, tracciamento ricevute (RC/NS/MC/DT) e Conservazione a Norma decennale.',
    tag: 'Python',
  },
  {
    title: 'Macena FactoryMind',
    description: 'Template Industrial IoT per il monitoraggio OEE in tempo reale: Mosquitto + InfluxDB + Grafana, protocolli OPC UA, Modbus e Sparkplug B, con attestazione Piano Transizione 4.0/5.0 (credito d\'imposta fino al 45%).',
    tag: 'JavaScript',
  },
  {
    title: 'Macena AgriVigna',
    description: 'Viticoltura di precisione per i vigneti del Veronese (Valpolicella, Bardolino, Soave, Custoza, Lugana): sensoristica MQTT in campo, modelli fitopatologici peer-reviewed, diagnosi AI su foglia e Quaderno di Campagna integrato col SIAN/AGEA.',
    tag: 'Python',
  },
  {
    title: 'Macena CyberGuard',
    description: 'Piattaforma di cybersecurity esclusivamente difensiva per PMI italiane: scansione vulnerabilità, scoring GDPR, gap analysis NIS2 (D.Lgs. 138/2024), gestione incidenti con bozze di notifica per Garante e CSIRT Italia.',
    tag: 'Rust',
  },
  {
    title: 'Macena TraceVino',
    description: 'Tracciabilità dal vigneto alla bottiglia per le cantine veronesi: chain-of-custody con hash immutabile, AI di defect-detection e compliance HACCP / Reg. CE 178/2002 (one-step-back / one-step-forward).',
    tag: 'Python',
  },
];
