/* ═══════════════════════════════════════════════════════════════════════════
 *  サイト共通設定ファイル（src/config/site.ts）
 *
 *  ここを編集すれば、サイト全体の会社情報・連絡先・SEO・メニューなどが
 *  まとめて変わります。非エンジニアの方でも編集できるよう、各項目に
 *  コメント（// で始まる説明）を付けています。
 *
 *  ⚠️ 編集ルール
 *   - 「"」（ダブルクオート）で囲まれた文字だけを書き換えてください
 *   - 「,」（カンマ）や「{ }」「[ ]」などの記号は消さないでください
 *   - 【要確認】と書かれた値は、正式な内容が決まり次第ご差し替えください
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────
 *  1. サイト基本情報（SEO・URLの土台）
 * ─────────────────────────────────────────────── */
export const SITE = {
  // 本番サイトのURL（末尾スラッシュなし）。sitemap・OGP・正規URLに使われます
  url: "https://www.shin-ei-tecnica.jp",

  // ブラウザのタブやSEOで使われるサイト名
  name: "株式会社新栄テクニカ",
  nameEn: "Shinei Tecnica Co.,Ltd.",

  // <title>の末尾に付く文字（例：「ページ名｜株式会社新栄テクニカ」）
  titleSuffix: "株式会社新栄テクニカ",

  // トップページなど、個別指定がない場合の既定の説明文（120字前後推奨）
  defaultDescription:
    "金型トラブルの原因特定から修理・設変まで対応します。他社製・図面なしの金型もご相談ください。名古屋市天白区のプラスチック射出金型メーカー、株式会社新栄テクニカ。",

  // 言語・地域
  lang: "ja",
  locale: "ja_JP",

  // OGP（SNSシェア時）の既定画像。public/images/ 配下に配置してください
  defaultOgImage: "/images/ogp/default.png", // 【要確認：OGP用画像を用意】
} as const;

/* ───────────────────────────────────────────────
 *  2. 会社情報（フッター・会社案内・JSON-LDに使用）
 * ─────────────────────────────────────────────── */
export const COMPANY = {
  name: "株式会社新栄テクニカ",
  nameEn: "Shinei Tecnica Co.,Ltd.",
  nameKana: "カブシキガイシャシンエイテクニカ",

  // 住所
  postalCode: "468-0048", // ※既存サイトは「468-0011」表記あり →【要確認：正しい郵便番号】
  prefecture: "愛知県",
  city: "名古屋市天白区",
  address: "中坪町184番地",
  addressFull: "〒468-0048 愛知県名古屋市天白区中坪町184番地",

  // 連絡先
  tel: "052-892-1116",
  telLink: "tel:0528921116", // 電話タップ用（数字のみ・ハイフンなし）
  fax: "052-892-1005",

  // 営業時間 / 一次回答の目安
  businessHours: "平日　8：30～17：20",
  responseTime: "1〜2営業日以内",

  // 設立・資本金など（会社案内で使用。分かる範囲で）
  established: "昭和56年11月",
  capital: "3,000,000円",
  representative: "髙井　将司",

  // 事業内容（会社案内・JSON-LD用の要約）
  businessSummary:
    "プラスチック射出金型の設計・製作・修理・設計変更\n廃材の製品化・循環実装（ENTOEN）。",

  // 対応業界
  industries: ["自動車", "遊戯機器", "OA機器", "家電", "住宅関連"],
} as const;

/* ───────────────────────────────────────────────
 *  3. SNS・外部リンク
 * ─────────────────────────────────────────────── */
export const SOCIAL = {
  // LINE公式（友だち追加リンク）
  line: "https://line.me/R/ti/p/%40712vozja",
  // Instagram
  instagram: "https://www.instagram.com/official_entoen/",
  facebook: "",
  youtube: "",
} as const;

