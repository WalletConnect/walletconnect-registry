const { readFile, writeFile } = require("fs/promises");

async function readJson(filePath) {
  const file = await readFile(filePath);
  return JSON.parse(file.toString());
}

async function writeJson(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2));
}

async function updateJson(filePath, update) {
  let json = await readJson(filePath);
  await writeJson(filePath, { ...json, ...update });
}

module.exports = { readJson, writeJson, updateJson };
