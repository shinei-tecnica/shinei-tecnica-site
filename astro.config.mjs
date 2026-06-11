// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site.ts";

// ─────────────────────────────────────────────────────────────
// Astro 設定
// site: 本番URL（sitemap / 正規URL / OGPの絶対URL生成に使用）
//   → 変更が必要な場合は src/config/site.ts の SITE.url を編集してください
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: SITE.url,
  trailingSlash: "always",
  integrations: [
    sitemap({
      // noindex 対象（フォームのthanks等）は必要に応じて filter で除外
      filter: (page) => !page.includes("/thanks/"),
    }),
  ],
});
