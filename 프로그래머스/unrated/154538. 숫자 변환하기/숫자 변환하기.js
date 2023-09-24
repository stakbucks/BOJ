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

function solution(x, y, n) {
  const queue = new Queue();
  let answer = -1;

  const visited = Array(y + 1).fill(-1);
  visited[x] = 0;
  queue.enqueue(x);
if(x===y) return 0;
  while (queue.size()) {
    const value = queue.dequeue();
    for (const nextNum of [value + n, value * 2, value * 3]) {
      if (nextNum === y) {
        return visited[value] + 1;
      }
      if (visited[nextNum] !== -1 || nextNum > y) {
        continue;
      }
      queue.enqueue(nextNum);
      visited[nextNum] = visited[value] + 1;
    }
  }
  return -1;
}
