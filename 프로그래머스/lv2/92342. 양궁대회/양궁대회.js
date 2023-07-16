function solution(n, info) {
  let apeachScore = info.reduce((acc, cur, idx) => (10 - idx) * (cur > 0 ? 1 : 0) + acc, 0);
  const dp = Array.from({length: 11}, () => Array(11).fill(0));
  const value = info.map((v, i) => {
    if (v) {
      // 어피치의 점수를 뺏으면서 점수를 획득하니까 점수를 두 배 얻는 것으로 계산
      return [2 * (10 - i), v + 1];
    }
    return [10 - i, 1];
  });
  let max = 0;
  let maxVisited = [];
  let left = 0;
  const go = (i, used, visited, currentScore) => {
    const available = i - used;
    if (i > n) {
      if (currentScore > max) {
        max = currentScore;
        maxVisited = visited;
        left = available - 1;
      }
      return;
    }

    for (let j = 0; j <= 10; j++) {
      if (value[j][1] <= available && !visited[j]) {
        visited[j] = true;
        go(i + 1, used + value[j][1], [...visited], currentScore + value[j][0]);
        visited[j] = false;
      }
    }
    go(i + 1, used, [...visited], currentScore);
  };

  // for (let i = 0; i <= 10; i++) {
  //   if (value[i][1] === 1) {
  //     go(2, 1, [i], -apeachScore + value[i][0]);
  //   }
  // }
  go(1, 0, Array(11).fill(false), -apeachScore);

  // 어피치를 이길 수 없는 경우
  if (!max) return [-1];

  const answer = Array(11).fill(0);
  maxVisited.forEach((v, i) => {
    if (v) {
      answer[i] = value[i][1];
    }
  });

  if (left > 0) {
    answer[10] += left;
  }
  return answer;
}

