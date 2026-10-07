import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
  compiler: { styledComponents: true },
  turbopack: { root: process.cwd() },
};
export default nextConfig;
