const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = BigInt(input);
  let current = BigInt(N + BigInt(1));

  // 자릿수
  const length = current.toString().length;
  if (length === 1) {
    console.log(current.toString());
    return;
  }

  let [leftHalf, rightHalf] = [current.toString().slice(0, Math.floor(length / 2)), current.toString().slice(Math.ceil(length / 2))].map((v) => BigInt(v));
  let middle = length % 2 ? BigInt(current.toString().slice(Math.floor(length / 2), Math.ceil(length / 2))) : null;

  if (BigInt(reverseNumToString(leftHalf)) === rightHalf) {
    console.log(current.toString());
    return;
  }

  if (BigInt(reverseNumToString(leftHalf)) > rightHalf) {
    if (middle !== null) {
      console.log(combineNums(leftHalf, middle, reverseNumToString(leftHalf)).toString());
    } else {
      console.log(combineNums(leftHalf, reverseNumToString(leftHalf)).toString());
    }
    return;
  }
  if (BigInt(reverseNumToString(leftHalf)) < rightHalf) {
    if (middle !== null) {
      middle += BigInt(1);
      if (middle === BigInt(10)) {
        middle = BigInt(0);
        leftHalf += BigInt(1);
      }
      console.log(combineNums(leftHalf, middle, reverseNumToString(leftHalf)).toString());
    } else {
      console.log(combineNums(leftHalf + BigInt(1), reverseNumToString(leftHalf + BigInt(1))).toString());
    }
    return;
  }

  function reverseNumToString(num) {
    return num.toString().split('').reverse().join('');
  }

  function combineNums(...nums) {
    return BigInt(nums.reduce((acc, cur) => acc + cur.toString()));
  }
}

solution(input);
