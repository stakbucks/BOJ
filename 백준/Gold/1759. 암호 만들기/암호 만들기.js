const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ");
arr.sort();

const answer = [];
function isVowel(idx) {
  if (
    arr[idx] === "a" ||
    arr[idx] === "e" ||
    arr[idx] === "i" ||
    arr[idx] === "o" ||
    arr[idx] === "u"
  )
    return true;
  return false;
}

function go(idx, temp, count) {
  if (count[2] === L) {
    if (count[0] && count[1] > 1) {
      answer.push(temp);
    }
    return;
  }

  for (let i = idx + 1; i < C; i++) {
    const newCount = [...count];
    if (isVowel(i)) {
      newCount[0]++;
    } else {
      newCount[1]++;
    }
    newCount[2]++;

    go(i, temp + arr[i], newCount);
  }
}

function solve(L, C, arr) {
  for (let i = 0; i < C; i++) {
    let count;
    if (isVowel(i)) {
      count = [1, 0, 1];
    } else {
      count = [0, 1, 1];
    }
    go(i, arr[i], count);
  }
  console.log(answer.join("\n"));
}

solve(L, C, arr);
