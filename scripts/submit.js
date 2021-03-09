const path = require("path");
const { readFile, writeFile } = require("fs/promises");

const hash = require("./hash");
const { ROOT_DIR, EMPTY_ENTRY } = require("./constants");
const { validateArgs, validateEntry } = require("./validate");

async function readJson(filePath) {
  const file = await readFile(filePath);
  return JSON.parse(file.toString());
}

async function writeJson(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2));
}

async function submit() {
  const args = process.argv.slice(2);
  validateArgs(args);
  const registryPath = path.join(ROOT_DIR, "data", `${args[0]}.json`);
  console.log(registryPath);
  const entry = require(path.join(ROOT_DIR, args[1]));
  validateEntry(entry);
  const id = hash(entry.homepage);
  console.log(id);
  const logoSrc = entry.logo;
  delete entry.logo;
  const app = { ...EMPTY_ENTRY, ...entry, id };
  console.log(app);
  const logo = await readFile(logoSrc);
  const registry = await readJson(registryPath);
  registry[id] = app;
  await writeJson(registryPath, registry);
  const logoPath = path.join(ROOT_DIR, "logos", id + path.extname(logoSrc));
  await writeFile(logoPath, logo);
}

submit();
