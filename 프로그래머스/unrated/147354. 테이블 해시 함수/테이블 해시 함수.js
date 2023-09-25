function solution(data, col, row_begin, row_end) {
  // 1. 튜플 정렬
  data = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  // 2. S_i 구하기
  let answer;
  for (let i = row_begin; i <= row_end; i++) {
    const S_i = data[i - 1].reduce((prev, cur) => prev + (cur % i), 0);
    if (!answer) {
      answer = S_i;
    } else {
      answer ^= S_i;
    }
  }
  return answer;
}

