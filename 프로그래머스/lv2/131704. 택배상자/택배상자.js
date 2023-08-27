class Queue {
  constructor(arr) {
    this.queue = arr;
    this.front = 0;
    this.rear = arr.length;
  }
  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  peek() {
    return this.queue[this.front];
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }
  has(value) {
    if (this.queue.includes(value)) {
      return true;
    }
    return false;
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(order) {
  const stack = [];
  const queue = new Queue(order);
  let nextBox = queue.peek();
  let currentBox = 1;
  let answer = 0;
  while (queue.size()) {
    if (currentBox === nextBox) {
      currentBox++;
      queue.dequeue();
      nextBox = queue.peek();
      answer++;
    } else if (stack.at(-1) === nextBox) {
      stack.pop();
      queue.dequeue();
      nextBox = queue.peek();
      answer++;
    } else if (currentBox < nextBox) {
      stack.push(currentBox);
      currentBox++;
    } else {
      break;
    }
  }

  return answer;
}
