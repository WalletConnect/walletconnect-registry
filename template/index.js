const path = require("path");

module.exports = {
  // REQUIRED (location of the logo - png or jpg)
  logo: path.join(__dirname, "trinity.png"),
  // REQUIRED
  name: "Trinity Feeds",
  // REQUIRED
  description: "",
  // REQUIRED
  homepage: "https://www.trinity-feeds.app/",
  // REQUIRED
  chains: ["eip155:1"],
  // REQUIRED
  versions: ["1"],
  // REQUIRED (at least one)
  app: {
    browser: "",
    ios: "https://apps.apple.com/us/app/trinity-feeds/id1546436333",
    android:
      "https://play.google.com/store/apps/details?id=io.trinitytech.dapp.feeds",
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
    shortName: "Feeds",
    colors: {
      primary: "#368bff",
      secondary: "#a067ff",
    },
  },
};
