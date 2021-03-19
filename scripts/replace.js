const { validateReplaceArgs } = require("./validate");
const { saveLogo } = require("./logo");

async function replace() {
  const args = process.argv.slice(2);
  validateReplaceArgs(args);
  const [id, logoPath] = args;
  await saveLogo(logoPath, id);
  console.log(`\nSuccessfully replaced logo with id: ${id}!!!`);
}

replace();
