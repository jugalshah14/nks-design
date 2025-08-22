/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.newkolkata.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
