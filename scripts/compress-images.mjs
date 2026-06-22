import { readdir, stat, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import sharp from 'sharp'

const ROOT = new URL('../public/images', import.meta.url).pathname

/** Full-quality live hero — never resize or recompress. */
const SKIP_FILES = new Set(['main.png'])

const HERO_FILES = new Set(['hero-cover.webp'])

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath))
    } else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

function maxWidthFor(filePath) {
  const name = filePath.split('/').pop() ?? ''
  if (HERO_FILES.has(name)) {
    return 1320
  }
  return 840
}

async function compressFile(filePath) {
  const name = filePath.split('/').pop() ?? ''
  const before = (await stat(filePath)).size

  if (SKIP_FILES.has(name)) {
    return { filePath, before, after: before, skipped: true, protected: true }
  }

  const maxWidth = maxWidthFor(filePath)
  const ext = filePath.split('.').pop()?.toLowerCase() ?? 'png'

  let pipeline = sharp(filePath).rotate().resize({
    width: maxWidth,
    withoutEnlargement: true,
  })

  let output
  if (ext === 'jpg' || ext === 'jpeg') {
    output = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer()
  } else if (ext === 'webp') {
    output = await pipeline.webp({ quality: 82 }).toBuffer()
  } else {
    output = await pipeline.png({ compressionLevel: 9, palette: false }).toBuffer()
  }

  if (output.length >= before) {
    return { filePath, before, after: before, skipped: true }
  }

  await writeFile(filePath, output)
  return { filePath, before, after: output.length, skipped: false }
}

const files = await collectFiles(ROOT)
let saved = 0

for (const file of files) {
  const result = await compressFile(file)
  const rel = relative(ROOT, result.filePath)
  if (result.protected) {
    console.log(`skip ${rel} (protected full-quality hero)`)
  } else if (result.skipped) {
    console.log(`skip ${rel} (${(result.before / 1024).toFixed(0)} KB, no gain)`)
  } else {
    saved += result.before - result.after
    console.log(
      `ok   ${rel}: ${(result.before / 1024).toFixed(0)} KB → ${(result.after / 1024).toFixed(0)} KB`,
    )
  }
}

console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(2)} MB`)
