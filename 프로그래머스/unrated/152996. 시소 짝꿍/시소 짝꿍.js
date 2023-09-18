function solution(weights) {
  const distances = [1, 2 / 3, 2 / 4, 3 / 4];
  const map = new Map();
  let count = 0;
  weights = weights.sort((a, b) => a - b);
  for (const weight of weights) {
    for (const dist of distances) {
      if (map.has(weight * dist)) {
        count += map.get(weight * dist);
      }
    }
    map.set(weight, (map.get(weight) || 0) + 1);
  }
  return count;
}
