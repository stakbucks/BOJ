// class MaxHeap{
//     constructor(){
//         this.heap=[null];
//     }
    
//    push(value) {
//       this.heap.push(value);
//       let currentIndex = this.heap.length - 1;
//       let parentIndex = Math.floor(currentIndex / 2);

//       while (parentIndex !== 0 && this.heap[parentIndex] < value) {
//           const temp = this.heap[parentIndex];
//           this.heap[parentIndex] = value;
//           this.heap[currentIndex] = temp;

//           currentIndex = parentIndex;
//           parentIndex = Math.floor(currentIndex / 2);
//       }
//   }
    
//    pop() {
//       if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

//       const returnValue = this.heap[1];
//       this.heap[1] = this.heap.pop();

//       let currentIndex  = 1;
//       let leftIndex = 2;
//       let rightIndex = 3;
//       while (this.heap[currentIndex] < this.heap[leftIndex] || 
//              this.heap[currentIndex] < this.heap[rightIndex]) {
//           if (this.heap[leftIndex] < this.heap[rightIndex]) {
//               const temp = this.heap[currentIndex];
//               this.heap[currentIndex] = this.heap[rightIndex];
//               this.heap[rightIndex] = temp;
//               currentIndex = rightIndex;
//           } else {
//               const temp = this.heap[currentIndex];
//               this.heap[currentIndex] = this.heap[leftIndex];
//               this.heap[leftIndex] = temp;
//               currentIndex = leftIndex;
//           }
//           leftIndex = currentIndex * 2;
//           rightIndex = currentIndex * 2 + 1;
//       }

//       return returnValue;
//   }

// }
class MaxHeap{
    constructor(){
        this.heap=[null];
    }
    push(value){
        // 맨 아래에 삽입한 후
        // 부모 노드와 비교하면서 제자리 찾기
        this.heap.push(value);
        let currentIndex=this.heap.length-1;
        let parentIndex=Math.floor(currentIndex/2);
        while(parentIndex && value>this.heap[parentIndex]  ){
            const temp=this.heap[parentIndex];
            this.heap[parentIndex]=value;
            this.heap[currentIndex]=temp;
            
            currentIndex=parentIndex;
            parentIndex=Math.floor(currentIndex/2);
        }
    }
    pop(){
        if(this.heap.length===2) return this.heap.pop();
        
        const returnValue=this.heap[1];
        this.heap[1]=this.heap.pop();
        
        let currentIndex=1;
        let leftChild=2;
        let rightChild=3;
        
        while(this.heap[leftChild]>this.heap[currentIndex] || this.heap[rightChild]>this.heap[currentIndex]){
            if(this.heap[leftChild]<this.heap[rightChild]){
                const temp=this.heap[currentIndex];
                this.heap[currentIndex]=this.heap[rightChild];
                this.heap[rightChild]=temp;
                currentIndex=rightChild;

            }else{
                const temp=this.heap[currentIndex];
                this.heap[currentIndex]=this.heap[leftChild];
                this.heap[leftChild]=temp;
                currentIndex=leftChild;
            }
            leftChild= currentIndex*2;
            rightChild=currentIndex*2+1;
        }  
        return returnValue;
    }
}


function solution(n, k, enemy) {
    let count=0;
    let arr=new MaxHeap();
    let sum=0;
    
    for(const e of enemy){
        
        arr.push(e);
        sum+=e;
        
        if(sum>n){
            if(k===0) return count;
            sum-=arr.pop(); //가장 큰 수 빼기
            k--
        }
        count++;
    }
    return count;
}