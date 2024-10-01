import React from 'react';
import { sum, multiply } from '../lib/utils';

export default async function Home() {
  // サーバーサイドでランダムな2つの数値を生成
  const num1 = Math.floor(Math.random() * 10); // 0 〜 9 のランダムな数
  const num2 = Math.floor(Math.random() * 10); // 0 〜 9 のランダムな数

  // JSXを返して、UIを構築
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Basic Math Operations</h1>
      <p>Random Number 1: {num1}</p>
      <p>Random Number 2: {num2}</p>
      <p>Sum of {num1} and {num2}: {sum(num1, num2)}</p>
      <p>Multiplication of {num1} and {num2}: {multiply(num1, num2)}</p>
    </div>
  );
}
