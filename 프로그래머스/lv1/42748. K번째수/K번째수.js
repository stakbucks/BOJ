function solution(array, commands) {
    var answer = [];
    
    for(let a=0; a<commands.length; a++){
        const [i,j,k]=commands[a];
        const arr=new Array();
        for(let b=i-1; b<j; b++){
            arr.push(array[b]);
        }
        arr.sort((a,b)=>a-b);
        answer.push(arr[k-1]);
    }
    
    return answer;
}