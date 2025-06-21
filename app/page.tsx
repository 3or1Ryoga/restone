import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from "next/image"
import { ClipboardList, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6ede8] text-[#333333]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="静寂な日本庭園の風景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              墓石清掃│Re:Stone
            </h1>
            <p className="text-lg md:text-xl text-gray-200" style={{ fontFamily: "Shippori Mincho, serif" }}>
              （リストーン）
            </p>
          </div>

          <p
            className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            真心を込めて、手洗い。大切な墓石に、ふたたび安らぎを届けます。
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            Re:Stoneが選ばれる理由
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/small_icon1.png?height=200&width=200"
                  alt="手作業での清掃作業"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-lg md:text-xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                手作業中心の丁寧な清掃
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                強力な機械は使用せず、一つ一つ手作業で優しく清掃いたします
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/small_icon2.png?height=200&width=200"
                  alt="石材専用洗剤"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-lg md:text-xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                石材に優しい専用洗剤
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                墓石を傷めない、石材専用の洗剤のみを使用しています
              </p>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/small_icon3.png?height=200&width=200"
                  alt="美しく仕上がった墓石"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-lg md:text-xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                新品同様の仕上がり
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                長年の汚れも丁寧に除去し、美しい輝きを取り戻します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {/* <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            信頼の施工事例
          </h2>

          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h3
                  className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
                  style={{ fontFamily: "Shippori Mincho, serif" }}
                >
                  清掃前 (Before)
                </h3>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="清掃前の墓石2"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>

              <div className="text-center">
                <h3
                  className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
                  style={{ fontFamily: "Shippori Mincho, serif" }}
                >
                  清掃後 (After)
                </h3>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="清掃後の墓石2"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            <p
              className="text-center text-lg md:text-xl mt-8 text-[#333333]"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              長年の苔や汚れも、丁寧な手作業で美しく除去いたします。
            </p>
          </div>
        </div>
      </section> */}

      {/* Services and Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            サービスプランと料金
          </h2>

          {/* 3つのプラン */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* お掃除プラン */}
            <div className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col bg-[#f6ede8]">
              {/* <Image
                src="/placeholder.svg?height=300&width=400"
                alt="お掃除プランのイメージ"
                width={400}
                height={300}
                className="rounded-md mx-auto mb-6"
              /> */}
              <h3
                className="text-2xl font-bold mb-4 text-[#20319d] text-center"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                お掃除プラン
              </h3>
              <p className="text-base leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                墓石の拭き上げ清掃、周囲の草取り・清掃を行う簡易的な清掃プランです。
              </p>
            </div>

            {/* 手洗い洗浄プラン */}
            <div className="border-2 border-[#20319d] rounded-lg shadow-xl p-6 flex flex-col bg-white relative">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#20319d] text-white px-4 py-1 rounded-full font-bold">
                おすすめ
              </span>
              {/* <Image
                src="/placeholder.svg?height=300&width=400"
                alt="手洗い洗浄プランのイメージ"
                width={400}
                height={300}
                className="rounded-md mx-auto mb-6"
              /> */}
              <h3
                className="text-2xl font-bold mb-4 text-[#20319d] text-center"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                手洗い洗浄プラン
              </h3>
              <p className="text-base leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                職人が手洗いで優しく墓石の内部から長年の汚れを取り去り、キレイに磨き上げます。周囲の草取り・清掃・文字塗り等も付いたおトクなプランです。
                <br />
                <span className="text-sm text-gray-600 mt-2 block">※墓石洗浄には石材に優しい専用洗剤を使用します。</span>
              </p>
            </div>

            {/* 長持ちコーティングプラン */}
            <div className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col bg-[#f6ede8]">
              {/* <Image
                src="/placeholder.svg?height=300&width=400"
                alt="長持ちコーティングプランのイメージ"
                width={400}
                height={300}
                className="rounded-md mx-auto mb-6"
              /> */}
              <h3
                className="text-2xl font-bold mb-4 text-[#20319d] text-center"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                長持ちコーティングプラン
              </h3>
              <p className="text-base leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                墓石洗濯プランにプラスして、墓石表面の小さな穴をふさぐ特殊コーティングを施すプレミアムプラン。水の吸込みを防ぎ、墓石を長持ちさせます。
              </p>
            </div>
          </div>

          {/* 詳細料金表 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3
              className="text-2xl md:text-3xl font-bold mb-8 text-[#20319d] text-center"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              基本料金のご案内
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {/* 手洗い洗浄 */}
              <div>
                <h4 className="text-xl font-bold text-[#20319d] border-b-2 border-[#20319d] pb-2 mb-4" style={{ fontFamily: "Shippori Mincho, serif" }}>
                  手洗い洗浄
                </h4>
                <div className="space-y-3 text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  <div className="flex justify-between">
                    <span>和型8寸（建立10年まで）</span>
                    <span className="font-semibold">40,000円</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-4">※建立から10年経過ごとに＋10,000円</p>
                  <p className="text-sm text-gray-600 ml-4">※＋1寸ごとに＋10,000円</p>
                  <div className="flex justify-between border-t pt-3">
                    <span>法名版</span>
                    <span className="font-semibold">10,000円〜</span>
                  </div>
                </div>
              </div>

              {/* 周辺作業 */}
              <div>
                <h4 className="text-xl font-bold text-[#20319d] border-b-2 border-[#20319d] pb-2 mb-4" style={{ fontFamily: "Shippori Mincho, serif" }}>
                  周辺作業
                </h4>
                <div className="space-y-3 text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  <div className="flex justify-between"><span>周辺清掃・草取り等（一区画）</span><span className="font-semibold">5,000円〜</span></div>
                  <div className="flex justify-between"><span>石塔本体文字墨入れ（一基）</span><span className="font-semibold">10,000円〜</span></div>
                  <div className="flex justify-between"><span>法名版文字墨入れ（一枚）</span><span className="font-semibold">5,000円〜</span></div>
                  <div className="flex justify-between"><span>灯篭（一対）・小物洗浄</span><span className="font-semibold">各2,000円〜</span></div>
                  <div className="flex justify-between"><span>外柵洗浄（一区画）</span><span className="font-semibold">15,000円〜</span></div>
                  <div className="flex justify-between"><span>目地の補修（一基）</span><span className="font-semibold">5,000円〜</span></div>
                  <div className="flex justify-between"><span>防草透水舗装</span><span className="font-semibold">20,000円/㎡</span></div>
                  <div className="flex justify-between"><span>防水・防汚コーティング（一基）</span><span className="font-semibold">25,000円〜</span></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-4 border-t">
              <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                ※表記価格はすべて税込です。
                <br />
                ※各種料金は、建墓年数、墓石サイズ、汚れの状態によって変動いたします。詳しくはお見積もりにてご提示いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            ご利用の流れ
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                一
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                お問い合わせ
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                お電話またはメールでお気軽にご相談ください
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                二
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                現地調査・見積もり
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                無料で現地調査を行い、正確なお見積もりをご提示
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                三
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                清掃作業
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                丁寧な手作業で墓石を美しく清掃いたします
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                四
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                完了報告
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                作業前後の写真とともに、完了をご報告いたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process Section */}
      {/* Cleaning Process Section */}
<section className="py-16 md:py-24 px-4">
  <div className="max-w-7xl mx-auto">
    <h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
      style={{ fontFamily: "Shippori Mincho, serif" }}
    >
      墓石清掃の工程
    </h2>

    {/* 9つの工程を3列で表示 */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 工程 1 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="草取り・掃除の様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              一
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              草取り・掃除
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              洗浄前にお墓周辺の草取りと清掃をします。
            </p>
          </div>

          {/* 工程 2 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="汚れ落としの様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              二
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              汚れ落とし
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              たっぷりと水をかけ、とても軟らかいヘラで表面にこびりついた汚れを落とします。
            </p>
          </div>

          {/* 工程 3 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="洗剤塗布の様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              三
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              洗剤塗布
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              石材に優しい専用の洗剤を数種類使い分け、性質の異なる汚れを落とします。
            </p>
          </div>

          {/* 工程 4 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="細かな汚れ落としの様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              四
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              汚れ落とし
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              墓石全体、くぼみ、細かな箇所を道具を使い分け汚れを落としていきます。
            </p>
          </div>

          {/* 工程 5 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="洗い流しの様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              五
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              洗い流し
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              洗剤、よごれをたっぷりの水で洗い流します。
            </p>
          </div>

          {/* 工程 6 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="拭き上げの様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              六
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              拭き上げ
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              汚れが落ち、キレイになったお墓を丁寧に拭き上げます。
            </p>
          </div>

          {/* 工程 7 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="文字塗りの様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              七
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              文字塗り
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              専用の塗料で文字に色を入れていきます。
            </p>
          </div>

          {/* 工程 8 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="コーティングの様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              八
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              コーティング
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              専用のコーティング剤で小さな穴をふさぎます。
            </p>
          </div>

          {/* 工程 9 */}
          <div className="text-center flex flex-col">
            {/* <Image
              src="/placeholder.svg?height=300&width=400"
              alt="目地補修の様子"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto mb-6"
            /> */}
            <div
              className="w-16 h-16 mx-auto mb-4 bg-[#20319d] rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              九
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-[#20319d]"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              目地補修
            </h3>
            <p className="text-base md:text-lg leading-relaxed flex-grow" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              欠けたりヒビが入った目地を補修します。
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 人物写真を追加 */}
          <div className="mb-8">
            <Image
              src="/restone_logo.jpg?height=200&width=200"
              alt="代表者写真"
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-lg border-4 border-[#20319d]"
            />
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            まずはお気軽にご相談ください
          </h2>

          <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
            お見積もり・ご相談は<span className="text-[#20319d] font-bold text-2xl md:text-3xl">完全無料</span>です。
            <br />
            どんな小さなことでもお気軽にお問い合わせください。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Googleフォームへのボタン */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDDgpRZbLm7LSqQU6kegFriFqqqYAC4xYj8HQ7DShepCqn5g/viewform?usp=sharing&ouid=108276482871088353732" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full h-20 text-xl md:text-2xl bg-[#20319d] hover:bg-[#1a2a8a] text-white rounded-lg shadow-lg transition-colors duration-300">
                <ClipboardList className="w-8 h-8 mr-4" />
                フォームでお問い合わせ
              </Button>
            </a>

            {/* 公式LINEへのボタン (カスタムカラーを使用) */}
            <a href="https://lin.ee/ml9SSzW" target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full h-20 text-xl md:text-2xl bg-[#20319d] hover:bg-[#1a2a8a] text-white rounded-lg shadow-lg transition-colors duration-300">
                <MessageCircle className="w-8 h-8 mr-4" />
                LINEで無料相談
              </Button>
            </a>
        </div>

          {/* Company Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-6 text-[#20319d] text-center"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              会社情報
            </h3>
            <div className="space-y-4 text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">屋号：</span>
                <span>Re:Stone（リストーン）</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">所在地：</span>
                <span>東京都立川市西砂町5-66-32</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">営業時間：</span>
                <span>9:00〜18:00（年中無休）</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">対応エリア：</span>
                <span>関東一円</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#20319d] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
            © Re:Stone All Rights Reserved.
          </p>
          <Link href="/privacy" className="text-white hover:text-gray-300 underline text-base md:text-lg">
            プライバシーポリシー
          </Link>
        </div>
      </footer>
    </div>
  )
}