/** @type {import('next').NextConfig} */
const nextConfig = {
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
