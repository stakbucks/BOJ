function solution(msg) {
  const msgArr = [...msg];
  const dictionary = new Map();
  for (let i = 1; i <= 26; i++) {
    dictionary.set(String.fromCharCode(i + 64), i);
  }

  let temp = '';
  const answer = [];
  while (msgArr.length) {
    temp += msgArr.shift();
    if (!dictionary.has(temp)) {
      const currentSize = dictionary.size;
      dictionary.set(temp, currentSize + 1);
      msgArr.unshift(temp.slice(-1));
      answer.push(dictionary.get(temp.slice(0, -1)));
      temp = '';
    }
  }
      answer.push(dictionary.get(temp));
  return answer;
}

