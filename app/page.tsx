import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from "next/image"

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
            手作業で優しく蘇らせる、心を込めた墓石クリーニング
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
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            信頼の施工事例
          </h2>

          {/* Case Study 1 */}

          {/* Case Study 2 */}
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
      </section>

      {/* Services and Pricing Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                サービス内容
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#20319d] mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    墓石本体の清掃・研磨
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#20319d] mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    文字彫刻部分の清掃
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#20319d] mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    周辺の清掃・整理
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#20319d] mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    作業前後の写真報告
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#20319d] mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    無料見積もり・相談
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-[#20319d]"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                料金目安
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-5xl md:text-6xl font-bold text-[#20319d] mb-2">49,800円</p>
                  <p className="text-xl md:text-2xl text-[#333333]" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    〜（税込）
                  </p>
                </div>
                <div className="space-y-3 text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  <p>• 一般的な墓石（2〜3㎡）</p>
                  <p>• 作業時間：2〜4時間</p>
                  <p>• 出張費込み</p>
                  <p className="text-sm md:text-base text-gray-600 mt-4">
                    ※墓石の大きさ・汚れの程度により料金が変動いたします
                  </p>
                </div>
              </div>
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
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#20319d]"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            墓石清掃の工程
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="現地調査・養生の様子"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
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
                現地調査・養生
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                墓石の状態を詳しく調査し、周辺を汚さないよう丁寧に養生いたします
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="洗浄・除去作業の様子"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
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
                洗浄・除去作業
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                専用洗剤を使用し、苔や汚れを手作業で優しく除去いたします
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="研磨・仕上げ作業の様子"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
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
                研磨・仕上げ
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                石材専用の研磨材で丁寧に磨き上げ、美しい輝きを取り戻します
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="最終確認・清掃の様子"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
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
                最終確認・清掃
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                仕上がりを最終確認し、周辺を清掃して美しい状態でお引き渡しします
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
              src="/placeholder.svg?height=200&width=200"
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
            <a href="tel:03-1234-5678" className="block">
              <Button className="w-full h-20 text-xl md:text-2xl bg-[#20319d] hover:bg-[#1a2a8a] text-white rounded-lg shadow-lg">
                <Phone className="w-8 h-8 mr-4" />
                電話で無料相談
              </Button>
            </a>

            <a href="mailto:info@restone.jp" className="block">
              <Button className="w-full h-20 text-xl md:text-2xl bg-[#20319d] hover:bg-[#1a2a8a] text-white rounded-lg shadow-lg">
                <Mail className="w-8 h-8 mr-4" />
                メールでお問い合わせ
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
                <span>東京都○○区○○ ○-○-○</span>
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