/* ───────────────────────────────────────────────
 *  4. ブランドカラー（デザイン）
 *   実際の色は src/styles/global.css のCSS変数で定義しています。
 *   ここはJSON-LDやメタテーマカラー用の参照値です。
 * ─────────────────────────────────────────────── */
export const BRAND = {
  themeColor: "#16243d", // 【要確認：正式ブランドカラー】紺（金型＝主役のトーン）
  entoenColor: "#2f7d76", // ENTOEN（循環）側のアクセント（低彩度の青緑）
} as const;

/* ───────────────────────────────────────────────
 *  5. グローバルナビ（ヘッダーメニュー）
 *   label=表示名 / href=リンク先。順番がそのまま表示順です。
 * ─────────────────────────────────────────────── */
export const NAV: { label: string; href: string }[] = [
  { label: "金型でお困りの方", href: "/mold/" },
  { label: "金型トラブルが増える理由", href: "/mold/why-repair/" },
  { label: "実績", href: "/works/" },
  { label: "お客様の声", href: "/voices/" },
  { label: "設備一覧", href: "/equipment/" },
  { label: "会社案内", href: "/company/" },
  { label: "ENTOEN（循環）", href: "/entoen/" },
];

/* ───────────────────────────────────────────────
 *  6. CTA（行動喚起）ラベル・リンク
 *   ※「概算相談」という言葉は使わない方針（現物確認が必要なため）
 * ─────────────────────────────────────────────── */
export const CTA = {
  // 金型側のメインCTA
  moldPrimaryLabel: "写真を送って相談する",
  moldSecondaryLabel: "送信",
  moldFormHref: "/contact/mold/",

  // ENTOEN（循環）側
  entoenLabel: "送信",
  entoenFormHref: "/entoen/intake/",

  // 応答時間のマイクロコピー（断定しすぎない表現）
  responseMicrocopy:
    "内容を確認のうえ、担当者よりご連絡いたします。" /* 目安時間は COMPANY.responseTime 参照 */,
} as const;

/* ───────────────────────────────────────────────
 *  7. フォーム設定（Netlify Forms 前提）
 * ─────────────────────────────────────────────── */
export const FORMS = {
  // スパム対策のhoneypot（隠しフィールド）を有効にするか
  //   true にすると bot よけの隠し入力欄を追加します（推奨）
  honeypot: true,
  honeypotFieldName: "bot-field",

  // 受信先メールアドレスは Netlify 管理画面側で設定します（コードには書きません）
  //   金型相談フォーム受信先：【要確認】
  //   循環intake受信先：     【要確認】

  // 写真添付の許可拡張子・最大サイズ（UI表示用の注意書き）
  uploadAccept: "image/png,image/jpeg,image/jpg,application/pdf",
  uploadNote: "JPG / PNG / PDF（1ファイルあたり目安10MBまで）",
} as const;

/* ───────────────────────────────────────────────
 *  8. 計測（GA4）。IDは .env の PUBLIC_GA4_ID で設定します。
 * ─────────────────────────────────────────────── */
export const ANALYTICS = {
  // GA4の測定ID（.env 未設定なら計測タグは出力されません）
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? "",
  // 計測イベント名（コード側の参照用。変更非推奨）
  events: {
    moldFormSubmit: "mold_form_submit",
    entoenFormSubmit: "entoen_intake_submit",
    lineTap: "line_tap",
    telTap: "tel_tap",
    checklistDownload: "checklist_download",
  },
} as const;

/* ───────────────────────────────────────────────
 *  9. 「ご相談の流れ」5ステップ
 *   トップ・金型ハブ・金型相談フォームの3箇所で共通使用します。
 * ─────────────────────────────────────────────── */
