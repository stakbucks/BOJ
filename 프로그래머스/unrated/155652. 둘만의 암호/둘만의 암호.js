function solution(s, skip, index) {
    s=s.split("").map(i=>i.charCodeAt());
    skip=skip.split("").map(i=>i.charCodeAt());
    let result="";
    for(let i of s){
        let count=0;
        let temp=i+1;
        while(count!==index){
            if(temp>122) temp-=26;
            if(!skip.includes(temp)){
                count++;                
            }
            temp++;
        }
        result+=String.fromCharCode(temp-1);
        // let sum=count+index+i;
        // if(sum>122) sum-=26
        // result+=String.fromCharCode(sum);
    }
    console.log(result);
    


    return result;
}