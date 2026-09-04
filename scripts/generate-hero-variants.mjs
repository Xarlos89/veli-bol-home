// Generates the narrower hero widths used by the srcset in Hero.jsx and the
// preload in index.html. The hero is the LCP element — phones were downloading
// the full 2000px file. Re-run after replacing public/images/hero.webp:
//   node scripts/generate-hero-variants.mjs
import sharp from 'sharp'
import path from 'node:path'
import { stat } from 'node:fs/promises'

const IMG_DIR = path.resolve('public/images')
const source = path.join(IMG_DIR, 'hero.webp')
const widths = [800, 1280]

for (const width of widths) {
  const output = path.join(IMG_DIR, `hero-${width}.webp`)
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 68 }).toFile(output)
  const { size } = await stat(output)
  console.log(`  hero-${width}.webp  ${(size / 1024).toFixed(0)} KB`)
}
