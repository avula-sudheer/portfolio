const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = (phase) => ({
  ...nextConfig,
  // Keep production builds from replacing a running development server's assets.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
})
