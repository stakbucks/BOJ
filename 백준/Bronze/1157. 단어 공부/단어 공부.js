const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let string = fs.readFileSync(filePath).toString();

const arr = [];
for (let i = 65; i <= 90; i++) {
  arr[i] = 0;
}

for (let i = 0; i < string.length; i++) {
  let ascii = string.charCodeAt(i);
  if (ascii > 90) {
    ascii -= 32;
  }
  arr[ascii]++;
}

const answer = [];
for (let i = 65; i <= 90; i++) {
  answer.push(arr[i]);
}
const count = [...answer].sort((a, b) => b - a);
if (count[0] === count[1]) console.log("?");
else {
  const index = answer.findIndex((n) => n === count[0]) + 65;
  console.log(String.fromCharCode(index));
}
