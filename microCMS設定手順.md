# microCMS 設定手順

## 1. アカウント作成

1. https://microcms.io/ でアカウント作成
2. サービスを作成（サービスID = `.env` の `MICROCMS_SERVICE_DOMAIN` に設定する値）

## 2. API の作成

以下の3つの API を「リスト形式」で作成してください。

### API: `blogs`

| フィールドID | 表示名 | 種類 | 必須 |
|---|---|---|---|
| title | タイトル | テキストフィールド | ○ |
| category | カテゴリ | セレクトフィールド | ○ |
| publishedDate | 公開日 | 日付 | ○ |
| eyecatch | アイキャッチ | 画像 | |
| body | 本文 | リッチエディタ | ○ |
| metaDescription | meta説明文 | テキストフィールド | |
| ctaType | CTA種別 | セレクトフィールド | |

**category の選択肢:**
- 金型修理事例
- 技術記事
- お知らせ
- ENTOEN
- メディア掲載

**ctaType の選択肢:**
- 原因特定
- 修理
- 設変
- 作り替え
- 新型
- 予防保全
- 循環相談
- 共通

### API: `works`

| フィールドID | 表示名 | 種類 | 必須 |
|---|---|---|---|
| title | タイトル | テキストフィールド | ○ |
| category | カテゴリ | セレクトフィールド | ○ |
| industry | 業界 | セレクトフィールド | ○ |
| images | 画像 | 複数画像 | |
| problem | 課題 | テキストエリア | ○ |
| solution | 対応 | テキストエリア | ○ |
| point | ポイント | テキストエリア | |
| metaDescription | meta説明文 | テキストフィールド | |

**category の選択肢:**
- 金型修理
- 設変
- 型の作り替え
- 新型
- ダイカスト新規
- ENTOEN

**industry の選択肢:**
- 自動車
- 家電
- OA機器
- 遊戯機器
- 住宅関連
- その他

### API: `voices`

| フィールドID | 表示名 | 種類 | 必須 |
|---|---|---|---|
| clientType | お客様種別 | テキストフィールド | ○ |
| caseSummary | 案件概要 | テキストフィールド | ○ |
| comment | コメント | テキストエリア | ○ |
| relatedWork | 関連実績 | コンテンツ参照（works） | |

## 3. API キーの取得

1. サービス設定 → API キー
2. 取得したキーを `.env` の `MICROCMS_API_KEY` に設定

## 4. テストコンテンツの投稿

各APIにテスト記事を1件ずつ投稿し、`npm run build` でビルドが通ることを確認してください。

## 5. Webhook（自動デプロイ）の設定

1. Netlify で Build Hook URL を発行
2. microCMS → API設定 → Webhook に上記URLを登録
3. コンテンツの作成・更新・削除時に自動で再ビルドされます

## ダミーデータについて

`MICROCMS_API_KEY` が未設定の場合、`src/lib/microcms.ts` 内のダミーデータで
ビルド・開発ができます。microCMS 接続後は自動的に実データに切り替わります。
