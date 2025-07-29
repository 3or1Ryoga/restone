// import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, ArrowDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from 'next/link';
// import Image from "next/image"
// import { ClipboardList, MessageCircle } from "lucide-react";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/top.jpg?height=1080&width=1920"
//             alt="静寂な日本庭園の風景"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         <div className="relative z-10 text-center text-white px-4">
//           <div className="mb-8">
//             <h1
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
//               style={{ fontFamily: "Shippori Mincho, serif" }}
//             >
//               リストーンワークス
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200" style={{ fontFamily: "Shippori Mincho, serif" }}>
//               RESTONEWORKS
//             </p>
//           </div>

//           <p
//             className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed max-w-4xl mx-auto"
//             style={{ fontFamily: "Shippori Mincho, serif" }}
//           >
//             墓石清掃 | 真心を込めて手洗い
//           </p>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-white" />
//         </div>
//       </section>

//     <section className="py-16 md:py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
//           style={{ fontFamily: "Shippori Mincho, serif" }}
//         >
//           リストーンワークスの信念
//         </h2>
//         <p className="text-center text-lg text-gray-500 mb-16 font-sans">BELIEF</p>

//         <div className="flex flex-wrap justify-center gap-8 md:gap-12">
//           <div className="text-center">
//             <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
//               <Image
//                 src="sinnen_1.jpg"
//                 alt="合掌のイメージ"
//                 width={100}
//                 height={100}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3
//               className="text-lg md:text-xl font-bold mb-4 text-black"
//               style={{ fontFamily: "Shippori Mincho, serif" }}
//             >
//               ①合掌で始まり、合掌で終わる
//             </h3>
//             <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               故人へ敬意を込めて、<br />供養の気持ちで丁寧に手洗いします
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
//               <Image
//                 src="sinnen_2.jpg"
//                 alt="配達人のイメージ"
//                 width={200}
//                 height={200}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3
//               className="text-lg md:text-xl font-bold mb-4 text-black"
//               style={{ fontFamily: "Shippori Mincho, serif" }}
//             >
//               ②現世から黄泉への配達人
//             </h3>
//             <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               何かしらの理由で足を運べずとも、<br />ご家族の想いを故人へ届けます
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>

//       {/* Technology Section */}
//       {/* Technology Section */}
//       <section className="py-16 md:py-24 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2
//         className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-black"
//         style={{ fontFamily: "Shippori Mincho, serif" }}
//         >
//         リストーンワークスの技術
//         </h2>
//         <p
//         className="text-center text-xl md:text-2xl text-black font-bold mb-16"
//         style={{ fontFamily: "Shippori Mincho, serif" }}
//         >
//         AFTER<span className="text-black mx-2">←</span>BEFORE
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

//         <div className="text-center">
//           <div className="grid grid-cols-2 gap-2 mb-4">
//           <div>
//             <p className="font-bold mb-2 text-gray-600">After</p>
//             <Image
//             src="sekou2.jpeg"
//             alt="特殊洗浄後の地蔵"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           <div>
//             <p className="font-bold mb-2 text-gray-600">Before</p>
//             <Image
//             src="sekou1.jpeg"
//             alt="特殊洗浄前の地蔵"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           </div>
//           <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
//           特殊洗浄の施工例
//           </h4>
//         </div>

//         <div className="text-center">
//           <div className="grid grid-cols-2 gap-2 mb-4">
//           <div>
//             <p className="font-bold mb-2 text-gray-600">After</p>
//             <Image
//             src="sekou7_2.JPEG"
//             alt="特殊洗浄後の墓石"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           <div>
//             <p className="font-bold mb-2 text-gray-600">Before</p>
//             <Image
//             src="sekou4_2.JPEG"
//             alt="特殊洗浄前の墓石"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           </div>
//           <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
//           特殊洗浄の施工例
//           </h4>
//         </div>

