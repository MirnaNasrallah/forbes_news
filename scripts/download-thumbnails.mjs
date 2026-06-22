import { access, copyFile, mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public/images/thumbnails')

/** Same photo IDs as utils/thumbnail.ts — one file per category slot. */
const CATEGORY_PHOTOS = {
  'world-news': [
    '1504711434969-e33886168f5c',
    '1495020689067-958852a7765e',
    '1586339949912-3e9457bef6d3',
  ],
  politics: [
    '1541873676-a181c7573a10',
    '1529107386315-e1a2cc48a620',
    '1560250097-0b93528c311a',
  ],
  business: [
    '1486406146926-c627a92ad1ab',
    '1611976080085-c1b1fe091b8d',
    '1454165804606-c3d57bc86b40',
  ],
  technology: [
    '1518770660439-4636190af475',
    '1531297484001-80022131f5a1',
    '1550751827-4bd374c3f58b',
  ],
  health: [
    '1576091160399-112ba8d25d1d',
    '1631217868264-e5b90cc5f789',
    '1579684385127-1ef15d508118',
  ],
  sports: [
    '1461896836934-ffe607ba8211',
    '1574629810360-7efbbebb072f',
    '1517649763962-0c62306601b7',
  ],
  culture: [
    '1531243269734-3525739266fa',
    '1560174037-f81f34bbd2f8',
    '1549880181-3a089cf5b1a8',
  ],
  podcast: [
    '1478737270248-4fd7fe40b07c',
    '1590602847861-f95a9c4f6b3c',
    '1589903308904-0d3ebf9f9490',
  ],
}

async function download(url, dest) {
  const response = await fetch(url, { redirect: 'follow' })
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(dest, buffer)
}

await mkdir(outDir, { recursive: true })

let ok = 0
let failed = 0

for (const [category, photoIds] of Object.entries(CATEGORY_PHOTOS)) {
  for (let i = 0; i < photoIds.length; i++) {
    const photoId = photoIds[i]
    const filename = `${category}-${i + 1}.jpg`
    const dest = join(outDir, filename)
    const url = `https://images.unsplash.com/photo-${photoId}?w=800&h=500&fit=crop&q=80&auto=format`

    try {
      await download(url, dest)
      console.log(`✓ ${filename}`)
      ok += 1
    } catch (error) {
      console.error(`✗ ${filename}:`, error.message)
      failed += 1
    }
  }
}

// Fill any missing slots by copying the first successful image in that category.
for (const category of Object.keys(CATEGORY_PHOTOS)) {
  const first = join(outDir, `${category}-1.jpg`)
  for (let i = 1; i <= 3; i++) {
    const dest = join(outDir, `${category}-${i}.jpg`)
    try {
      await access(dest)
    } catch {
      try {
        await copyFile(first, dest)
        console.log(`↪ filled ${category}-${i}.jpg from ${category}-1.jpg`)
      } catch {
        // category has no downloads at all — skip
      }
    }
  }
}

console.log(`\nDone: ${ok} downloaded, ${failed} failed → ${outDir}`)
