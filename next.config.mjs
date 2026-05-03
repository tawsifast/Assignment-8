/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        port: '',
      },
       {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile images
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com", // fallback
      },
    ],
  },
};

export default nextConfig;