//         <div className="text-center">
//           <div className="grid grid-cols-2 gap-2 mb-4">
//           <div>
//             <p className="font-bold mb-2 text-gray-600">After</p>
//             <Image
//             src="sekou6.jpeg"
//             alt="文字ペイント後の墓石"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           <div>
//             <p className="font-bold mb-2 text-gray-600">Before</p>
//             <Image
//             src="sekou5.jpeg"
//             alt="文字ペイント前の墓石"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           </div>
//           <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
//           特殊洗浄/文字ペイントの施工
//           </h4>
//         </div>

//         <div className="text-center">
//           <div className="grid grid-cols-2 gap-2 mb-4">
//           <div>
//             <p className="font-bold mb-2 text-gray-600">After</p>
//             <Image
//             src="sekou3.jpeg"
//             alt="施工後の墓誌"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           <div>
//             <p className="font-bold mb-2 text-gray-600">Before</p>
//             <Image
//             src="sekou8.JPEG"
//             alt="施工前の墓誌"
//             width={400}
//             height={500}
//             className="rounded-lg shadow-lg object-cover w-full h-auto"
//             />
//           </div>
//           </div>
//           <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
//           特殊洗浄/コーティング/文字ペイントの施工
//           </h4>
//         </div>
//         </div>
//       </div>
//       </section>

//       {/* Services and Pricing Section */}
//       <section className="py-16 md:py-24 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
//             style={{ fontFamily: "Shippori Mincho, serif" }}
//           >
//             プラン
//           </h2>
//           <p className="text-center text-lg text-gray-500 mb-16 font-sans">PLAN</p>

//           <div className="space-y-12">
//             <div className="border border-gray-300 rounded-lg shadow-lg p-8 text-center bg-white">
//               <h3
//                 className="text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 お掃除プラン
//               </h3>
//               <p className="font-semibold text-gray-700 mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 （下記工程：①⑥）
//               </p>
//               <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 墓石の拭き上げ、周囲の草取り・清掃を行う簡易的なプラン
//               </p>
//               <p className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 12,800円<span className="text-lg font-normal">（税抜）～</span>
//               </p>
//               <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 ※別途、交通費がかかります
//               </p>
//             </div>

//             <div className="border-2 border-black rounded-lg shadow-xl p-8 text-center bg-white relative">
//               <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full font-bold text-sm">
//                 おすすめ
//               </span>
//               <h3
//                 className="text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 手洗い洗浄プラン
//               </h3>
//               <p className="font-semibold text-gray-700 mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 （下記工程：①②③④⑤⑥）
//               </p>
//               <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 手洗いで優しく墓石の内部から長年の汚れを取り去り、<br />
//                 キレイに磨き上げ、周囲の草取り・清掃も付いたプラン<br />
//                 ※墓石洗浄には石材に優しい専用洗剤を使用
//                 {/* <span className="text-sm text-gray-600 mt-2 block">※墓石洗浄には石材に優しい専用洗剤を使用</span> */}
//               </p>
//               <p className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 69,800円<span className="text-lg font-normal">（税抜）～</span>
//               </p>
//               <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 ※別途、交通費がかかります
//               </p>
//             </div>

//             <div className="border border-gray-300 rounded-lg shadow-lg p-8 text-center bg-white">
//               <h3
//                 className="text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 手洗い洗浄＆コーティングプラン
//               </h3>
//               <p className="font-semibold text-gray-700 mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 （下記工程：①②③④⑤⑥⑦⑧）
//               </p>
//               <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 手洗い洗浄プランに加え、墓石表面の小さな穴をふさぐ特殊コーティングを施して、<br />
//                 水の吸い込みを防ぎ、墓石を長持ちさせるプレミアムプラン
//               </p>
//               <p className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 111,800円<span className="text-lg font-normal">（税抜）～</span>
//               </p>
//               <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//                 ※別途交通費がかかります
//               </p>
//             </div>
//           </div>

//           <div className="text-center mt-12 py-4">
//             <p className="text-base text-gray-700" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               各種料金は、建墓年数、墓石サイズ、汚れの状態によって変動いたします<br />
//               詳しくはお見積もりにてご提示いたします
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto text-center">
//           <h2
//             className="text-2xl md:text-3xl font-bold mb-4 text-black"
//             style={{ fontFamily: "Shippori Mincho, serif" }}
//           >
//             『お見積もり依頼』はLINE公式アカウントより
//             <br />
//             お問い合わせください
//           </h2>
//           <p
//             className="text-base md:text-lg mb-8 text-gray-700"
//             style={{ fontFamily: "Noto Sans JP, sans-serif" }}
//           >
//             下記のボタンをクリックして「友だち追加」
//           </p>

