/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cloud.markethubtz.com',
            pathname: '/**',
          },
        ]
    }
};

export default nextConfig;
