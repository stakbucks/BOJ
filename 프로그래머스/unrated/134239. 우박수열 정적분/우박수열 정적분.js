function solution(k, ranges) {
  const result = []; // 정답

  const sequence = []; // 우박수열
  go(k);
  for (const [a, b] of ranges) {
    const [x1, x2] = [a, sequence.length - 1 + b];
    if (x1 > x2) {
      result.push(-1);
    } else {
      result.push(integral(x1, x2, sequence));
    }
  }
  return result;

  function go(num) {
    sequence.push(num);
    if (num === 1) {
      return;
    }
    if (num % 2) {
      // 홀수
      return go(num * 3 + 1);
    } else {
      return go(num / 2);
    }
  }
  function integral(x1, x2) {
    // 전체 정적분
    let sum = 0; // 넓이 총 합

    let left = x1;
    let right = x1 + 1;
    while (right <= x2) {
      sum += partialIntegral(left, right);
      left++;
      right++;
    }
    return sum;
  }

  function partialIntegral(x1, x2) {
    // 사다리꼴 하나 넓이 구하기
    return (sequence[x1] + sequence[x2]) / 2;
  }
}


