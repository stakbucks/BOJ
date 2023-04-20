function solution(n)
{   
    let count=0;
    let number=n;
    while(number>0){
        if(number%2===0){
            number=number/2;
        }else{
            number-=1;
            count++;
        }
    }
    return count;
    
}