export const FLOW_STEPS: { no: string; title: string; desc: string }[] = [
  {
    no: "01",
    title: "写真・内容確認",
    desc: "まずは不具合箇所や状況を確認します。",
  },
  {
    no: "02",
    title: "概算可否判断",
    desc: "写真だけで判断できる範囲をお伝えします。※写真のみでは確定見積ができない場合があります。",
  },
  {
    no: "03",
    title: "現物確認",
    desc: "必要に応じて金型や成形品を確認します。",
  },
  {
    no: "04",
    title: "お見積り",
    desc: "対応内容をご提案します。",
  },
  {
    no: "05",
    title: "修理・設変・型更新・新規金型など最適な対応",
    desc: "内容に応じて最適な対応を進めます。",
  },
];

/* ───────────────────────────────────────────────
 *  10. 課題に応じた対応サービス — 金型サービスの5つの選択肢
 *   修理 → 設計変更（設変） → 他社製・図面なし対応 → 型更新 → 新規金型
 * ─────────────────────────────────────────────── */
export const LADDER: {
  key: string;
  step: string;
  title: string;
  short: string;
  href: string;
  star?: boolean;
}[] = [
  { key: "repair", step: "01", title: "修理", short: "金型修理", href: "/mold/repair/" },
  { key: "design-change", step: "02", title: "設計変更（設変）", short: "仕様変更対応", href: "/mold/design-change/" },
  { key: "third-party", step: "03", title: "他社製・図面なし対応", short: "現品からの対応", href: "/mold/third-party/" },
  { key: "remake", step: "04", title: "型更新", short: "型の作り替え", href: "/mold/remake/" },
  { key: "new", step: "05", title: "新規金型", short: "新規金型製作", href: "/mold/new/" },
  { key: "maintenance", step: "06", title: "メンテナンス", short: "予防保全", href: "/mold/maintenance/" },
];

/* ───────────────────────────────────────────────
 *  11. サービスページコンテンツ
 * ─────────────────────────────────────────────── */
