const { validateEntry } = require("./validate");
const { updateJson } = require("./json");
const { getId } = require("./hash");
const { WALLETS_PATH, DAPPS_PATH, EMPTY_ENTRY } = require("./constants");

function getRegistryPath(type) {
  switch (type.toLowerCase()) {
    case "wallet":
      return WALLETS_PATH;
    case "dapp":
      return DAPPS_PATH;
    default:
      throw new Error(`Invalid or unknown registry type: ${type}`);
  }
}

async function updateRegistry(type, app) {
  const registryPath = getRegistryPath(type);
  await updateJson(registryPath, { [app.id]: app });
  console.log(app);
}

async function saveEntry(type, entry) {
  validateEntry(entry);
  const app = { ...EMPTY_ENTRY, ...entry, id: getId(entry) };
  delete app.logo;
  await updateRegistry(type, app);
  return app.id;
}

module.exports = {
  getRegistryPath,
  updateRegistry,
  saveEntry,
};
