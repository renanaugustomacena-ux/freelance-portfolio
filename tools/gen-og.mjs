// Generates public/og-image.png (1200x630) from an inline brand SVG.
// Run once when the design changes: node tools/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4E8FE0"/>
      <stop offset="0.55" stop-color="#9B8CFF"/>
      <stop offset="1" stop-color="#E8A040"/>
    </linearGradient>
    <radialGradient id="glowBlue" cx="0.85" cy="0.1" r="0.9">
      <stop offset="0" stop-color="#4E8FE0" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#4E8FE0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowGold" cx="0.1" cy="0.95" r="0.8">
      <stop offset="0" stop-color="#E8A040" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#E8A040" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#4E8FE0" fill-opacity="0.16"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0A0A10"/>
  <rect width="1200" height="630" fill="url(#glowBlue)"/>
  <rect width="1200" height="630" fill="url(#glowGold)"/>
  <rect x="640" y="0" width="560" height="630" fill="url(#dots)"/>

  <rect x="70" y="150" width="64" height="6" rx="3" fill="url(#brand)"/>

  <text x="70" y="130" font-family="Consolas, monospace" font-size="26" letter-spacing="6" fill="#8A94AE">WEB DEVELOPER FREELANCE — VERONA</text>

  <text x="64" y="290" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="96" letter-spacing="-2" fill="#F4F6FB">Renan Augusto</text>
  <text x="64" y="395" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="96" letter-spacing="-2" fill="url(#brand)">Macena</text>

  <text x="70" y="470" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#DEE2EC">Siti su misura, disegnati attorno alla tua attività.</text>

  <text x="70" y="552" font-family="Consolas, monospace" font-size="24" letter-spacing="3" fill="#8A94AE">DESIGN · SVILUPPO · SEO LOCALE · PERFORMANCE</text>

  <rect x="2" y="2" width="1196" height="626" rx="10" fill="none" stroke="#1C1F2E" stroke-width="4"/>
  <rect x="0" y="622" width="1200" height="8" fill="url(#brand)"/>
</svg>`;

await sharp(Buffer.from(svg), { density: 96 })
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public', 'og-image.png'));

console.log('og-image.png generated.');
