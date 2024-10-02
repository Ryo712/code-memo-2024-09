import React from 'react';
import Head from 'next/head';  // Headコンポーネントのインポート
import { sum, multiply } from '../lib/utils';

export default async function Home() {
  // サーバーサイドでランダムな2つの数値を生成
  const num1 = Math.floor(Math.random() * 10); // 0 〜 9 のランダムな数
  const num2 = Math.floor(Math.random() * 10); // 0 〜 9 のランダムな数

  // JSXを返して、UIを構築
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Headコンポーネントの追加 
      <meta> タグにページの説明やSNSシェア時に表示される情報、モバイル対応の設定等を行う。
      viewport：レスポンシブ対応
      メタタグ：SNSシェア時の情報（OGP）**を設定し、シェアされた際の見栄えを調整できる。
      */} 
      <Head>
        <title>Basic Math Operations - Random Calculation</title>
        <meta name="description" content={`This page shows basic math operations with random numbers ${num1} and ${num2}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Basic Math Operations" />
        <meta property="og:description" content={`Sum and multiplication of random numbers: ${num1} and ${num2}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ページのメインコンテンツ */}
      <h1>Basic Math Operations</h1>
      <p>Random Number 1: {num1}</p>
      <p>Random Number 2: {num2}</p>
      <p>Sum of {num1} and {num2}: {sum(num1, num2)}</p>
      <p>Multiplication of {num1} and {num2}: {multiply(num1, num2)}</p>
    </div>
  );
}
