const MAX = 10000000;
function solution(begin, end) {
  const result = [];
  for (let i = begin; i <= end; i++) {
      if(i===1) result.push(0);
     else result.push(getValue(i));
  }
  return result;

  function getValue(num) {
    let max = 1;
    for (let i = 2; i <= Math.max(Math.sqrt(num),Math.sqrt(MAX)); i++) {
      if (num % i === 0) {
        if (num / i > MAX) {
          max = Math.max(max,i);
        } else  return num/i
      }
    }
    return max;
  }
}
