const path = require("path");
const sharp = require("sharp");

const {
  LOGO_LG_DIR,
  LOGO_MD_DIR,
  LOGO_SM_DIR,
  VALID_FORMATS,
} = require("./constants");

const LOGO_SIZES = { lg: 400, md: 120, sm: 60 };
const RESIZE_OPTIONS = { fit: "inside" };
const FLATTEN_OPTIONS = { background: { r: 255, g: 255, b: 255 } };

function getLogoFormat(logoPath) {
  return path.extname(logoPath).toLowerCase().replace(".", "");
}

async function readLogo(logoPath) {
  return sharp(logoPath);
}

async function writeLogo(logo, size, directory, id) {
  const filePath = path.join(directory, `${id}.jpeg`);
  await logo
    .resize(size, size, RESIZE_OPTIONS)
    .flatten(FLATTEN_OPTIONS)
    .jpeg()
    .toFile(filePath);
}

async function saveLogo(logoPath, id) {
  const format = getLogoFormat(logoPath);
  if (!VALID_FORMATS.includes(format)) {
    throw new Error(`Invalid logo file format: ${format}`);
  }
  if (typeof id === "undefined") {
    throw new Error("Missing id to write logo");
  }
  const logo = await readLogo(logoPath);
  try {
    await writeLogo(logo, LOGO_SIZES.lg, LOGO_LG_DIR, id);
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to write logo for Large size: ${id}`);
  }
  try {
    await writeLogo(logo, LOGO_SIZES.md, LOGO_MD_DIR, id);
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to write logo for Medium size: ${id}`);
  }
  try {
    await writeLogo(logo, LOGO_SIZES.sm, LOGO_SM_DIR, id);
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to write logo for Small size: ${id}`);
  }
}

module.exports = {
  getLogoFormat,
  readLogo,
  writeLogo,
  saveLogo,
};
