const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const N = Number(input);
const mod = 1000000000;
const d = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 1],
];

function getSum(arr) {
  const result = arr.reduce((a, v) => a + v, 0);
  return result % mod;
}

function get(i) {
  const temp = [];
  for (j = 0; j <= 8; j++) {
    if (j === 0) {
      temp[j] = (d[i - 2][0] + d[i - 1][1]) % mod;
    } else if (j < 8) {
      temp[j] = (d[i - 1][j - 1] + d[i - 1][j + 1]) % mod;
    } else {
      temp[j] = d[i - 1][7] % mod;
    }
  }
  d[i] = temp;
}

function solution(N) {
  for (let i = 3; i <= N; i++) {
    get(i);
  }
}
solution(N);
console.log(getSum(d[N]));
