import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
    removeConsole: process.env.NODE_ENV === "production",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    additionalData: async (content: string, loaderContext: any) => {
      const { resourcePath } = loaderContext;

      // Normalize path for consistent checking across platforms
      const normalizedPath = resourcePath.replace(/\\/g, "/");

      // Skip injection for theme definition files to prevent circular dependencies
      const isThemeFile =
        normalizedPath.includes("/theme/scss/colors.scss") ||
        normalizedPath.includes("/theme/scss/shadows.scss") ||
        normalizedPath.includes("/theme/scss/typography.scss") ||
        normalizedPath.includes("/theme/scss/spacing.scss");

      if (isThemeFile) {
        return content;
      }

      // Inject theme imports for all other SCSS files
      return `@use "src/theme/scss/colors.scss" as *;
@use "src/theme/scss/shadows.scss" as *;
@use "src/theme/scss/typography.scss" as *;
@use "src/theme/scss/spacing.scss" as *;

${content}`;
    },
  },
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/icons-material", "phosphor-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
