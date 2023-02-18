const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];

for (let i = 0; i < N; i++) {
  const person = input[i + 1].split(" ");
  arr.push([Number(person[0]), person[1]]);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return;
  }
  return a[0] - b[0];
});
const newArr = [];
for (let i = 0; i < N; i++) {
  newArr.push(arr[i].join(" "));
}
console.log(newArr.join("\n"));
