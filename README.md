# 株式会社新栄テクニカ — サイトリニューアル（Phase 1）

金型トラブルの原因特定から修理・設変まで対応する新栄テクニカのコーポレートサイト。
1ドメインに2つの入口（金型 80% / ENTOEN 20%）。

## 技術スタック

- **Astro 5** — 静的サイトジェネレーター
- **microCMS** — ブログ・実績・お客様の声（未設定時はダミーデータで動作）
- **Netlify** — ホスティング（Netlify Forms で写真添付対応）

## ローカル開発

```bash
# 1. 依存パッケージのインストール
npm install

# 2. 開発サーバーの起動
npm run dev
# → http://localhost:4321/ で確認

# 3. 本番ビルド（dist/ に出力）
npm run build

# 4. ビルド結果のプレビュー
npm run preview
```

## 環境変数

`.env.example` を `.env` にコピーして値を設定してください。
未設定でもダミーデータでビルド・開発できます。

| 変数名 | 必須 | 説明 |
|---|---|---|
| `MICROCMS_SERVICE_DOMAIN` | 任意 | microCMS サービスドメイン |
| `MICROCMS_API_KEY` | 任意 | microCMS API キー |
| `CONTENT_SOURCE` | 任意 | `dummy` で強制ダミー / `microcms` で強制API |
| `PUBLIC_GA4_ID` | 任意 | Google Analytics 4 測定ID |

## Netlify デプロイ

1. GitHub リポジトリを Netlify に接続
2. ビルドコマンド: `npm run build`
3. 公開ディレクトリ: `dist`
4. 環境変数を Netlify の Environment Variables に設定

### デプロイフック（microCMS 自動再ビルド）

1. Netlify → Site settings → Build & deploy → Build hooks → Add build hook
2. 生成されたURL を microCMS → API 設定 → Webhook に登録
3. microCMS でコンテンツ更新 → 自動で再ビルド・デプロイ

### フォーム受信メール

Netlify → Forms → Form notifications でメール受信先を設定してください。
- `mold-consultation` — 金型相談フォーム
- `entoen-intake` — 循環・製品化のご相談

## 設定ファイルの編集

`src/config/site.ts` に会社情報・SEO・メニュー・CTA などを集約しています。
非エンジニアの方でも編集できるようコメント付きです。

## ランニング費用・ロックイン

| 項目 | 費用 | 備考 |
|---|---|---|
| Netlify（Starter） | 無料 | 月100GBまで。商用利用可 |
| microCMS（Hobby） | 無料 | 3APIまで。コンテンツ量に応じてプラン変更 |
| ドメイン | 年額1,000〜3,000円程度 | 既存ドメイン流用 |
| Google Analytics | 無料 | |

- Astro は静的HTMLを生成するため、Netlify 以外（Vercel, Cloudflare Pages 等）への移行も容易です
- microCMS のコンテンツは API 経由でエクスポート可能です
