const path = require("path");

module.exports = {
  // REQUIRED (location of the logo - png or jpg)
  logo: path.join(__dirname, "logo.jpg"),
  // REQUIRED
  name: "WalletConnect",
  // REQUIRED
  description: "Open protocol connecting wallets to dapps",
  // REQUIRED
  homepage: "https://walletconnect.com",
  // REQUIRED
  chains: ["eip155:1"],
  // REQUIRED
  versions: ["1"],
  // REQUIRED (at least one)
  app: {
    browser: "https://react-app.walletconnect.com",
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
