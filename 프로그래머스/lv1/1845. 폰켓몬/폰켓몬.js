function solution(nums) {
    const half=nums.length/2;
    const map=new Map();
    
    for(const num of nums){
        if(map.has(num)){
            const count=map.get(num);
            map.set(num,count+1);
        }else{
            map.set(num,1);
        }
    }
    console.log(map.size);
    if(map.size>=half){
        return half;
    }else{
        return map.size;
    }
    
}