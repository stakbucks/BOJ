function check(arr){

    const value=arr[0][0];
    const array0=Array.from(Array(arr.length),()=>Array(arr.length).fill(0));
    const array1=Array.from(Array(arr.length),()=>Array(arr.length).fill(1));
    
    if(arr.toString()===array0.toString()){
        return 0;
    }
    if(arr.toString()===array1.toString()){
        return 1;
    }
    return -1;
}

function divide(arr,cnt0,cnt1){
    const length=arr.length;
    const half=length/2;
 
    let i=0;
    
    
    while(i<2*half){
        let k=0;
        while(k<2*half){     
         const newArr=[];
        for(let j=0; j<half; j++){
            newArr.push(arr[j+k].slice(i,i+half))
        }
        if(newArr[0].length===1){ //더 이상 쪼갤 수 없을 때
            if(newArr[0][0] === 0 ){
                cnt0++;
            }else{
                cnt1++;
            }
        }else{
            const result=check(newArr);
            if(result===-1){
                [cnt0,cnt1]=divide(newArr,cnt0,cnt1);
            }else if(result===0){
                cnt0++;
            }else{
                cnt1++;
            }
        }
                  k=k+half;

        }
        i=i+half;

    }
    return [cnt0,cnt1];
}

function solution(arr) {

    let cnt0=0;
    let cnt1=0;
    
    if(arr.length===1){
        if(arr[0][0]===1){
            return [0,1];
        }else{
            return [1,0];
        }
    }
    
    if(check(arr)===0){
        return [1,0];
    }else if(check(arr)===1){
        return [0,1];
    }
    
    return divide(arr,cnt0,cnt1);
    
    
}