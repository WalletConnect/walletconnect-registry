const path = require("path");

module.exports = {
  // REQUIRED (location of the logo - png or jpg)
  logo: path.join(__dirname, "fuse.png"),
  // REQUIRED
  name: "fuse.cash",
  // REQUIRED
  homepage: "https://fuse.cash/",
  // REQUIRED
  chains: ["eip155:122"],
  // REQUIRED (at least one)
  app: {
    browser: "",
    ios: "https://apps.apple.com/us/app/fuse-cash/id1559937899",
    android: "https://play.google.com/store/apps/details?id=io.fuse.cash",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "fuse.cash:",
    universal: "https://app.fuse.cash/",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "fuse.cash",
    colors: {
      primary: "#37D888",
      secondary: "#37D888",
    },
  },
};
