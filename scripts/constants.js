const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const DATA_DIR = path.join(PUBLIC_DIR, "data");
const DAPPS_PATH = path.join(DATA_DIR, "dapps.json");
const WALLETS_PATH = path.join(DATA_DIR, "wallets.json");

const LOGO_DIR = path.join(PUBLIC_DIR, "logo");
const LOGO_LG_DIR = path.join(LOGO_DIR, "lg");
const LOGO_MD_DIR = path.join(LOGO_DIR, "md");
const LOGO_SM_DIR = path.join(LOGO_DIR, "sm");

const VALID_SUBMIT_ARGS = ["type", "filePath"];
const VALID_REPLACE_ARGS = ["id", "filePath"];
const VALID_TYPES = ["wallet", "dapp"];
const VALID_FORMATS = ["jpeg", "jpg", "png"];

const EMPTY_ENTRY = {
  id: "",
  name: "",
  description: "",
  homepage: "",
  chains: [],
  versions: [],
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
  PUBLIC_DIR,
  DATA_DIR,
  DAPPS_PATH,
  WALLETS_PATH,
  LOGO_DIR,
  LOGO_LG_DIR,
  LOGO_MD_DIR,
  LOGO_SM_DIR,
  VALID_SUBMIT_ARGS,
  VALID_REPLACE_ARGS,
  VALID_TYPES,
  VALID_FORMATS,
  EMPTY_ENTRY,
};
