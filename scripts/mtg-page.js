// Gives /mtg its own HTML file, so crawlers and link previews see its own title and URL.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const home = readFileSync('dist/index.html', 'utf8');
const replacements = [
  ['<title>Jan Gačnik — Backend Engineer in Japan · Kotlin, Scala</title>', '<title>Jan Gačnik — Backend Engineer · MTG edition</title>'],
  ['<link rel="canonical" href="https://portfolio.gacnik.dev/" />', '<link rel="canonical" href="https://portfolio.gacnik.dev/mtg" />'],
  ['<meta property="og:url" content="https://portfolio.gacnik.dev/" />', '<meta property="og:url" content="https://portfolio.gacnik.dev/mtg" />'],
  ['<meta property="og:title" content="Jan Gačnik — Backend Engineer in Japan" />', '<meta property="og:title" content="Jan Gačnik — Backend Engineer · MTG edition" />'],
];
const mtg = replacements.reduce((page, [from, to]) => {
  if (!page.includes(from)) throw new Error(`mtg-page: missing ${from}`);
  return page.replace(from, to);
}, home);
mkdirSync('dist/mtg', { recursive: true });
writeFileSync('dist/mtg/index.html', mtg);
