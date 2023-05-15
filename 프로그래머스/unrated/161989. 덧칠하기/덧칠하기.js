function solution(n, m, section) {
  let answer = 0;
  const painted = Array(n + 1).fill(false);

  for (const s of section) {
    if (!painted[s]) {
      painted.fill(true, s, s + m);
      answer++;
    }
  }
  return answer;
}