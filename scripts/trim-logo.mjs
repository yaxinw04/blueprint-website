import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const images = path.join(root, "public/images");
const app = path.join(root, "src/app");
const logo = path.join(images, "logo.png");

const trimmedBuf = await sharp(logo).trim({ threshold: 10 }).png().toBuffer();
await sharp(trimmedBuf).toFile(path.join(images, "logo-trimmed.png"));

const { data, info } = await sharp(trimmedBuf)
  .raw()
  .ensureAlpha()
  .toBuffer({ resolveWithObject: true });
const { width, height } = info;

// Stop before BLUEPRINT wordmark (~y541)
const iconCutoffY = 546;

let minX = width;
let minY = iconCutoffY;
let maxX = 0;
let maxY = 0;

for (let y = 0; y < iconCutoffY; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    if (data[i + 3] > 8) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
}

const padX = 28;
const padTop = 24;
const padBottom = 48;

const extractLeft = Math.max(0, minX - padX);
const extractTop = Math.max(0, minY - padTop);
const extractWidth = Math.min(width - extractLeft, maxX - minX + 1 + padX * 2);
const extractHeight = maxY - extractTop + 1;

const markBuf = await sharp(trimmedBuf)
  .extract({
    left: extractLeft,
    top: extractTop,
    width: extractWidth,
    height: extractHeight,
  })
  .extend({
    bottom: padBottom,
    left: 0,
    right: 0,
    top: 0,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const markMeta = await sharp(markBuf).metadata();
await sharp(markBuf).toFile(path.join(images, "logo-mark.png"));

await sharp(markBuf)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(app, "icon.png"));
await sharp(markBuf)
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(app, "apple-icon.png"));

console.log(
  `Updated logo assets (mark: ${markMeta.width}x${markMeta.height}, bbox y=${minY}-${maxY})`,
);
