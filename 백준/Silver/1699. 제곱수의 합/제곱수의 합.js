const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const N = Number(input);
const d = [0, 1, 2, 3];
for (let i = 4; i <= N; i++) {
  if (Math.sqrt(i) % 1 === 0) d[i] = 1;
  else {
    d[i] = i;
    for (let j = 1; j < i/2; j++) {
      d[i] = Math.min(d[i], d[j] + d[i - j]);
    }
  }
}

console.log(d[N]);
