const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

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
  EMPTY_ENTRY,
};
