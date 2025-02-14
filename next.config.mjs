/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SSR features
  reactStrictMode: true,
  // Use static export mode
  output: "export",
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
