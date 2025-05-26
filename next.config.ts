const nextConfig = {
  // Your existing configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will completely bypass TypeScript checking during builds
    // Use with caution as it may hide real issues
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
