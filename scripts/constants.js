const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

const REGISTRY_DIR = path.join(ROOT_DIR, "data");
const DAPPS_PATH = path.join(REGISTRY_DIR, "dapps.json");
const WALLETS_PATH = path.join(REGISTRY_DIR, "wallets.json");

const LOGOS_DIR = path.join(ROOT_DIR, "logos");
const LOGOS_LG_DIR = path.join(LOGOS_DIR, "lg");
const LOGOS_MD_DIR = path.join(LOGOS_DIR, "md");
const LOGOS_SM_DIR = path.join(LOGOS_DIR, "sm");

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
  LOGOS_LG_DIR,
  LOGOS_MD_DIR,
  LOGOS_SM_DIR,
  VALID_ARGS,
  VALID_TYPES,
  VALID_FORMATS,
  EMPTY_ENTRY,
};
