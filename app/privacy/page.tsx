import React from 'react';
// import { Phone, Mail, ChevronDown, CheckCircle, ArrowRight, ArrowDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
import Link from 'next/link';

// const PrivacyPolicyPage = async () => {
//   // サーバーサイドで privacy.txt ファイルを読み込む
//     const privacyPolicyText = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/privacy/privacy.txt`
//     ).then((res) => res.text());

//     return (
//         <div className="bg-[#f6ede8] min-h-screen py-12 px-4 md:px-8 lg:px-16">
//         <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-6 md:p-8">
//             <h1 className="text-2xl md:text-3xl font-bold text-[#20319d] mb-6" style={{ fontFamily: "Shippori Mincho, serif" }}>
//             プライバシーポリシー
//             </h1>
//             <div className="whitespace-pre-line text-gray-700" style={{ fontFamily: "Noto Sans JP, sans-serif", lineHeight: '1.7' }}>
//             株式会社〇〇（以下「当社」といいます。）は、本ウェブサイト（以下「本サイト」といいます。）を通じて取得する個人情報について、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。

//             第1条（個人情報取扱事業者）
//             株式会社〇〇

//             第2条（取得する個人情報）
//             当社は、本サイトを通じて以下の個人情報を取得する場合があります。
//             * お名前
//             * メールアドレス
//             * 電話番号

//             第3条（個人情報の利用目的）
//             当社は、取得した個人情報を以下の目的で利用します。
//             * お問い合わせへの対応
//             * サービスに関する情報提供
//             * その他、上記に付随する業務

//             第4条（個人情報の第三者提供）
//             当社は、法令に基づく場合を除き、ご本人の同意なしに個人情報を第三者に提供することはありません。

//             第5条（個人情報の管理）
//             当社は、個人情報の漏洩、滅失、毀損等を防止するために、適切な安全管理措置を講じます。

//             第6条（個人情報の開示・訂正・削除）
//             ご本人からの個人情報の開示、訂正、削除等のご請求につきましては、法令に基づき適切に対応いたします。

//             第7条（プライバシーポリシーの変更）
//             当社は、必要に応じて本ポリシーを変更することがあります。変更後の本ポリシーは、本サイトに掲載した時点から効力を生じるものとします。

//             第8条（お問い合わせ窓口）
//             個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
//             株式会社〇〇
//             担当：〇〇
//             メールアドレス：〇〇
//             電話番号：〇〇

//             制定日：2024年〇月〇日
//             </div>
//         </div>
//         </div>
//     );
// };

// export default PrivacyPolicyPage;


// app/privacy/page.tsx

import fs from 'fs';
import path from 'path';

const PrivacyPolicyPage = () => {
  // publicディレクトリにあるprivacy.txtファイルへのパスを構築
    const filePath = path.join(process.cwd(), 'public', 'privacy', 'privacy.txt');

    // ファイルを読み込む
    const privacyPolicyText = fs.readFileSync(filePath, 'utf8');

    return (
        <div style={{ backgroundColor: '#f6ede8', minHeight: '100vh', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', borderRadius: '0.375rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', padding: '2rem' }}>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#20319d', marginBottom: '1.5rem', fontFamily: "Shippori Mincho, serif" }}>
            プライバシーポリシー
            </h1>
            {/* テキスト内の改行を<br />に変換して表示 */}
            <div style={{ color: '#333333', fontFamily: "Noto Sans JP, sans-serif", lineHeight: '1.75' }}>
            {privacyPolicyText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                {line}
                <br />
                </React.Fragment>
            ))}
            </div>
        </div>
        </div>
    );
};

export default PrivacyPolicyPage;