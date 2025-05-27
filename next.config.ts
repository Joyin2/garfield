const nextConfig = {
  // Your existing configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add this image configuration
  images: {
    domains: [],
    // Ensure images are properly handled during build
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
