const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v=>+v);

const N = input[0];
const M = input[1];

let result = [];
function solve(cnt,val){
  if(cnt==M){
    result.push(val);
    return false;
  }else{
    for(let i = 1; i<=N; i++){
      solve(cnt+1,val+i+' ')
    }
  }

}

solve(0,'');
console.log(result.join("\n"));