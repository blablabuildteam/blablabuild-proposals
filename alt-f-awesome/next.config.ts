import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.resolve(root, "..");

const nextConfig: NextConfig = {
  turbopack: {
    root: monorepoRoot,
    resolveAlias: {
      "@foundation": path.join(monorepoRoot, "foundation/src"),
    },
  },
};

export default nextConfig;
