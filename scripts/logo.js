const path = require("path");
const sharp = require("sharp");

const { LARGE_DIR, SMALL_DIR, VALID_FORMATS } = require("./constants");

const LARGE_SIZE = 400;
const SMALL_SIZE = 120;
const RESIZE_OPTIONS = { fit: "inside" };

function getLogoFormat(logoPath) {
  return path.extname(logoPath).toLowerCase().replace(".", "");
}

async function readLogo(logoPath) {
  return sharp(logoPath);
}

async function writeLogo(logo, size, directory, id) {
  const filePath = path.join(directory, `${id}.jpeg`);
  await logo.resize(size, size, RESIZE_OPTIONS).jpeg().toFile(filePath);
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
    await writeLogo(logo, LARGE_SIZE, LARGE_DIR, id);
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to write logo for Large size: ${id}`);
  }
  try {
    await writeLogo(logo, SMALL_SIZE, SMALL_DIR, id);
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
