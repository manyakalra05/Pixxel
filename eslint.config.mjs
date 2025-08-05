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
<!-- 2025-06-07T03:53:08+05:30 -->
<!-- 2025-08-07T00:18:18+05:30 -->
<!-- Update 2024-11-25T18:25:17+05:30 -->
<!-- Update 2025-06-04T17:28:57+05:30 -->
<!-- Update 2025-06-14T14:52:58+05:30 -->
<!-- Update 2025-08-03T10:06:09+05:30 -->
<!-- Update 2025-09-13T12:46:15+05:30 -->
<!-- Update 2025-01-17T08:13:50+05:30 -->
<!-- Update 2025-01-21T11:25:51+05:30 -->
<!-- Update 2025-02-07T11:41:01+05:30 -->
<!-- Update 2025-04-17T11:46:44+05:30 -->
<!-- Update 2025-04-18T14:30:46+05:30 -->
<!-- Update 2025-06-25T10:44:12+05:30 -->
<!-- Update 2025-06-28T07:55:15+05:30 -->
<!-- Update 2025-07-01T18:44:21+05:30 -->
<!-- Update 2025-08-05T15:23:37+05:30 -->
<!-- Update 2025-08-05T11:36:37+05:30 -->