//           <div className="mb-8">
//             <a
//               href="https://lin.ee/ml9SSzW"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block"
//             >
//               <Image
//                 src="/line_add_friend.png"
//                 alt="LINEで友だち追加"
//                 width={232}
//                 height={72}
//                 className="transition-transform duration-300 hover:scale-105"
//               />
//             </a>
//           </div>
//         </div>
//         </div>
//       </section>

//       {/* 清掃工程セクションの始まり */}
//     <section className="py-16 md:py-24 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
//           style={{ fontFamily: "Shippori Mincho, serif" }}
//         >
//           清掃工程
//         </h2>
//         <p className="text-center text-lg text-gray-500 mb-16 font-sans">PROCESS</p>

//         {/* 8つの工程をグリッドで表示 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* 工程 1 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_1.jpg"
//               alt="草取り・掃除の様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>1</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 草取り・掃除
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               お墓周辺の草取りと清掃をします。
//             </p>
//           </div>

//           {/* 工程 2 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_2.jpg"
//               alt="汚れ落としの様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>2</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 汚れ落とし
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               たっぷりと水をかけ、軟らかいブラシで表面にこびりついた汚れを落とします。
//             </p>
//           </div>

//           {/* 工程 3 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_3.jpg"
//               alt="洗剤塗布の様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>3</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 洗剤塗布
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               石材に優しい専用洗剤を汚れの性質ごとに使い分けて塗布します。
//             </p>
//           </div>

//           {/* 工程 4 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_4.jpg"
//               alt="細かな汚れ落としの様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>4</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 汚れ落とし
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               洗剤で浮き上がった汚れを落とします。文字のくぼみ等、細かな箇所も道具を使い分けます。
//             </p>
//           </div>

//           {/* 工程 5 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_5.jpg"
//               alt="洗い流しの様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>5</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 洗い流し
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               たっぷり水を使って、手で丁寧に洗い流します。
//             </p>
//           </div>

//           {/* 工程 6 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_6.jpg"
//               alt="拭き上げの様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>6</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 拭き上げ
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               キレイになったお墓を丁寧に拭き上げます。
//             </p>
//           </div>

//           {/* 工程 7 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_7.jpg"
//               alt="コーティングの様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>7</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 コーティング
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               専用のコーティング剤で墓石表面の小さな穴をふさぎます。
//             </p>
//           </div>

//           {/* 工程 8 */}
//           <div className="flex flex-col">
//             <Image
//               src="/koutei_8.jpg"
//               alt="文字塗りの様子"
//               width={400}
//               height={300}
//               className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
//             />
//             <div className="flex items-center mb-2">
//               <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
//                 <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>8</span>
//               </div>
//               <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
//                 文字塗り
//               </h3>
//             </div>
//             <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               専用の塗料で文字に色を入れます。
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     {/* 清掃工程セクションの終わり */}

//     <section className="py-16 md:py-24 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
//             style={{ fontFamily: "Shippori Mincho, serif" }}
//           >
//             ご利用の流れ
//           </h2>
//           <p className="text-center text-lg text-gray-500 mb-16 font-sans">FLOW</p>

//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
//                 <Image
//                     src="0724_photo_1.JPEG"
//                     alt="問い合わせのイメージ"
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3
//                 className="text-xl md:text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 1. 問い合わせする
//               </h3>
//               <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               公式LINEアカウント、お問い合わせフォームよりお気軽にご連絡ください
//               </p>
//             </div>

