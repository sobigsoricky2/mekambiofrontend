/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: ["test.skg-walldorf.de"],
     unoptimized: true,
  },
  // eslint: { ignoreDuringBuilds: true },

};

module.exports = nextConfig;
