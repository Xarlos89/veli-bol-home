// Writes dist/sitemap.xml after the build, so lastmod is never stale and the
// image list is taken from the page that actually shipped rather than kept in
// sync by hand. Image entries help the photos surface in Google Images, which
// is a real source of traffic for a tour operator.
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://excursion-veli-bol.com'
const DIST = path.resolve('dist')

const html = await readFile(path.join(DIST, 'index.html'), 'utf-8')

// Pull every distinct image the prerendered page references, along with the alt
// text sitting on the same tag, which becomes the image caption.
const images = new Map()
for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
  const src = tag.match(/\bsrc="([^"]+\.(?:webp|jpe?g|png))"/)?.[1]
  if (!src || !src.startsWith('/images/')) continue
  const alt = tag.match(/\balt="([^"]*)"/)?.[1] ?? ''
  if (!images.has(src)) images.set(src, alt)
}

const escapeXml = (value) =>
  value.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]))

const lastmod = new Date().toISOString().slice(0, 10)

const imageEntries = [...images]
  .map(
    ([src, alt]) =>
      `    <image:image>\n` +
      `      <image:loc>${SITE_URL}${src}</image:loc>\n` +
      (alt ? `      <image:title>${escapeXml(alt)}</image:title>\n` : '') +
      `    </image:image>`,
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${imageEntries}
  </url>
</urlset>
`

await writeFile(path.join(DIST, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml written — lastmod ${lastmod}, ${images.size} images`)