//             <div className="text-center">
//              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
//                 <Image
//                     src="0724_photo_2.JPEG"
//                     alt="見積書のイメージ"
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3
//                 className="text-xl md:text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 2. 見積書を受け取る
//               </h3>
//               <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               弊社で現地調査を行い、お客様へ御見積書をご提出します。内容についてご不明点があれば、お気軽にご連絡ください
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
//                 <Image
//                     src="0724_photo_3.JPEG"
//                     alt="発注のイメージ"
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3
//                 className="text-xl md:text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 3. 発注する
//               </h3>
//               <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               御見積書の内容に問題がなければ、発注の旨をご連絡ください
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
//                 <Image
//                     src="0724_photo_4.JPEG"
//                     alt="完了報告書のイメージ"
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3
//                 className="text-xl md:text-2xl font-bold mb-4 text-black"
//                 style={{ fontFamily: "Shippori Mincho, serif" }}
//               >
//                 4. 完了報告書を受ける
//               </h3>
//               <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               ビフォーアフターの写真を載せた完了報告書（PDFデータ）をご確認ください
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 px-4 bg-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2
//             className="text-2xl md:text-3xl font-bold mb-4 text-black"
//             style={{ fontFamily: "Shippori Mincho, serif" }}
//           >
//             『お見積もり依頼』はLINE公式アカウントより
//             <br />
//             お問い合わせください
//           </h2>
//           <p
//             className="text-base md:text-lg mb-8 text-gray-700"
//             style={{ fontFamily: "Noto Sans JP, sans-serif" }}
//           >
//             下記のボタンをクリックして「友だち追加」
//           </p>

//           <div className="mb-8">
//             <a
//               href="https://lin.ee/ml9SSzW"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block"
//             >
//               <Image
//                 src="/line_add_friend.png"
//                 alt="LINEで友だち追加"
//                 width={232}
//                 height={72}
//                 className="transition-transform duration-300 hover:scale-105"
//               />
//             </a>
//           </div>

//           <p
//             className="text-lg md:text-xl font-bold text-black mb-2"
//             style={{ fontFamily: "Noto Sans JP, sans-serif" }}
//           >
//             お見積もり・ご相談は<u >完全無料</u>です
//           </p>
//           <p
//             className="text-base text-gray-600"
//             style={{ fontFamily: "Noto Sans JP, sans-serif" }}
//           >
//             どんな小さなことでもお気軽にお問い合わせください
//           </p>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-8">
//             <Image
//               src="restone_logo_2.jpg"
//               alt="代表者アイコン"
//               width={200}
//               height={200}
//               className="rounded-full mx-auto shadow-lg"
//             />
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg text-left">
//             <h3
//               className="text-2xl md:text-3xl font-bold mb-6 text-black text-center"
//               style={{ fontFamily: "Shippori Mincho, serif" }}
//             >
//               会社情報
//             </h3>
//             <div className="space-y-4 text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//               <div className="flex items-center">
//                 <span className="font-bold w-24 md:w-32">代表者　</span>
//                 <span>青木昌典</span>
//               </div>
//               <div className="flex items-center">
//                 <span className="font-bold w-24 md:w-32">所在地　</span>
//                 <span>〒160-0022<br />東京都新宿区新宿2丁目12番13号 新宿アントレサロンビル2階</span>
//               </div>
//               {/* <div className="flex items-center">
//                 <span className="font-bold w-24 md:w-32">営業時間：</span>
//                 <span>9:00〜18:00（年中無休）</span>
//               </div> */}
//               {/* <div className="items-center">
//                 <span className="font-bold  text-center w-24 md:w-32"></span>
//                 <span>アシストーン株式会社正規代理店</span>
//                 <Image
//                   src="logo.JPEG"
//                   alt="ロゴ画像"
//                   width={120}
//                   height={40}
//                   className="center"
//                 />
//               </div> */}
//               <div className="flex flex-col items-center">
//                 <Image
//                     src="logo.JPEG"
//                     alt="ロゴ画像"
//                     width={120}
//                     height={40}
//                   />
//                 <span className="mb-2">アシストーン株式会社正規代理店</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white py-8 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-lg md:text-xl mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
//             © Re:Stone All Rights Reserved.
//           </p>
//           <Link href="/privacy" className="text-white hover:text-gray-300 underline text-base md:text-lg">
//             プライバシーポリシー
//           </Link>
//         </div>
//       </footer>
//     </div>
//   )
// }

