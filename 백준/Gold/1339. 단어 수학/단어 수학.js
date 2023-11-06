const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));

function solution(input) {
  const [N] = input.shift().map((v) => Number(v));
  const words = input.sort((a, b) => b.length - a.length);

  // 자릿수
  const digit = new Map();
  const map = new Map();

  // 자리수
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!digit.has(words[i][j])) {
        digit.set(words[i][j], Math.pow(10, words[i].length - j - 1));
      } else {
        digit.set(words[i][j], digit.get(words[i][j]) + Math.pow(10, words[i].length - j - 1));
      }
    }
  }

  const sortedDigit = new Map([...digit.entries()].sort((a, b) => b[1] - a[1]));

  let result = 0;
  let number = 9;
  sortedDigit.forEach((value, key) => {
    result += value * number--;
  });
  console.log(result);
  // sortedDigit.forEach((value, key) => {
  //   map.set(key, numbers.pop());
  // });
  // for (const word of words) {
  //   let temp = '';
  //   word.reverse().forEach((alphabet) => {
  //     temp += map.get(alphabet);
  //   });
  //   result.push(temp);
  // }
  // console.log(result.reduce((acc, cur) => acc + Number(cur), 0));
}
solution(input);