export const SERVICE_PAGES = {
  repair: {
    troubles: [
      "ピンが折れた",
      "金型が摩耗している",
      "バリが止まらない",
      "部品が破損した",
      "他社製金型で修理先が見つからない",
      "図面がなく対応を断られた",
    ],
    relatedServices: [
      { label: "設計変更（設変）", href: "/mold/design-change/", desc: "製品変更や機能追加をご検討の方はこちら" },
      { label: "他社製・図面なし対応", href: "/mold/third-party/", desc: "図面がなく対応を断られた方はこちら" },
      { label: "型更新・作り替え", href: "/mold/remake/", desc: "修理を繰り返している金型はこちら" },
      { label: "新規金型製作", href: "/mold/new/", desc: "新製品立ち上げや量産用金型のご相談はこちら" },
    ],
  },
  designChange: {
    troubles: [
      "製品形状を変更したい",
      "寸法を変更したい",
      "仕様変更に合わせて金型を改造したい",
      "古い金型を活かして対応したい",
      "他社製金型の設変を相談したい",
      "図面がなく設計変更できるか分からない",
    ],
    relatedServices: [
      { label: "金型修理", href: "/mold/repair/", desc: "破損や摩耗への対応はこちら" },
      { label: "他社製・図面なし対応", href: "/mold/third-party/", desc: "図面がなく対応を断られた方はこちら" },
      { label: "型更新・作り替え", href: "/mold/remake/", desc: "古い金型の更新をご検討の方はこちら" },
      { label: "新規金型製作", href: "/mold/new/", desc: "新規立ち上げをご検討の方はこちら" },
    ],
  },
  thirdParty: {
    troubles: [
      "他社製金型で修理先が見つからない",
      "海外製金型の対応先が分からない",
      "図面がなく対応を断られた",
      "古い金型で図面や資料が残っていない",
      "現品しかなく修理・設変できるか分からない",
      "金型の状態を見てもらいたい",
    ],
    relatedServices: [
      { label: "金型修理", href: "/mold/repair/", desc: "他社製金型の修理をご検討の方はこちら" },
      { label: "設計変更（設変）", href: "/mold/design-change/", desc: "現品から設計変更をご検討の方はこちら" },
      { label: "型更新・作り替え", href: "/mold/remake/", desc: "図面がなく更新方法でお困りの方はこちら" },
      { label: "新規金型製作", href: "/mold/new/", desc: "現品から新規製作をご検討の方はこちら" },
    ],
  },
  remake: {
    troubles: [
      "修理を繰り返している",
      "古い金型で不具合が増えている",
      "図面が残っていない",
      "部品供給が難しい",
      "量産を安定させたい",
      "修理か作り替えか判断できない",
    ],
    relatedServices: [
      { label: "金型修理", href: "/mold/repair/", desc: "まず修理可能か確認したい方はこちら" },
      { label: "設計変更（設変）", href: "/mold/design-change/", desc: "製品変更を伴う改造をご検討の方はこちら" },
      { label: "他社製・図面なし対応", href: "/mold/third-party/", desc: "図面が残っていない金型はこちら" },
      { label: "新規金型製作", href: "/mold/new/", desc: "新しい金型製作をご検討の方はこちら" },
    ],
  },
  new: {
    troubles: [
      "新製品の金型を作りたい",
      "既存金型を新しく作り替えたい",
      "量産用の金型を検討している",
      "製品図面から金型製作を相談したい",
      "小ロットから量産まで相談したい",
      "成形性を考慮して金型設計を進めたい",
    ],
    relatedServices: [
      { label: "型更新・作り替え", href: "/mold/remake/", desc: "既存金型の更新をご検討の方はこちら" },
      { label: "設計変更（設変）", href: "/mold/design-change/", desc: "既存金型の改造をご検討の方はこちら" },
      { label: "金型修理", href: "/mold/repair/", desc: "既存金型の修理をご検討の方はこちら" },
      { label: "他社製・図面なし対応", href: "/mold/third-party/", desc: "図面がない場合のご相談はこちら" },
    ],
  },
  diagnosis: {
    troubles: [
      "バリが止まらない",
      "寸法が安定しない",
      "ソリが改善しない",
      "成形不良の原因が分からない",
      "修理しても再発する",
      "金型が原因なのか判断できない",
      "他社に相談したが改善しなかった",
      "原因が複数ありそうで整理できない",
    ],
    relatedServices: [
      { label: "金型修理", href: "/mold/repair/", desc: "破損や摩耗への対応はこちら" },
      { label: "設計変更（設変）", href: "/mold/design-change/", desc: "再発防止や仕様変更はこちら" },
      { label: "他社製・図面なし対応", href: "/mold/third-party/", desc: "図面がなく対応を断られた方はこちら" },
      { label: "型更新・作り替え", href: "/mold/remake/", desc: "修理を繰り返している金型はこちら" },
    ],
  },
  maintenance: {
    troubles: [
      "量産中に突然金型が止まるのを防ぎたい",
      "バリや寸法不良が増える前に状態を確認したい",
      "古い金型を継続使用している",
      "修理を繰り返している金型がある",
      "金型の定期点検先を探している",
      "海外製・他社製金型の状態を見てほしい",
      "金型の寿命や更新時期を判断したい",
    ],
    relatedServices: [
      { label: "金型修理", href: "/mold/repair/", desc: "破損や摩耗が見つかった場合はこちら" },
      { label: "原因特定・改善", href: "/mold/diagnosis/", desc: "成形不良やバリの原因を整理したい方はこちら" },
      { label: "型更新・作り替え", href: "/mold/remake/", desc: "修理を繰り返している金型はこちら" },
      { label: "他社製・図面なし対応", href: "/mold/third-party/", desc: "図面がない金型や海外製金型はこちら" },
    ],
  },
} as const;

/* ───────────────────────────────────────────────
 *  型定義（編集不要）
 * ─────────────────────────────────────────────── */
export type NavItem = (typeof NAV)[number];
export type FlowStep = (typeof FLOW_STEPS)[number];
export type LadderItem = (typeof LADDER)[number];
