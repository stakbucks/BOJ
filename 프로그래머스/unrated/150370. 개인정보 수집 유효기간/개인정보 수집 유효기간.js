function solution(today, terms, privacies) {
    
    const termsMap=new Map();
    for(const term of terms){
        const [type, length]=term.split(" ");
        termsMap.set(type,length);
    }
    
    const check=(date,type)=>{
        const dateArr=date.split(".").map(Number);
        const todayArr=today.split(".").map(Number);
        
        const dateNum=dateArr[2]+(dateArr[0]*12+dateArr[1])*28;
        const todayNum=todayArr[2]+(todayArr[0]*12+todayArr[1])*28;
        const lengthNum=termsMap.get(type)*28;
    console.log(dateNum,todayNum,lengthNum);
        if((todayNum-dateNum)>=lengthNum){
            return false;
        }
        return true;
    }
    const answer=[];
    privacies.forEach((i,v)=>{
        const [date, type]=i.split(" ");
        if(!check(date,type)){
            answer.push(v+1);
        }
    });
    return answer;
}