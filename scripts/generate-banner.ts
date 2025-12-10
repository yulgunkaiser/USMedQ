import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import sharp from 'sharp'

async function main() {
  const svgPath = new URL('../src/assets/topbanner.svg', import.meta.url)
  const svg = readFileSync(svgPath)

  const outPath = new URL('../public/topbanner.png', import.meta.url)
  mkdirSync(dirname(outPath), { recursive: true })

  const width = 1536 // Tailwind container max at 2xl
  const png = await sharp(svg).png({ quality: 90 }).resize({ width }).toBuffer()
  writeFileSync(outPath, png)
  console.log('Generated', outPath.pathname)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
