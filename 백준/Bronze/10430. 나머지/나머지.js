const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const A = input[0];
const B = input[1];
const C = input[2];
function solution(A, B, C) {
  let answer = [];
  answer[0] = (A + B) % C;
  answer[1] = ((A % C) + (B % C)) % C;
  answer[2] = (A * B) % C;
  answer[3] = ((A % C) * (B % C)) % C;
  for (let i = 0; i < 4; i++) console.log(answer[i]);
}
solution(A, B, C);
