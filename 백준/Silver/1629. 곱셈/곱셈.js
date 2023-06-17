const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

function solution(input) {
  let [a, b, c] = input.map(BigInt);

  const power = (a, b) => {
    if (b === BigInt(0)) return BigInt(1);
    const half = power(a, BigInt(parseInt(b / BigInt(2))));
    if (b % BigInt(2)) {
      return (half * half * (a % c)) % c;
    }
    return (half * half) % c;
  };
  return console.log(parseInt(power(a, b)));
}

solution(input);
