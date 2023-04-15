const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
let target = input[1].split(" ").map(Number);

let isFound = false;

function go(i) {
  let leastIdx = i;
  let least = Infinity;
  for (let j = i + 1; j < N; j++) {
    if (target[i] < target[j] && least > target[j]) {
      least = target[j];
      leastIdx = j;
    }
  }
  const tempArr = [...target];
  const temp = tempArr[i];
  tempArr[i] = least;
  tempArr[leastIdx] = temp;
  const sorted = tempArr.slice(i + 1).sort((a, b) => a - b);
  target[i] = tempArr[i];
  for (let k = i + 1; k < N; k++) {
    target[k] = sorted[k - i - 1];
  }
  isFound = true;
}

for (let i = N - 2; i >= 0; i--) {
  if (target[i + 1] > target[i]) {
    go(i);
    break;
  }
}

isFound ? console.log(target.join(" ")) : console.log(-1);
