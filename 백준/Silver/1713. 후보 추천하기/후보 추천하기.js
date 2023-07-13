const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 탈락 우선수위
// 1. 추천 수 낮은
// 2. 오래된

// count 작은 순서
// count 같다면 index 작은 순서

function solution(input) {
  const maxFrames = Number(input[0]);
  const recommendations = input[2].split(' ').map(Number);
  const frames = []; // 탈락 후보 순서

  // frames를 문제의 기준대로 정렬
  const sortFrames = () => {
    frames.sort((a, b) => {
      if (a.count === b.count) {
        return b.index - a.index;
      }
      return b.count - a.count;
    });
  };

  recommendations.forEach((v, i) => {
    const idx = frames.findIndex((item) => item.number === v);
    if (idx === -1) {
      if (frames.length < maxFrames) {
        frames.push({number: v, index: i, count: 1});
        sortFrames();
      } else {
        frames.pop();
        frames.push({number: v, index: i, count: 1});
        sortFrames();
      }
    } else {
      frames[idx].count++;
      sortFrames();
    }
  });

  console.log(
    frames
      .sort((a, b) => a.number - b.number)
      .map((v) => v.number)
      .join(' '),
  );
}

solution(input);