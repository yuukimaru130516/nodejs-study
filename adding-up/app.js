'use strict';

const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./popu-pref.csv');
const rl = readline.createInterface({input :rs});
const prefectureDataMap = new Map(); // key:都道府県, value: 集計データ

rl.on('line', lineString => {
  const columns = lineString.split(',');
  const year = parseInt(columns[0]);
  const prefecture = columns[1];
  const popu = parseInt(columns[3]);
  if(year === 2015 || year === 2010){
    let value = {};

    if(prefectureDataMap.has(prefecture)){
      value = prefectureDataMap.get(prefecture)
    }else{
      value = {
        popu10: 0,
        popu15: 0,
        change: null
      };
    }

    if(year === 2010) {
      value.popu10 = popu
    }else{
      value.popu15 = popu
    }

    prefectureDataMap.set(columns[1], value);
  }
});

rl.on('close', () => {
  prefectureDataMap.forEach((data) => {
    data.change = (((data.popu15 - data.popu10)/data.popu10)*100).toFixed(2)
  });

  const rankingArray = Array.from(prefectureDataMap).sort((pair1, pair2) => {
    return pair1[1].change - pair2[1].change
  });

  const rankingStrings = rankingArray.map(([key, value], i) => {
    return `${key}: ${value.popu10} => ${value.popu15} 変化率: ${i+1}位: ${value.change}\%`
  });
  console.log(rankingStrings)
});

