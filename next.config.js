/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{
      source: "/j/search_subjects",
      destination: "https://movie.douban.com/j/search_subjects",
    }];
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**.doubanio.com"
    }]
  }
};


module.exports = nextConfig
