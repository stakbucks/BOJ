const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const x = input[1].split(" ").map(Number);

function solution(x) {
  let result = [];
  const set = new Set(x);
  const uniq = [...set].sort((a, b) => a - b);
  let dic = {};
  uniq.forEach((element, index) => {
    dic[element] = index;
  });
  for (let i = 0; i < x.length; i++) {
    result.push(dic[x[i]]);
  }
  console.log(result.join(" "));
}

solution(x);