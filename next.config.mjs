/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/cvip2025",
  assetPrefix: "/cvip2025",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Use true for permanent redirects (HTTP 308)
      },
    ];
  },
};

export default nextConfig;
