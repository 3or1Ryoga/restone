import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "お墓掃除・墓石清掃のプロ【リストーンワークス】",
  description:
    "お墓のお手入れでお悩みのお客様に代わり、真心を込めてお墓掃除・墓石洗浄。写真付き報告書で、遠方でも安心してご確認いただけます。",
  keywords: "墓石清掃,墓石クリーニング,お墓掃除,関東,手作業,石材清掃",
  verification: {
    google: "　　　",
  },
  // ▼▼▼ ここから追加・修正 ▼▼▼
  icons: {
    icon: '/restone_logo_512.png', // ファビコンのパス
  },
  // --- SNS（LINE, Facebook, Xなど）向け ---
  openGraph: {
    // 【修正】titleと内容を統一
    title: "お墓掃除・墓石清掃のプロ【リストーンワークス】", 
    // 【修正】descriptionと内容を統一、またはSNS向けに最適化
    description: "お墓のお手入れでお悩みのお客様に代わり、真心を込めてお墓掃除・墓石洗浄。遠方でも安心の写真付き報告書。", 
    // 【修正】実際のサイトURLに書き換える
    url: '　　　', // 例: 実際のドメイン
    // 【修正】サイト名を入力
    siteName: 'リストーンワークス', 
    images: [
      {
        // 【修正】OGP画像のURLを実際のパスに
        url: '　　　', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  // （推奨）Twitter向けの設定も追加すると、より表示をコントロールできます
  twitter: {
    card: 'summary_large_image',
    title: "お墓掃除・墓石清掃のプロ【リストーンワークス】",
    description: "お墓のお手入れでお悩みのお客様に代わり、真心を込めてお墓掃除・墓石洗浄。",
    images: [''],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
