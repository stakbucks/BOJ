function solution(prices) {
  const stack = [];
  const answer = Array(prices.length).fill(-1);
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && stack.at(-1)[0] > prices[i]) {
      const [value, index] = stack.pop();
      answer[index] = i - index;
    }
    stack.push([prices[i], i]);
  }
  while (stack.length) {
    const [value, index] = stack.pop();
    answer[index] = prices.length - index - 1;
  }
  return answer;
}
