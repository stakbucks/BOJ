const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ");
arr.sort();

const answer = [];

let visited;
let count; //[모음 수, 자음 수, 전체 수]
let temp;

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

function go(idx) {
  if (count[2] === L) {
    if (count[0] && count[1] > 1) {
      answer.push(temp.join(""));
    }
    return;
  }

  for (let i = idx + 1; i < C; i++) {
    if (!visited[i]) {
      temp.push(arr[i]);
      visited[i] = true;
      if (isVowel(i)) {
        count[0]++;
      } else {
        count[1]++;
      }
      count[2]++;

      go(i);

      temp.pop();
      visited[i] = false;
      if (isVowel(i)) {
        count[0]--;
      } else {
        count[1]--;
      }
      count[2]--;
    }
  }
}

function solve(L, C, arr) {
  for (let i = 0; i < C; i++) {
    visited = Array.from({ length: L }, () => false);
    temp = [arr[i]];
    if (isVowel(i)) {
      count = [1, 0, 1];
    } else {
      count = [0, 1, 1];
    }
    go(i);
  }
  console.log(answer.join("\n"));
}

solve(L, C, arr);
