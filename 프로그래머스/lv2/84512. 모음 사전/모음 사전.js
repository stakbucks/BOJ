function solution(word) {
  const vowels = ['', 'A', 'E', 'I', 'O', 'U'];

  let count = 0;

  const stack = [1];
  while (1) {
      count++;
    const current = stack.map((v) => vowels[v]).join('');
    if (current === word) {
      return count;
    }

    if (stack.length < 5) {
      stack.push(1);
    } else {
      while (1) {
        const top = stack.pop();
        if (top === 5) {
          if (!stack.length) {
            // UUUUU 까지 도달한 경우
            return count;
          }
          continue;
        } else {
          stack.push(top + 1);
          break;
        }
      }
    }
  }
}