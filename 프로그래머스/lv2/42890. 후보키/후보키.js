function solution(relation) {
//     let answer=0;
    
//     let arr=Array(relation[0].length).fill(0).map((i,v)=>v);

    
//     // 조합
//     const combinate=(arr,length)=>{
//         if(length===1) return arr.map(i=>[i]);
//         const result=[];
//         arr.forEach((i,v)=>{
//             const rest = combinate([...arr].filter((i2,v2)=>v2>v),length-1);
//             for(const r of rest){
//                 r.splice(0,0,i);
//                 result.push(r);
//             }
//         })
//         return result;
//     }
    
//     for(let i=1; i<=relation[0].length; i++){
//         // i는 조합의 길이
//         let combinations=combinate(arr,i);
//         console.log(combinations);
//         const candidates=[];
//         for(const combination of combinations){
//             const set=new Set();
//             let result=true;
            
//             for(const r of relation){
//                 let added="";
//                 for(const idx of combination){
//                     added+="!"+r[idx];
//                 }
//                 if(set.has(added)){
//                     result=false;
//                     break;
//                 }
//                 set.add(added);
//             }
            
//             if(result){
//                 // 후보키에 해당하면
//                 candidates.push(combination);
//                 arr=arr.filter((i,v)=>!combination.includes(i));
//                 for(const c of combination){
//                     combinations=combinations.filter((i,v)=>!i.includes(c));
//                 }
//                 answer++;
//             }
//         }

//     }

    
    
    // return answer;
  let answer = 0;
  let candidates = []; // 유일성 만족하는 집합
  let arr = Array(relation[0].length)
    .fill(0)
    .map((i, v) => v);

  const combinate = (arr, length) => {
    if (length === 1) return arr.map((i) => [i]);
    let result = [];
    arr.forEach((i, v) => {
      const remain = combinate(
        arr.filter((i2, v2) => v2 > v),
        length - 1,
      );
      for (const r of remain) {
        const temp = [i, ...r];
        result.push(temp);
      }
    });
    return result;
  };

  for (let i = 1; i <= relation[0].length; i++) {
    const combinations = combinate(arr, i);

    for (const combination of combinations) {
      const set = new Set();
      let isCandidate = true;
      for (const r of relation) {
        let added = '';
        for (const index of combination) {
          added += '+' + r[index];
        }
        if (set.has(added)) {
          isCandidate = false;
        } else {
          set.add(added);
        }
      }
      if (isCandidate) {
          let result=true;
        for (let i = 0; i < candidates.length; i++) {
          let count = 0;
          for (const c of candidates[i]) {
            if (combination.includes(c)) {
              count++;
            }
          }
          if (count === candidates[i].length) result=false;
        }
          if(result) candidates.push(combination);
      }
    }
  }

  return candidates.length;
}

    
