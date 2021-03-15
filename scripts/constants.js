const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

const REGISTRY_DIR = path.join(ROOT_DIR, "data");
const DAPPS_PATH = path.join(REGISTRY_DIR, "dapps.json");
const WALLETS_PATH = path.join(REGISTRY_DIR, "wallets.json");

const LOGO_DIR = path.join(ROOT_DIR, "logo");
const LOGO_LG_DIR = path.join(LOGO_DIR, "lg");
const LOGO_MD_DIR = path.join(LOGO_DIR, "md");
const LOGO_SM_DIR = path.join(LOGO_DIR, "sm");

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
  LOGO_DIR,
  LOGO_LG_DIR,
  LOGO_MD_DIR,
  LOGO_SM_DIR,
  VALID_ARGS,
  VALID_TYPES,
  VALID_FORMATS,
  EMPTY_ENTRY,
};
