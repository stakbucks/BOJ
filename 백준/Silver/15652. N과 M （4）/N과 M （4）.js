input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map((a) => +a);
let [N, M]=input;

let ANSWER = "";
let prefix = [];
function combination(n, count) {
  if (prefix.length == M) {
    ANSWER += prefix.join(" ") + "\n";
    return;
  }
  // 1 ~ N 까지의 자연수를 출력하기 위해 1부터 시작
  for (let i = count; i < n + 1; i++) {
    // prefix stack in till it reaches terminal node
    prefix.push(i);
    // 재귀함수
    combination(n, i);
    // when it reached terminal node, then prefix stack out
    prefix.pop();
  }
}

combination(N, 1);
console.log(ANSWER);