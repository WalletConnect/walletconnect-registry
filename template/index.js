module.exports = {
  logo: "./logo.jpg", // REQUIRED (location of the logo - png or jpg)
  name: "WalletConnect", // REQUIRED
  homepage: "https://walletconnect.org", // REQUIRED
  chains: ["eip155:1"], // REQUIRED
  app: {
    // REQUIRED (at least one)
    browser: "https://example.walletconnect.org",
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
