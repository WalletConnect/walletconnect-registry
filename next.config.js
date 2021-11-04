module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
      {
        // matching logo API route
        source: "/api/logo/:path*",
        headers: [{ key: "Content-Type", value: "image/jpeg" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://walletconnect.com/registry/apps",
        permanent: true,
      },
      {
        source: "/apps",
        destination: "https://walletconnect.com/registry/apps",
        permanent: true,
      },
      {
        source: "/wallets",
        destination: "https://walletconnect.com/registry/wallets",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["walletconnect.org", "github.com"],
  },
};
