function solution(topping) {
  let answer = 0;
  const setFront = new Set();
  const arrFront = Array(topping.length + 1).fill(0);
  const setBack = new Set();
  const arrBack = Array(topping.length + 1).fill(0);
  for (let i = 0; i < topping.length; i++) {
    setFront.add(topping[i]);
    arrFront[i] = setFront.size;
    setBack.add(topping[topping.length - 1 - i]);
    arrBack[i] = setBack.size;
  }
  for (let i = 0; i < topping.length; i++) {
        if (arrFront[i] === arrBack[topping.length - 1 - (i + 1)]) {
      answer++;
    }
  }
  return answer;
}
