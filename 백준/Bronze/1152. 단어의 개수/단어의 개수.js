const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let string = fs.readFileSync(filePath).toString().trim().split(" ");
let length = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] !== "") length++;
}
console.log(length);
