// One-time image optimization for SEO / Core Web Vitals.
// Resizes every referenced photo to a sensible max dimension and re-encodes
// to WebP, then derives a social share image and an apple-touch-icon.
// Run with: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { readdir, unlink, stat, access } from 'node:fs/promises'
import path from 'node:path'

const exists = (p) => access(p).then(() => true, () => false)

const IMG_DIR = path.resolve('public/images')
const PUBLIC_DIR = path.resolve('public')

// Original filename -> desired WebP basename. These are the only images the
// site actually references (Hero, About, and the Gallery `photos` array).
const referenced = [
  'hero.jpeg',
  'veli-bol-pride.jpeg',
  'aerial-gulet-turquoise-cove.jpg',
  'woman-jumping-off-boat-slide.jpg',
  'underwater-diver-sunrays.jpg',
  'zlatni-rat-beach-bol-from-boat.jpg',
  'couple-embracing-sunset-boat.jpg',
  'rocky-cove-caves-swimmers.jpg',
  'kids-peace-sign-boat-cabin.jpg',
  'aerial-boat-narrow-blue-cove.jpg',
  'snorkeler-selfie-underwater.jpg',
  'group-swimming-with-floatie.jpg',
  'gulet-anchored-pine-shore.jpg',
  'legs-dangling-off-boat-sunset.jpg',
  'aerial-gulet-clear-shallows.jpg',
  'underwater-freediver-woman.jpg',
  'woman-paddleboard-cheering.jpg',
  'rocky-cove-caves-splash.jpg',
  'aerial-white-boat-cove.jpg',
  'gulet-deck-passengers-ships-wheel.jpg',
  // History section — vintage build photos
  'history-hull-on-the-stocks.jpg',
  'history-keel-and-ribs.jpg',
  'history-shipwrights-at-work.jpg',
  'history-framing-with-sea-view.jpg',
  'history-laying-the-deck.jpg',
  'history-painting-the-hull.jpg',
  'history-launched-in-bol.jpg',
  // Sunset additions for the Gallery
  'excursion-boat-zlatni-rat-sunset.jpg',
  'aerial-bol-sunset.jpg',
  'couple-pointing-at-sunset.jpg',
  'sun-over-headland-sunset.jpg',
]

const webpName = (file) => file.replace(/\.(jpe?g)$/i, '.webp')

async function toWebp(file, { maxSide, quality }) {
  const input = path.join(IMG_DIR, file)
  const output = path.join(IMG_DIR, webpName(file))
  // Originals are deleted after conversion, so a missing input just means it was
  // already processed in a previous run. Skip it rather than failing the whole batch.
  if (!(await exists(input))) {
    console.log(`  ${webpName(file)}  (skipped — original already converted)`)
    return
  }
  await sharp(input)
    .rotate() // respect EXIF orientation
    .resize({ width: maxSide, height: maxSide, fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toFile(output)
  const { size } = await stat(output)
  console.log(`  ${webpName(file)}  ${(size / 1024).toFixed(0)} KB`)
}

async function run() {
  console.log('Converting referenced images to WebP...')
  // Full-bleed images (hero background, About portrait) need more resolution;
  // gallery photos render in a 2-column grid so ~1400px is plenty even on retina.
  const largeDisplay = new Set(['hero.jpeg', 'veli-bol-pride.jpeg'])
  for (const file of referenced) {
    const opts = file === 'hero.jpeg'
      ? { maxSide: 2000, quality: 68 } // LCP element — keep it light
      : largeDisplay.has(file)
        ? { maxSide: 1600, quality: 74 }
        : { maxSide: 1400, quality: 72 }
    await toWebp(file, opts)
  }

  // Social share image + apple touch icon are derived from the hero. Only regenerate
  // them when the hero original is present (it is deleted after the first run).
  const heroSrc = path.join(IMG_DIR, 'hero.jpeg')
  if (await exists(heroSrc)) {
    // Social share image (Open Graph / Twitter). 1200x630 JPEG for max compatibility.
    console.log('Generating og-image.jpg (1200x630)...')
    await sharp(heroSrc)
      .rotate()
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(PUBLIC_DIR, 'og-image.jpg'))

    // Apple touch icon — 180x180 PNG derived from the hero.
    console.log('Generating apple-touch-icon.png (180x180)...')
    await sharp(heroSrc)
      .rotate()
      .resize({ width: 180, height: 180, fit: 'cover', position: 'attention' })
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'))
  }

  // Remove every original JPEG/JPG (referenced ones are now WebP; the rest were
  // unused duplicates). This reclaims ~190 MB from the repo.
  console.log('Removing original JPEG/JPG files...')
  const all = await readdir(IMG_DIR)
  let removed = 0
  for (const file of all) {
    if (/\.(jpe?g)$/i.test(file)) {
      await unlink(path.join(IMG_DIR, file))
      removed++
    }
  }
  console.log(`Removed ${removed} original files.`)
  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
