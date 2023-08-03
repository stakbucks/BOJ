function solution(s) {
  const answer = [];
  for (const word of s.split(' ')) {
    if (!word.length) {
      answer.push('');
      continue;
    }
    const newWord = [...word];
    newWord[0] = word[0].toUpperCase();
    for (let i = 1; i < newWord.length; i++) {
      newWord[i] = word[i].toLowerCase();
    }
    answer.push(newWord.join(''));
  }
  return answer.join(' ');
}

