const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let arr = [...input];
for (let i = 0; i < 2; i++) {
  let temp = arr[i].split("");
  const t = temp[0];
  temp[0] = temp[2];
  temp[2] = t;
  arr[i] = Number(temp.join(""));
}
if (arr[0] > arr[1]) console.log(arr[0]);
else console.log(arr[1]);