import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from "next/image"
import { ClipboardList, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/top.jpg?height=1080&width=1920"
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
              リストーンワークス
            </h1>
            <p className="text-lg md:text-xl text-gray-200" style={{ fontFamily: "Shippori Mincho, serif" }}>
              RESTONEWORKS
            </p>
          </div>

          <p
            className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            墓石清掃 | 真心を込めて手洗い
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
          style={{ fontFamily: "Shippori Mincho, serif" }}
        >
          リストーンワークスの信念
        </h2>
        <p className="text-center text-lg text-gray-500 mb-16 font-sans">BELIEF</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                src="sinnen_1.jpg"
                alt="合掌のイメージ"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className="text-lg md:text-xl font-bold mb-4 text-black"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              ①合掌で始まり、合掌で終わる
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              故人へ敬意を込めて、<br />供養の気持ちで丁寧に手洗いします
            </p>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                src="sinnen_2.jpg"
                alt="配達人のイメージ"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className="text-lg md:text-xl font-bold mb-4 text-black"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              ②現世から黄泉への配達人
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              何かしらの理由で足を運べずとも、<br />ご家族の想いを故人へ届けます
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-black"
        style={{ fontFamily: "Shippori Mincho, serif" }}
        >
        リストーンワークスの技術
        </h2>
        <p
        className="text-center text-xl md:text-2xl text-black font-bold mb-16"
        style={{ fontFamily: "Shippori Mincho, serif" }}
        >
        BEFORE<span className="text-black mx-2">→</span>AFTER
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

        <div className="text-center">
          <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="font-bold mb-2 text-gray-600">Before</p>
            <Image
            src="sekou1.jpeg"
            alt="特殊洗浄前の地蔵"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <p className="font-bold mb-2 text-gray-600">After</p>
            <Image
            src="sekou2.jpeg"
            alt="特殊洗浄後の地蔵"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          </div>
          <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
          特殊洗浄の施工例
          </h4>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="font-bold mb-2 text-gray-600">Before</p>
            <Image
            src="sekou7_2.JPEG"
            alt="特殊洗浄前の墓石"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <p className="font-bold mb-2 text-gray-600">After</p>
            <Image
            src="sekou4_2.JPEG"
            alt="特殊洗浄後の墓石"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          </div>
          <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
          特殊洗浄の施工例
          </h4>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="font-bold mb-2 text-gray-600">Before</p>
            <Image
            src="sekou5.jpeg"
            alt="文字ペイント前の墓石"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <p className="font-bold mb-2 text-gray-600">After</p>
            <Image
            src="sekou6.jpeg"
            alt="文字ペイント後の墓石"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          </div>
          <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
          特殊洗浄/文字ペイントの施工
          </h4>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="font-bold mb-2 text-gray-600">Before</p>
            <Image
            src="sekou8.JPEG"
            alt="施工前の墓誌"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <p className="font-bold mb-2 text-gray-600">After</p>
            <Image
            src="sekou3.jpeg"
            alt="施工後の墓誌"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          </div>
          <h4 className="text-lg font-bold text-[#333333]" style={{ fontFamily: "Shippori Mincho, serif" }}>
          特殊洗浄/コーティング/文字ペイントの施工
          </h4>
        </div>
        </div>
      </div>
      </section>

      {/* Services and Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            プラン
          </h2>
          <p className="text-center text-lg text-gray-500 mb-16 font-sans">PLAN</p>

          <div className="space-y-12">
            <div className="border border-gray-300 rounded-lg shadow-lg p-8 text-center bg-white">
              <h3
                className="text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                お掃除プラン
              </h3>
              <p className="font-semibold text-gray-700 mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                （下記工程：①⑥）
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                墓石の拭き上げ、周囲の草取り・清掃を行う簡易的なプラン
              </p>
              <p className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Shippori Mincho, serif" }}>
                12,800円<span className="text-lg font-normal">（税抜）～</span>
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                ※別途、交通費がかかります
              </p>
            </div>

            <div className="border-2 border-black rounded-lg shadow-xl p-8 text-center bg-white relative">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full font-bold text-sm">
                おすすめ
              </span>
              <h3
                className="text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                手洗い洗浄プラン
              </h3>
              <p className="font-semibold text-gray-700 mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                （下記工程：①②③④⑤⑥）
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                手洗いで優しく墓石の内部から長年の汚れを取り去り、<br />
                キレイに磨き上げ、周囲の草取り・清掃も付いたプラン<br />
                ※墓石洗浄には石材に優しい専用洗剤を使用
                {/* <span className="text-sm text-gray-600 mt-2 block">※墓石洗浄には石材に優しい専用洗剤を使用</span> */}
              </p>
              <p className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Shippori Mincho, serif" }}>
                69,800円<span className="text-lg font-normal">（税抜）～</span>
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                ※別途、交通費がかかります
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg shadow-lg p-8 text-center bg-white">
              <h3
                className="text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                手洗い洗浄＆コーティングプラン
              </h3>
              <p className="font-semibold text-gray-700 mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                （下記工程：①②③④⑤⑥⑦⑧）
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                手洗い洗浄プランに加え、墓石表面の小さな穴をふさぐ特殊コーティングを施して、<br />
                水の吸い込みを防ぎ、墓石を長持ちさせるプレミアムプラン
              </p>
              <p className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "Shippori Mincho, serif" }}>
                111,800円<span className="text-lg font-normal">（税抜）～</span>
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                ※別途交通費がかかります
              </p>
            </div>
          </div>

          <div className="text-center mt-12 py-4">
            <p className="text-base text-gray-700" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              各種料金は、建墓年数、墓石サイズ、汚れの状態によって変動いたします<br />
              詳しくはお見積もりにてご提示いたします
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-black"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            『お見積もり依頼』はLINE公式アカウントより
            <br />
            お問い合わせください
          </h2>
          <p
            className="text-base md:text-lg mb-8 text-gray-700"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            下記のボタンをクリックして「友だち追加」
          </p>

          <div className="mb-8">
            <a
              href="https://lin.ee/ml9SSzW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/line_add_friend.png"
                alt="LINEで友だち追加"
                width={232}
                height={72}
                className="transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* 清掃工程セクションの始まり */}
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
          style={{ fontFamily: "Shippori Mincho, serif" }}
        >
          清掃工程
        </h2>
        <p className="text-center text-lg text-gray-500 mb-16 font-sans">PROCESS</p>

        {/* 8つの工程をグリッドで表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 工程 1 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_1.jpg"
              alt="草取り・掃除の様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>1</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                草取り・掃除
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              お墓周辺の草取りと清掃をします。
            </p>
          </div>

          {/* 工程 2 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_2.jpg"
              alt="汚れ落としの様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>2</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                汚れ落とし
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              たっぷりと水をかけ、軟らかいブラシで表面にこびりついた汚れを落とします。
            </p>
          </div>

          {/* 工程 3 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_3.jpg"
              alt="洗剤塗布の様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>3</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                洗剤塗布
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              石材に優しい専用洗剤を汚れの性質ごとに使い分けて塗布します。
            </p>
          </div>

          {/* 工程 4 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_4.jpg"
              alt="細かな汚れ落としの様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>4</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                汚れ落とし
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              洗剤で浮き上がった汚れを落とします。文字のくぼみ等、細かな箇所も道具を使い分けます。
            </p>
          </div>

          {/* 工程 5 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_5.jpg"
              alt="洗い流しの様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>5</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                洗い流し
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              たっぷり水を使って、手で丁寧に洗い流します。
            </p>
          </div>

          {/* 工程 6 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_6.jpg"
              alt="拭き上げの様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>6</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                拭き上げ
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              キレイになったお墓を丁寧に拭き上げます。
            </p>
          </div>

          {/* 工程 7 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_7.jpg"
              alt="コーティングの様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>7</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                コーティング
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              専用のコーティング剤で墓石表面の小さな穴をふさぎます。
            </p>
          </div>

          {/* 工程 8 */}
          <div className="flex flex-col">
            <Image
              src="/koutei_8.jpg"
              alt="文字塗りの様子"
              width={400}
              height={300}
              className="rounded-md shadow-lg mb-4 w-full object-cover aspect-[4/3]"
            />
            <div className="flex items-center mb-2">
              <div className="border border-black flex-shrink-0" style={{ padding: '2px 8px' }}>
                <span className="text-xl font-bold" style={{ fontFamily: "Shippori Mincho, serif" }}>8</span>
              </div>
              <h3 className="text-xl font-bold text-black ml-3" style={{ fontFamily: "Shippori Mincho, serif" }}>
                文字塗り
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              専用の塗料で文字に色を入れます。
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 清掃工程セクションの終わり */}

    <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-black"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            ご利用の流れ
          </h2>
          <p className="text-center text-lg text-gray-500 mb-16 font-sans">FLOW</p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="0724_photo_1.JPEG"
                    alt="問い合わせのイメージ"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                1. 問い合わせする
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              公式LINEアカウント、お問い合わせフォームよりお気軽にご連絡ください
              </p>
            </div>

            <div className="text-center">
             <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="0724_photo_2.JPEG"
                    alt="見積書のイメージ"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                2. 見積書を受け取る
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              弊社で現地調査を行い、お客様へ御見積書をご提出します。内容についてご不明点があれば、お気軽にご連絡ください
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="0724_photo_3.JPEG"
                    alt="発注のイメージ"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                3. 発注する
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              御見積書の内容に問題がなければ、発注の旨をご連絡ください
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="0724_photo_4.JPEG"
                    alt="完了報告書のイメージ"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-black"
                style={{ fontFamily: "Shippori Mincho, serif" }}
              >
                4. 完了報告書を受ける
              </h3>
              <p className="text-base md:text-lg" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              ビフォーアフターの写真を載せた完了報告書（PDFデータ）をご確認ください
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-black"
            style={{ fontFamily: "Shippori Mincho, serif" }}
          >
            『お見積もり依頼』はLINE公式アカウントより
            <br />
            お問い合わせください
          </h2>
          <p
            className="text-base md:text-lg mb-8 text-gray-700"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            下記のボタンをクリックして「友だち追加」
          </p>

          <div className="mb-8">
            <a
              href="https://lin.ee/ml9SSzW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/line_add_friend.png"
                alt="LINEで友だち追加"
                width={232}
                height={72}
                className="transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          <p
            className="text-lg md:text-xl font-bold text-black mb-2"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            お見積もり・ご相談は<u >完全無料</u>です
          </p>
          <p
            className="text-base text-gray-600"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            どんな小さなことでもお気軽にお問い合わせください
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="restone_logo_2.jpg"
              alt="代表者アイコン"
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-lg"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-6 text-black text-center"
              style={{ fontFamily: "Shippori Mincho, serif" }}
            >
              会社情報
            </h3>
            <div className="space-y-4 text-lg md:text-xl" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
              <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">代表者　</span>
                <span>青木昌典</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">所在地　</span>
                <span>〒160-0022<br />東京都新宿区新宿2丁目12番13号 新宿アントレサロンビル2階</span>
              </div>
              {/* <div className="flex items-center">
                <span className="font-bold w-24 md:w-32">営業時間：</span>
                <span>9:00〜18:00（年中無休）</span>
              </div> */}
              {/* <div className="items-center">
                <span className="font-bold  text-center w-24 md:w-32"></span>
                <span>アシストーン株式会社正規代理店</span>
                <Image
                  src="logo.JPEG"
                  alt="ロゴ画像"
                  width={120}
                  height={40}
                  className="center"
                />
              </div> */}
              <div className="flex flex-col items-center">
                <Image
                    src="logo.JPEG"
                    alt="ロゴ画像"
                    width={120}
                    height={40}
                  />
                <span className="mb-2">アシストーン株式会社正規代理店</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-4" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
            © RESTONEWORKS All Rights Reserved.
          </p>
          <Link href="/privacy" className="text-white hover:text-gray-300 underline text-base md:text-lg">
            プライバシーポリシー
          </Link>
        </div>
      </footer>
    </div>
  )
}