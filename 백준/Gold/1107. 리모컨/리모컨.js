const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', async function () {
  // 답안 작성
  let answer ='';
  let n = input[0].split('');
  if(input[2]){
    let arr = input[2].split(' ');  
    answer = remotecon(n,arr);
  }else{
    answer = remotecon(n);
  }    
  console.log(answer)
  process.exit();
});

let remotecon = function(n, arr=[]){
  let button = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let diff = [];
  let diff_max = [];
  let result = Math.abs(n.join('')*1-100);
  //고장난 버튼 찾기
  arr.reduce((acc,cur)=>{    
    button.splice(button.indexOf(cur),1);
  },'')    
  //최대,최소 범위 지정  
  if(button.length>0){
    for(let i = 0 ; i<n.length;i++){
      let min_btn = button.reduce((acc,cur)=>{
        if ((acc-n[i]*1) != Math.min((acc-n[i]*1),(cur*1-n[i]*1)))acc=cur;
        return acc
      });
      diff.push(min_btn)
      let max_btn = button.reduce((acc,cur)=>{
        if ((acc-n[i]*1) != Math.max((acc-n[i]*1),(cur*1-n[i]*1)))acc=cur;
        return acc
      });
      diff_max.push(max_btn)
    }
  }  
  if(diff.length>1)diff.pop();
  diff_max[0] = 1+diff_max[0];

  //범위 내의 모든 경우에서 최소값 찾기
  let min = 500000;
  for(let i=diff.join('')*1;i<=(diff_max.join(''))*1;i++){
    if(compare_button(arr,i)){
      min = Math.min(Math.abs(i*1-n.join('')*1)+ i.toString().length, min);      
    }
  }
  return Math.min(result, min);
}
//고장난 버튼이 있는지 비교
function compare_button(arr, i){  
  i = i.toString().split('');  
  for(let j = 0;j<i.length;j++){
    if(arr.includes(i[j]))return false;
  }  
  return true;
}