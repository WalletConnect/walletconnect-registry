const path = require("path");

module.exports = {
  // REQUIRED (location of the logo - png or jpg)
  logo: path.join(__dirname, "julwallet.png"),
  // REQUIRED
  name: "JulWallet",
  // REQUIRED
  homepage: "https://justliquidity.org/",
  // REQUIRED
  chains: [
    "eip155:1",
    "eip155:3",
    "eip155:4",
    "eip155:5",
    "eip155:42",
    "eip155:56",
    "eip155:88",
    "eip155:128",
    "eip155:137",
    "eip155:250",
  ],
  // REQUIRED (at least one)
  app: {
    browser:
      "https://chrome.google.com/webstore/detail/julwallet/fgkldlaelopgncepgpncndebgdddikii?hl=en-US",
    ios: "https://apps.apple.com/app/julwallet/id1555914591",
    android: "https://play.google.com/store/apps/details?id=julwallet.com",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "julwallet:",
    universal: "https://justliquidity.org/",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "JulWallet",
    colors: {
      primary: "#c84ce4",
      secondary: "#3f00ff",
    },
  },
};
