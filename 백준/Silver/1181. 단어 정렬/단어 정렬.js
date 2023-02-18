const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1].split(" "));
}
const newArr = arr.join(" ").split(" ");

newArr.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) {
      return 1;
    } else return -1;
  }
  return a.length - b.length;
});
const set = new Set(newArr);
const newnewArr = [...set];
console.log(newnewArr.join("\n"));
