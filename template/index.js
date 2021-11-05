const path = require("path");

module.exports = {
  // REQUIRED (location of the logo - png or jpg)
  logo: path.join(__dirname, "tyrell.png"),
  // REQUIRED
  name: "Tyrell-Yutani HUB",
  // REQUIRED
  description: "",
  // REQUIRED
  homepage: "https://tyrell-yutani.app",
  // REQUIRED
  chains: ["eip155:1"],
  // REQUIRED
  versions: ["1"],
  // REQUIRED (at least one)
  app: {
    browser: "https://tyrell-yutani.app",
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
    shortName: "TY_HUB",
    colors: {
      primary: "#fff",
      secondary: "#000",
    },
  },
};
