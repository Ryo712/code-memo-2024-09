// pages/index.tsx
import React from 'react';
import { calculateSum, calculateDifference } from '../lib/utils';

const Home: React.FC = () => {
  const num1 = 10;
  const num2 = 5;

  return (
    <div>
      <h1>Basic Math Operations</h1>
      <p>Sum of {num1} and {num2}: {calculateSum(num1, num2)}</p>
      <p>Difference of {num1} and {num2}: {calculateDifference(num1, num2)}</p>
    </div>
  );
};

export default Home;
/*.tsxファイルではReactのコンポーネントを使い、UIを表示しています。<div> や <p> などのタグを使ってHTMLライクな構文でUIを定義しています。
また、.ts ファイルの関数をインポートして使用しています。 */