/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retired news posts: send old links (including search results) to the News page instead of a 404
  async redirects() {
    return [
      'hyderabad-chapter-expansion',
      'volunteer-spotlight-coach-sarah',
      'crossover-cup-2025-recap',
      'tedx-talk-basketball-education-india',
    ].map((slug) => ({ source: `/news/${slug}`, destination: '/news', permanent: true }))
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
      },
      {
        protocol: 'https',
        hostname: 'dl.dropboxusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
