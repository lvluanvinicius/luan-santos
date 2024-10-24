/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["api.ts", "api.tsx", "md.ts", "page.tsx"],
  images: {
    remotePatterns: [
      {
        hostname: "luansantos.luxesoftwares.com.br",
      },
      {
        hostname: "luxesoftwares.com.br",
      },
    ],
  },
};

module.exports = nextConfig;
