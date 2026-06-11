/* ═══════════════════════════════════════════════════════════════
 *  microCMS クライアント＋ダミーデータフォールバック
 *  .env の MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY が未設定なら
 *  ダミーデータでビルド・開発できます。
 * ═══════════════════════════════════════════════════════════════ */
import { createClient } from "microcms-js-sdk";

// ---------- 型定義 ----------
export interface BlogEntry {
  id: string;
  title: string;
  category: ("お知らせ" | "活動実績" | "技術記事" | "金型修理事例" | "ENTOEN活動報告")[];
  publishedDate: string;
  eyecatch?: { url: string; width: number; height: number };
  body: string;
  metaDescription: string;
  ctaType: string;
}

export interface WorkEntry {
  id: string;
  title: string;
  category: string;
  industry: string;
  images?: { url: string; width: number; height: number }[];
  problem: string;
  solution: string;
  point: string;
  metaDescription: string;
}

export interface VoiceEntry {
  id: string;
  clientType: string;
  caseSummary: string;
  comment: string;
  relatedWork?: { id: string };
}

export interface CaseEntry {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: { url: string; width: number; height: number };
  publishedDate: string;
}

interface CmsList<T> {
  contents: T[];
  totalCount: number;
}

// ---------- クライアント ----------
const domain = import.meta.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = import.meta.env.MICROCMS_API_KEY ?? "";
const forceSource = import.meta.env.CONTENT_SOURCE ?? "";

const useDummy =
  forceSource === "dummy" || (!domain || !apiKey) && forceSource !== "microcms";

const client = useDummy
  ? null
  : createClient({ serviceDomain: domain, apiKey });

// ---------- 共通フェッチ ----------
async function fetchList<T>(
  endpoint: string,
  dummy: T[],
  queries?: Record<string, unknown>,
): Promise<T[]> {
  if (!client) return dummy;
  const res = await client.get<CmsList<T>>({
    endpoint,
    queries: { limit: 100, ...queries },
  });
  return res.contents;
}

async function fetchDetail<T>(
  endpoint: string,
  id: string,
  dummy: T[],
): Promise<T | undefined> {
  if (!client) return dummy.find((d: any) => d.id === id);
  return client.get<T>({ endpoint, contentId: id });
}

// ---------- ダミーデータ ----------
const DUMMY_BLOGS: BlogEntry[] = [
  {
    id: "news-website-renewal",
    title: "ウェブサイトをリニューアルしました",
    category: ["お知らせ"],
    publishedDate: "2026-06-25",
    body: "<p>当社ウェブサイトをリニューアルいたしました。</p><p>今回のリニューアルでは、金型修理・設計変更・型更新・新規金型製作に関するご相談を、よりスムーズに承れるよう構成を見直しています。</p><p>また、他社製金型や図面が残っていない金型への対応内容についても分かりやすく整理しました。</p><p>今後も、お客様にとって相談しやすいウェブサイトを目指し、情報発信を充実させてまいります。</p><p>金型に関するお困りごとがございましたら、お気軽にご相談ください。</p>",
    metaDescription: "金型修理・設計変更のご相談をよりスムーズに承れるよう、当社ウェブサイトをリニューアルしました。",
    ctaType: "共通",
  },
  {
    id: "activity-toppa-featured",
    title: "共創による新規事業開発の取り組みが掲載されました（TOPPA）",
    category: ["活動実績"],
    publishedDate: "2026-02-26",
    body: "<p>当社が参加している愛知県信用保証協会主催のオープンイノベーションプログラム「TOPPA」における取り組みが、事業創出メディア「TOMORUBA」に掲載されました。</p><p>当社は、金型製造技術を活用した「廃棄プラスチックの小～中規模循環モデルの構築」と、「参加・体験を通じた学習機会の創出」をテーマに、外部企業・団体との共創による新規事業開発を進めています。</p><p>記事では、これまでの検討プロセスや事業構想、今後の実証に向けた取り組みについて紹介されています。</p><p>現在、本プロジェクトでは実証フィールドの拡大および事業化に向けて、共創パートナーを募集しています。</p><p>ご関心をお持ちの企業・団体様はお気軽にお問い合わせください。</p><p>掲載記事はこちら：<a href=\"https://tomoruba.eiicon.net/articles/5481\" target=\"_blank\">https://tomoruba.eiicon.net/articles/5481</a></p><p>今後も当社は、ものづくり企業として培ってきた技術を活かし、環境・教育・地域に貢献する新たな価値創出に挑戦してまいります。</p>",
    metaDescription: "TOPPAで進める廃プラスチック循環モデル構築の取り組みがTOMORUBAに掲載されました。",
    ctaType: "共通",
  },
  {
    id: "activity-toppa-adoption",
    title: "共創プログラムTOPPA（愛知県信用保証協会）に採択されました",
    category: ["活動実績"],
    publishedDate: "2025-11-20",
    body: "<p>このたび、当社の取り組みが愛知県信用保証協会様主催のオープンイノベーションプログラム「TOPPA」に採択されましたのでお知らせいたします。</p><p>TOPPAは、変化の激しい時代において、社外プレイヤーとの共創を通じて新規事業開発に挑戦するプログラムです。</p><p>本プログラムへの採択は、当社の技術力やこれまでの取り組みが評価されたものと受け止めており、大変光栄に感じております。</p><p>今回の採択を契機に、共創パートナーの皆さまと連携しながら、新たな価値創出に向けた取り組みを進めてまいります。</p><p>詳細は以下の記事もご覧ください。</p><p>▼ PR TIMES（公式プレスリリース）<br/><a href=\"https://prtimes.jp/main/html/rd/p/000000823.000037194.html\" target=\"_blank\">https://prtimes.jp/main/html/rd/p/000000823.000037194.html</a></p><p>▼ TOMORUBA（事業を創る人のためのビジネスメディア）<br/><a href=\"https://tomoruba.eiicon.net/articles/5322\" target=\"_blank\">https://tomoruba.eiicon.net/articles/5322</a></p><p>今後ともご支援のほどよろしくお願いいたします。</p>",

    metaDescription: "愛知県信用保証協会主催のオープンイノベーションプログラム「TOPPA」に採択されました。",
    ctaType: "共通",
  },
];

