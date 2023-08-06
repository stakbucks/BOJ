class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(want, number, discount) {
  const queue = new Queue();
  const wantMap = new Map();
  const currentMap = new Map();

  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
    currentMap.set(want[i], 0);
  }

  const push = (product) => {
    queue.enqueue(product);
    const value = currentMap.get(product);
    currentMap.set(product, value + 1);
  };
  const pop = () => {
    const product = queue.dequeue();
    const value = currentMap.get(product);
    currentMap.set(product, value - 1);
  };
  const isAnswer = () => {
    for (const product of wantMap.keys()) {
      if (wantMap.get(product) !== currentMap.get(product)) {
        return false;
      }
    }
    return true;
  };
  // 첫날 기준으로 초기화
  for (let i = 0; i < 10; i++) {
    push(discount[i]);
  }
  let answer = 0;
  if (isAnswer()) answer++;
  for (let i = 10; i < discount.length; i++) {
    pop();
    push(discount[i]);
    if (isAnswer()) {
      answer++;
    }
  }

  return answer;
}

