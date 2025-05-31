import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;

<!-- 2025-03-13T06:55:46+05:30 -->
<!-- 2025-03-28T08:44:50+05:30 -->
<!-- 2025-04-13T23:34:53+05:30 -->
<!-- 2025-06-01T05:08:07+05:30 -->