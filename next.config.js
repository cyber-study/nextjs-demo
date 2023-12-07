/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [{
      source: "/api/:path*",
      destination: "http://localhost:18652/api/:path*"
    }]
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**.doubanio.com"
    }]
  }
};


module.exports = nextConfig
