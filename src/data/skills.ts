import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Stack',
    skills: [
      { label: 'HTML5', variant: 'blue' },
      { label: 'CSS3', variant: 'blue' },
      { label: 'JavaScript ES6+', variant: 'blue' },
      { label: 'Python', variant: 'blue' },
      { label: 'CSS Animations' },
      { label: 'Responsive Design' },
      { label: 'GitHub Pages' },
      { label: 'Adobe Suite' },
      { label: 'AutoCAD 3D' },
    ],
  },
  {
    title: 'In Formazione',
    skills: [
      { label: 'Cybersecurity', variant: 'green' },
      { label: 'Help Desk', variant: 'green' },
      { label: 'Grafana', variant: 'green' },
      { label: 'Proxmox', variant: 'green' },
    ],
  },
  {
    title: 'Lingue',
    skills: [
      { label: 'Portoghese — Madrelingua', variant: 'gold' },
      { label: 'Italiano — Madrelingua', variant: 'gold' },
      { label: 'Inglese — Madrelingua', variant: 'gold' },
      { label: 'Spagnolo — Medio' },
    ],
  },
];
