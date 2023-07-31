// 짝수는 바로 다음 수가 정답
// 홀수는 최하위 비트에서, 가장 가까운 0을 1로 바꾸고 그 다음 비트의 1을 0으로 바꾼 수가 정답
function solution(numbers) {
  const answer = [];


  const getOddNumberResult = (number) => {
    let binaryNum = number.toString(2).padStart(number.length + 1, '0');
    binaryNum = [...binaryNum.padStart(binaryNum.length + 1, '0')];
    for (let i = binaryNum.length - 1; i >= 0; i--) {
      if (binaryNum[i] === '0') {
        binaryNum[i + 1] = '0';
        binaryNum[i] = '1';
        break;
      }
    }
    return parseInt(binaryNum.join(""), 2);
  };

  for (const number of numbers) {
    if (number % 2 === 0) {
      // 짝수인 경우
      answer.push(number + 1);
    } else {
      // 홀수인 경우
      answer.push(getOddNumberResult(number));
    }
  }
  return answer;
}