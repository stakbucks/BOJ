class Queue{
    queue=[];
    front=0;
    rear=0;
    
    enqueue(value){
        this.queue[this.rear]=value;
        this.rear++;
    }
    dequeue(){
        const returnValue=this.queue[this.front];
        delete this.queue[this.front++];
        return returnValue;
    }
    size(){
        return this.rear-this.front;
    }
}

function solution(numbers) {
    const stack=[];
    const answer=Array(numbers.length).fill(-1);
   
    for(let i=0; i<numbers.length; i++){
        const number=numbers[i];
        while(stack.length && stack.at(-1)[0]<number){
            answer[stack.pop()[1]]=number;
        }
        stack.push([number, i]);
    }
    
    return answer;
}

// [ 9, , 5, 3,  ]

// [5,]