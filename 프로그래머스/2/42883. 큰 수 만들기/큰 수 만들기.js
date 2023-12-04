function solution(number, k) {
    let erasedCnt=0; // 제거한 횟수
    const stack=[];
    
    stack.push(number[0]);
    for(let i=1; i<number.length; i++){
        while(stack[stack.length-1] < number[i] && erasedCnt<k ){
            stack.pop();
            erasedCnt++;
        }
        stack.push(number[i]);
    }
    
    while(erasedCnt < k){
        stack.pop();
        erasedCnt++;
    }
    return stack.join("");
}

// [9], 1
// [9,2]
// [9,2,4]
