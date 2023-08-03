function solution(orders, course) {
  const getCombinations = (order, size, temp) => {
    const result = [];
    if (size > order.length) return result;
    if (size === 0) {
      return [...temp].sort().join('');
    }
    // 선택한 경우
    result.push(getCombinations(order.slice(1), size - 1, temp + order[0]));
    // 선택하지 않은 경우
    if (size < order.length) result.push(getCombinations(order.slice(1), size, temp));

    return result.flat();
  };

  const answer = [];

  for (const size of course) {
    const map = new Map();
    for (const order of orders) {
      const result = getCombinations(order, size, '');
      for (const r of result) {
        if (map.has(r)) {
          const value = map.get(r);
          map.set(r, value + 1);
        } else {
          map.set(r, 1);
        }
      }
    }
    // 내림차순 정렬
    const sorted = [...map].sort((a, b) => b[1] - a[1]);
    if (sorted.length && sorted[0][1] > 1) {
      const maxValue = sorted[0][1];
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][1] === maxValue) {
          answer.push(sorted[i][0]);
        } else {
          break;
        }
      }
    }
  }

  return answer.sort();
}
