const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const N = input[0];
const K = input[1];
const mod = 1000000000;

const d = [];

//이차원 배열 d 세팅
for (let i = 0; i <= N; i++) {
  const temp = new Array(K + 1).fill(0);
  d[i] = temp;
}

for (let i = 0; i <= K; i++) {
  d[0][i] = 1;
}
for (let i = 0; i <= K; i++) {
  d[1][i] = i;
}

for (let i = 2; i <= N; i++) {
  d[i][0] = 0;
  d[i][1] = 1;
  for (let j = 2; j <= K; j++) {
    sum = 0;
    for (let k = 0; k <= i; k++) {
      sum += d[k][j - 1];
    }
    d[i][j] = sum % mod;
  }
}
console.log(d[N][K]);
