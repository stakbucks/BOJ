
class Queue{
    constructor(){
        this.queue=[];
        this.front=0;
        this.rear=0;
    }
    enqueue(value){
        this.queue[this.rear++]=value;
    }
    dequeue(){
        const returnValue=this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return returnValue;
    }
    size(){
        return this.rear-this.front;
    }
}


function solution(k, d) {
    const maxLength=d**2;
    let count=0;
    
//     const queue=new Queue();
//     queue.enqueue([0,0]);
    
   const dir=[[k,0],[0,k]];
    
    for(let i=0; i<=d; i=i+k){
        const value=i**2;
        let a=Math.floor(Math.sqrt((maxLength-value)));
        a=Math.floor(a/k)+1;
        count+=a;
//         for(let j=0; j<=d; j=j+k){
//             if(value+j**2>maxLength){
//                 break;
//             }
//             count++;
//         }
    
    }
    
//         while(queue.size()){
//             const [x,y]=queue.dequeue();
//             if(!set.has(x+"+"+y)){
//                 set.add(x+"+"+y);
//                 count++;
//                 for(const [dx,dy] of dir){
//                     const [nx,ny]=[x+dx,y+dy];
//                     if(nx**2+ny**2>maxLength){
//                         continue;
//                     }
//                     if( nx>d || ny>d) continue;
                    
//                         queue.enqueue([nx,ny]);
//                 }
//             }
//         }

    return count;
}
