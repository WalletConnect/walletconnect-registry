const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

const REGISTRY_DIR = path.join(ROOT_DIR, "data");
const DAPPS_PATH = path.join(REGISTRY_DIR, "dapps.json");
const WALLETS_PATH = path.join(REGISTRY_DIR, "wallets.json");

const LOGOS_DIR = path.join(ROOT_DIR, "logos");
const LARGE_DIR = path.join(LOGOS_DIR, "large");
const SMALL_DIR = path.join(LOGOS_DIR, "small");

const VALID_ARGS = ["type", "filePath"];
const VALID_TYPES = ["wallet", "dapp"];
const VALID_FORMATS = ["jpeg", "jpg", "png"];

const EMPTY_ENTRY = {
  id: "",
  name: "",
  homepage: "",
  chains: [],
  app: {
    browser: "",
    ios: "",
    android: "",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "",
    universal: "",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "",
    colors: {
      primary: "",
      secondary: "",
    },
  },
};

module.exports = {
  ROOT_DIR,
  REGISTRY_DIR,
  DAPPS_PATH,
  WALLETS_PATH,
  LOGOS_DIR,
  LARGE_DIR,
  SMALL_DIR,
  VALID_ARGS,
  VALID_TYPES,
  VALID_FORMATS,
  EMPTY_ENTRY,
};
