/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all remote images for now, can be restricted to Supabase later
      },
    ],
  },
};

export default nextConfig;
