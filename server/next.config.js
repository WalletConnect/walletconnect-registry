module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  images: {
    domains: ['walletconnect.org', 'github.com'],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    DAPP_REGISTRY_URI: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-registry/master/data/dapps.json',
    WALLET_REGISTRY_URI: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-registry/master/data/wallets.json',
    LOGO_BASE_URI: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-registry/master/logos/',
    WALLET_CONNECT_GITHUB_URL: 'https://github.walletconnect.org/',
    WALLET_CONNECT_DOCS_URL: 'https://docs.walletconnect.org/'
  },
}