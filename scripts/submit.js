const path = require("path");

const { validateSubmitArgs } = require("./validate");
const { saveLogo } = require("./logo");
const { saveEntry } = require("./registry");
const { ROOT_DIR } = require("./constants");

async function submit() {
  const args = process.argv.slice(2);
  validateSubmitArgs(args);
  const [type, entryPath] = args;
  const entry = require(path.join(ROOT_DIR, entryPath));
  const id = await saveEntry(type, entry);
  await saveLogo(entry.logo, id);
  console.log(`\nSuccessfully submitted ${type} named: ${entry.name}!!!`);
}

submit();
