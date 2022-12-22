/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
})
const nextConfig =withPWA( {
  reactStrictMode: true,
  
  
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  // eslint: { ignoreDuringBuilds: true },

});

module.exports = nextConfig;
