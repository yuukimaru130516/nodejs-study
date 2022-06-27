'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 * @module add
 * @param {number} [numbers] 数値の配列
 * @return {number} res 計算結果
 *
 */

const add = (numbers) => {
  let res = 0;
  numbers.forEach((ele) => {
    res += ele;
  });
  return res;
}

/**
 * 数値の配列を受け取って、その要素を全て掛け合わせる
 * @module multi
 * @param {number} [numbers] 数値の配列
 * @return {number} res 計算結果
 */

const multi = numbers => {
  let res = 1;
  for(let i=0; i<numbers.length; i++){
    res *= numbers[i];
  }
  return res
}

module.exports = {add, multi}