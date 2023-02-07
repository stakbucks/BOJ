const answer = [];
let arr = [];
let visited = [];
for (let i = 1; i <= 10000; i++) {
  arr[i] = false;
  visited[i] = false;
}
function d(n) {
  if (visited[n] === true) return;
  else {
    const newArr = n.toString().split("").map(Number);
    newArr.push(n);
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
      sum += newArr[i];
    }
    arr[sum] = true;
    visited[n] = true;
    if (visited[sum] === false) d(sum);
  }
}

for (let i = 1; i <= 10000; i++) {
  if (visited[i] === false) d(i);
}
for (let i = 1; i <= 10000; i++) {
  if (arr[i] === false) {
    answer.push(i);
  }
}
console.log(answer.join("\n"));