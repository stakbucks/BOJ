const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const answer = [];
  input.forEach((line) => {
    if (line === '.') return; // 입력 종료 조건

    const stack = [];

    let flag = true;

    [...line].forEach((letter) => {
      if (letter === '[' || letter === '(') {
        stack.push(letter);
      }
      if (letter === ')') {
        if (stack.at(-1) !== '(') {
          flag = false;
          return;
        }
        stack.pop();
      }
      if (letter === ']') {
        if (stack.at(-1) !== '[') {
          flag = false;
          return;
        }
        stack.pop();
      }
    });
    if (stack.length) flag = false;

    if (flag) {
      answer.push('yes');
    } else {
      answer.push('no');
    }
  });

  console.log(answer.join('\n'));
}

solution(input);
