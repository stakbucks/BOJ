const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const a = Number(input);

const arr = new Array(a + 1).fill(0);
arr[1] = 1;
arr[2] = 2;
for (let i = 3; i <= a; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}
console.log(arr[a]);
