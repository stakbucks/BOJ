function solution(word) {
  const vowels = ['', 'A', 'E', 'I', 'O', 'U'];

  let count = 0;

  const stack = [1];

  const convertToString = (arr) => {
    return arr.map((v) => vowels[v]).join('');
  };

  while (stack.length) {
    count++;
    const string = convertToString(stack);
    if (string === word) {
      return count;
    }

    if (stack.length < 5) {
      stack.push(1);
    } else {
      while (stack.length) {
        const top = stack.pop();
        if (top === 5) {
          continue;
        } else {
          stack.push(top + 1);
          break;
        }
      }
    }
  }
  return count;
}