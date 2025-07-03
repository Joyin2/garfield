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
    domains: ['lh3.googleusercontent.com'],
    // Ensure images are properly handled during build
    unoptimized: true,
  },
};

export default nextConfig;
