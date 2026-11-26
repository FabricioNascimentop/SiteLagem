/** @type {import('next').NextConfig} */
const nextConfig = {\n  experimental: {\n    serverActions: {\n      bodySizeLimit: '8mb',\n    },\n  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
}

module.exports = nextConfig