const DUMMY_WORKS: WorkEntry[] = [
  {
    id: "work-repair-bari",
    title: "バリ不良の原因特定と金型修理",
    category: "金型修理",
    industry: "自動車",
    images: [{ url: "/images/placeholder-work.svg", width: 600, height: 400 }],
    problem: "他社製金型でバリが繰り返し発生し、成形品の品質が安定しなかった。",
    solution: "PL面の摩耗箇所を肉盛り修正し、型合わせ精度を回復。バリの再発を解消。",
    point: "現品確認により、目視では分かりにくい微細摩耗を特定できた。",
    metaDescription: "自動車部品用の他社製金型でバリ不良が発生。原因特定からPL面修正まで対応した事例です。",
  },
  {
    id: "work-design-change",
    title: "OA機器部品の設計変更（設変）",
    category: "設変",
    industry: "OA機器",
    images: [{ url: "/images/placeholder-work.svg", width: 600, height: 400 }],
    problem: "製品仕様の変更に伴い、金型の一部形状を変更する必要があった。",
    solution: "入子交換とスライド機構の改修で、既存金型を活かしたまま仕様変更に対応。",
    point: "型の作り替えではなく設変で対応することで、コストと納期を圧縮。",
    metaDescription: "OA機器部品の仕様変更に伴う金型の設計変更（設変）事例です。",
  },
  {
    id: "work-remake",
    title: "老朽化金型の作り替え",
    category: "型の作り替え",
    industry: "家電",
    images: [{ url: "/images/placeholder-work.svg", width: 600, height: 400 }],
    problem: "20年以上使用した金型が寿命を迎え、修理では品質維持が困難に。",
    solution: "現品から形状データを取得し、新しい金型として作り替え。成形条件も最適化。",
    point: "図面が残っていなかったが、現品対応で作り替えを実現。",
    metaDescription: "図面なしの老朽化金型を現品から作り替えた事例です。",
  },
];

const DUMMY_VOICES: VoiceEntry[] = [
  {
    id: "voice-1",
    clientType: "自動車部品メーカー（愛知県）",
    caseSummary: "他社製金型のバリ不良改善",
    comment:
      "他の業者に断られた他社製の金型でしたが、快く引き受けていただきました。原因の説明も丁寧で、修理後はバリの再発もなく安心しています。",
    relatedWork: { id: "work-repair-bari" },
  },
  {
    id: "voice-2",
    clientType: "OA機器メーカー",
    caseSummary: "設計変更の相談対応",
    comment:
      "設変か作り替えか迷っていたところ、状況を見て設変で対応できると提案してもらえました。コストも納期も助かりました。",
    relatedWork: { id: "work-design-change" },
  },
  {
    id: "voice-3",
    clientType: "匿名",
    caseSummary: "図面紛失の金型対応",
    comment:
      "図面がない状態で相談しましたが、現品から対応してもらえました。正直、受けてもらえると思っていなかったので助かりました。",
  },
];

const DUMMY_CASES: CaseEntry[] = [
  {
    id: "case-plastic-product",
    title: "廃プラスチックから新しい製品へ",
    category: "廃プラスチック製品化",
    description:
      "企業で回収したプラスチックを製品化し、ノベルティとして活用。廃材の有効活用とESG活動を同時に実現した事例です。",
    image: { url: "/images/placeholder-work.svg", width: 600, height: 400 },
    publishedDate: "2026-05-20",
  },
  {
    id: "case-school-program",
    title: "学校との連携による回収プログラム",
    category: "学校連携",
    description:
      "地域の学校と連携し、回収したプラスチックを教材へ製品化。環境教育と循環実装を組み合わせた取り組みです。",
    image: { url: "/images/placeholder-work.svg", width: 600, height: 400 },
    publishedDate: "2026-04-15",
  },
  {
    id: "case-company-collaboration",
    title: "企業連携による循環型事業の構築",
    category: "企業連携",
    description:
      "複数企業と連携し、廃プラスチックを回収・製品化・活用するサイクルを構築。ビジネスと環境配慮を両立させた事例です。",
    image: { url: "/images/placeholder-work.svg", width: 600, height: 400 },
    publishedDate: "2026-03-10",
  },
];

// ---------- API ----------
export async function getBlogs() {
  return fetchList<BlogEntry>("blogs", DUMMY_BLOGS);
}
export async function getBlogDetail(id: string) {
  return fetchDetail<BlogEntry>("blogs", id, DUMMY_BLOGS);
}
export async function getWorks() {
  return fetchList<WorkEntry>("works", DUMMY_WORKS);
}
export async function getWorkDetail(id: string) {
  return fetchDetail<WorkEntry>("works", id, DUMMY_WORKS);
}
export async function getVoices() {
  return fetchList<VoiceEntry>("voices", DUMMY_VOICES);
}
export async function getCases() {
  return fetchList<CaseEntry>("entoen_cases", DUMMY_CASES);
}
