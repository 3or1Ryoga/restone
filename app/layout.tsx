import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "墓石清掃│Re:Stone（リストーン）- 手作業で優しく蘇らせる墓石クリーニング",
  description:
    "関東エリアの墓石清掃専門サービス。手作業中心の丁寧な清掃で、大切なお墓を新品同様の美しさに蘇らせます。無料見積もり実施中。",
  keywords: "墓石清掃,墓石クリーニング,お墓掃除,関東,手作業,石材清掃",
    generator: 'v0.dev'
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
