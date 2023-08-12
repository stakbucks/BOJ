const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[i + 1].split(' ').map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  let maxCnt = 0;
  const DFS = (i, cnt, min) => {
    const left = arr.length - i + cnt; // 최대로 고를 수 있는 수
    if (left <= maxCnt) {
      return;
    }
    if (i === arr.length) {
      // 마지막 전깃줄까지 체크한 경우
      maxCnt = Math.max(cnt, maxCnt);
      return;
    }
    if (arr[i][1] > min) {
      // 만약 추가 가능한 전깃줄이면
      DFS(i + 1, cnt + 1, arr[i][1]);
    }
    // 추가하지 않는 경우
    DFS(i + 1, cnt, min);
  };

  DFS(0, 0, 0);
  console.log(arr.length - maxCnt);
}

solution(input);