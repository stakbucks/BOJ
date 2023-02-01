const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
function parse(s) {
  let count = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === "c") {
      if (s[i + 1] === "=") {
        i = i + 2;
        count++;
      } else if (s[i + 1] === "-") {
        i = i + 2;
        count++;
      } else {
        count++;
        i++;
      }
    } else if (s[i] === "d") {
      if (s[i + 1] === "z" && s[i + 2] === "=") {
        i = i + 3;
        count++;
      } else if (s[i + 1] === "-") {
        i = i + 2;
        count++;
      } else {
        count++;
        i++;
      }
    } else if (s[i] === "l" && s[i + 1] === "j") {
      i = i + 2;
      count++;
    } else if (s[i] === "n" && s[i + 1] === "j") {
      i = i + 2;
      count++;
    } else if (s[i] === "s" && s[i + 1] === "=") {
      i = i + 2;
      count++;
    } else if (s[i] === "z" && s[i + 1] === "=") {
      i = i + 2;
      count++;
    } else {
      count++;
      i++;
    }
  }
  return count;
}
console.log(parse(input[0]));
