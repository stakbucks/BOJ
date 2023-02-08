const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

function solution(string) {
  let isgroup = true;
  const str = string.trim().split("");
  const temp = [];
  let i = 0;
  while (i < str.length) {
    if (temp.indexOf(str[i]) !== -1) {
      isgroup = false;
      break;
    }

    if (str[i + 1] !== str[i]) {
      temp.push(str[i]);
    }
    i++;
  }
  return isgroup;
}
let count = 0;
for (let i = 0; i < N; i++) {
  if (solution(arr[i]) === true) count++;
}
console.log(count);