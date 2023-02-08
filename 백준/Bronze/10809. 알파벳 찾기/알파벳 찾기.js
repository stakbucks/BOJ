const fs = require("fs");
const { Z_ASCII } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");
const answer = [];
for (let i = 97; i <= 122; i++) {
  const ind = input.findIndex((n) => n === String.fromCharCode(i));
  answer.push(ind);
}
console.log(answer.join(" "));