import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  // Only the development server registers page.dev.tsx document routes.
  pageExtensions: ["tsx", "ts", "jsx", "js", ...(process.env.NODE_ENV === "development" ? ["dev.tsx"] : [])],
  trailingSlash: true,
  reactCompiler: true,
  compiler: { styledComponents: true },
  turbopack: { root: process.cwd() },
};
export default nextConfig;
