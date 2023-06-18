const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const [N, K] = input.split(" ").map(Number);
  const queue = Array(N)
    .fill(0)
    .map((v, i) => i + 1);
  const answer = [];
  let count = 0;
  while (queue.length) {
    count++;
    if (count % K === 0) {
      answer.push(queue.shift());
    } else {
      queue.push(queue.shift());
    }
  }
  console.log("<" + answer.join(", ") + ">");
}
solution(input);
