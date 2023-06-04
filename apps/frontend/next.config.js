/** @type {import('next').NextConfig} */
const path = require("path");

const securityHeaders = [
{
  key: 'Content-Security-Policy',
  value: "upgrade-insecure-requests"
},
]

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    transpilePackages: ["ui"],
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
