function solution(k, tangerine) {
   const map=new Map();
    
    tangerine.forEach(v=>{
       map.set(v, map.get(v)+1 || 1)
    })
    const sorted=Array.from(map).sort((a,b)=>b[1]-a[1])
    
    let count=0;
    let result=0;
    while(1){
        if(count>=k) return result;
        count+=sorted[result++][1]
    }
}
// [1,2,2,3,3,4,5,5]

// [3,3,5,5,2,2]

// [3,3,2,2]