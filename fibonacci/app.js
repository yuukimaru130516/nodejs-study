'use strict';

const n = process.argv[2] || 0;

// const fib = n => {
//   if(n===0){
//     return 0;
//   }else if(n===1){
//     return 1;
//   }else{
//     return fib(n-1) + fib(n-2)
//   }
// }

// for(let i=0; i<=n; i++){
//   console.log(fib(i))
// }


let etoMap = new Map();

etoMap.set('子', 'mouse');
etoMap.set('丑', 'cow');

console.log(etoMap.get('子'), etoMap.get('寅'));


let calenderMap = new Map();
const calenders = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for(let i=1; i<=calenders.length; i++){
  calenderMap.set(i, calenders[i-1]);
}

// アルゴリズムの改良

const memo = new Map();

// 初期値
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if(memo.has(n)) return memo.get(n);
  const value = fib(n-1) + fib(n-2);
  memo.set(n, value)
  return value;
}

// for(let i=0; i<n; i++){
//   console.log(fib(i));
// }


// トリボナッチ数列
const tri_memo = new Map();
tri_memo.set(0, 0);
tri_memo.set(1, 0);
tri_memo.set(2, 1);

const tribo = n => {
  if(tri_memo.has(n)) {
    return tri_memo.get(n)
  }else{
    const val = tribo(n-3) + tribo(n-2) + tribo(n-1);
    tri_memo.set(n, val);
    return tri_memo.get(n);
  }
}

tribo(10)
console.log(tri_memo)

// for(let i=0; i<n; i++){
//   console.log(tribo(i));
// }