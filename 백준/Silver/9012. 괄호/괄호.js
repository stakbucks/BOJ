const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
const arr = [];
const answer = [];
for (let i = 0; i < T; i++) {
  arr.push(input[i + 1]);
}

function VPS(str) {
  let open = 0;
  let close = 0;
  for (let i = 0; i < str.length; i++) {
    if (open < close) {
      return "NO";
    }

    if (str[i] === "(") {
      open++;
      if (i === str.length - 1) {
        return "NO";
      }
    } else {
      close++;
      if (i === str.length - 1) {
        if (open === close) return "YES";
        else return "NO";
      }
    }
  }
}

for (let i = 0; i < T; i++) {
  answer.push(VPS(arr[i]));
}
console.log(answer.join("\n"));