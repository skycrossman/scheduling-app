/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rationalistmegameetup.com",
      },
    ],
  },
};

module.exports = nextConfig;
