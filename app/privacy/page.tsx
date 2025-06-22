import React from 'react';
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