function solution(n, k) {
  let answer = 0;
  const convertedN = n.toString(k);

  let temp = '';

  for (let i = 0; i < convertedN.length; i++) {
    if (convertedN[i] === '0') {
      if (temp.length && isPrime(+temp, k)) {
        answer++;
      }
      temp = '';
    } else {
      temp += convertedN[i];
    }
  }
  if (temp.length && isPrime(+temp, k)){ answer++;}
    
    function isPrime(n, 진수) {

    if(n ===1) return false;
  for (let i = 2; i <= ~~Math.sqrt(n) ; i++) {
    if (n  % i===0) return false;
  }
  return true;
}

  return answer;
}

