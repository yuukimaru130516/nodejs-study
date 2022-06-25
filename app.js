'use strict';

//const number = process.argv[2] || 0;

// let sum = 0;
// for(let i=0; i<=number; i++){
//   sum += i;
// }

// console.log(sum);

/**
 * 階乗の計算
 * @param {Number} number
 * @returns {Number}
 */

const factorial = number => {
  let result = 1;
  for(number; number > 0; number--){
    result = result * number;
  }
  return result
}

const assert = require('assert');
assert.strictEqual(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.strictEqual(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
assert.strictEqual(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3)}でした`);
assert.strictEqual(
  factorial(10),
  3628800,
  `10の階乗は3628800ですが、実際は${factorial(10)}でした`
);
console.log('全てのテストを通過しました');