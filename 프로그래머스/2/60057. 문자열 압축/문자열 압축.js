function solution(s) {
    const maxUnitLength=Math.floor(s.length/2);
    let answer=s.length;
    
    let temp='';
    let cnt=1;
    let result='';
    
    for(let i=1; i<=maxUnitLength; i++){
        let j=0;
        while(j<s.length){
            const unit=s.slice(j,j+i);
            if(temp===unit){
                cnt++;

            }else{
                cnt===1 ? result+=temp : result+=`${cnt}${temp}`
                cnt=1;
                temp=unit;
            }
            j+=i;
        }
    cnt===1 ? result+=temp : result+=`${cnt}${temp}`

        
        answer=Math.min(answer, result.length);
        result=''
        temp='';
        cnt=1;
    }   

    
    return answer;
}   


// ababcdcd ababcdcd

// aaabc => 2aabc

// temp='a'
// result=''
// cnt=2

// unit=a