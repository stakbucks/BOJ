const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const targetN = Number(input);

let count = 0;
function solution(N) {
  const q = parseInt(N / 10);
  const m = N % 10;
  const a = m;
  const b = (q + m) % 10;
  const newN = 10 * a + b;
  count++;
  if (newN === targetN) return;
  solution(newN);
}
solution(targetN);
console.log(count);
