const path = require("path");

module.exports = {
  // REQUIRED (location of the logo - png or jpg)
  logo: path.join(__dirname, "poh.png"),
  // REQUIRED
  name: "Proof of Humanity",
  // REQUIRED
  homepage: "https://proofofhumanity.id/",
  // REQUIRED
  chains: ["eip155:1"],
  // REQUIRED (at least one)
  app: {
    browser: "https://app.proofofhumanity.id/",
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
