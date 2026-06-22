/** @type {import('next').NextConfig} */
// Use `npm run dev` (Turbopack) instead of webpack dev — avoids corrupt `.next` chunks
// (`Cannot find module './611.js'`, `__webpack_modules__[moduleId] is not a function`).
// If you must use webpack in dev: `npm run dev:webpack` after `npm run clean`.
const nextConfig = {
  images: {
    domains: [],
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


