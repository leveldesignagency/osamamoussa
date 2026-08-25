/** @type {import('next').NextConfig} */
// Use `npm run dev` (Turbopack) instead of webpack dev — avoids corrupt `.next` chunks
// (`Cannot find module './611.js'`, `__webpack_modules__[moduleId] is not a function`).
// If you must use webpack in dev: `npm run dev:webpack` after `npm run clean`.
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/da-vinci",
        destination: "/procedures/robotic-surgery",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig


