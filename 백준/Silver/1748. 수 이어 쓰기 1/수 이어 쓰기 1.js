const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
})
  .on('close', async function () {
  // 답안 작성
  let answer =0;
  answer = write_number(input[0]);
  console.log(answer);
  process.exit();
});

let write_number =function(n){
  let answer = 0, gu = 9;
  answer = n.length * (n - (10**(n.length-1)) +1);
  if(n.length>1){
    for(let i=1;i<n.length;i++){
      answer += i * gu;
      gu *= 10;
    }
  }
  return answer;
}