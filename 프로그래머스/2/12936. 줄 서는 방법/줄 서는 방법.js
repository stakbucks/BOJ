function solution(n, k) {
  let offset = 0;

  const numbers = new Set(Array.from({length: n + 1}, (_, i) => i + 1));
  const dp = Array.from({length: n}, (_, i) => factorial(n - i));
  const count = Array(n).fill(0);
  const answer = Array(n).fill(0);
  while (dp[offset] > k) {
    offset++;
  }

  k--;
  while (offset < n && k) {
    count[offset] = Math.floor(k / dp[offset]);
    k -= count[offset] * dp[offset];
    offset++;
  }

  for (let i = 0; i < n - 1; i++) {
    const sorted = [...numbers].sort((a, b) => a - b); // [1,2,3]
    answer[i] = sorted[count[i + 1]];
    numbers.delete(answer[i]);
  }
  answer[n - 1] = [...numbers][0];
  return answer;

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
