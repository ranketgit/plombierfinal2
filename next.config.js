/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect /[province]/[commune] to /plombier-[commune]
      {
        source: '/:province/:commune',
        destination: '/plombier-:commune',
        permanent: true,
      },
      // Redirect /[province] to /plombiers-province-[province]
      {
        source: '/:province',
        destination: '/plombiers-province-:province',
        permanent: true,
      },
      // Redirect /[ville] to /plombiers-province-[province]
      {
        source: '/:ville',
        destination: '/plombiers-province-:ville',
        permanent: true,
      },
      // Redirect /[ville]/[commune] to /plombier-[commune]
      {
        source: '/:ville/:commune',
        destination: '/plombier-:commune',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 