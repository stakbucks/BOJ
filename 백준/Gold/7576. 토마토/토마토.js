const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let target_count = 0; //총 익어야 하는 토마토 수
let current_count = 0; //현재 익어 있는 토마토 수

const [M, N] = input[0].split(" ").map(Number);
let answer = 100;
let ripe = new Array(N); //익은 과일 표시
let days = new Array(N); //최소 일 수 표시
for (let i = 0; i < N; i++) {
  ripe[i] = [];
  days[i] = [];
}

for (let i = 0; i < N; i++) {
  const arr = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    ripe[i][j] = arr[j];
    if (arr[j] !== -1) target_count++;
    if (arr[j] === 1) {
      current_count++;
      days[i][j] = 0;
    }
    if (arr[j] === 0) {
      days[i][j] = Infinity;
    }
    if (arr[j] === -1) {
      days[i][j] = -1;
    }
  }
}
if (current_count === target_count) {
  answer = 0;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  dequeue() {
    if (!this.length) {
      return null;
    } else {
      const oldHeadValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      if (this.length == 0) {
        this.tail = null;
      }
      return oldHeadValue;
    }
  }
}

const queue = new Queue();

function DFS() {
  while (queue.length) {
    const [i, j] = queue.dequeue();
    //왼쪽
    if (j && ripe[i][j - 1] !== -1) {
      if (!ripe[i][j - 1]) {
        ripe[i][j - 1] = 1;
        current_count++;
      }
      if (days[i][j - 1] > days[i][j] + 1) {
        days[i][j - 1] = days[i][j] + 1;
        queue.push([i, j - 1]);
      }
    }
    //오른쪽
    if (j < M - 1 && ripe[i][j + 1] !== -1) {
      if (!ripe[i][j + 1]) {
        ripe[i][j + 1] = 1;
        current_count++;
      }
      if (days[i][j + 1] > days[i][j] + 1) {
        days[i][j + 1] = days[i][j] + 1;
        queue.push([i, j + 1]);
      }
    }
    //위
    if (i && ripe[i - 1][j] !== -1) {
      if (!ripe[i - 1][j]) {
        ripe[i - 1][j] = 1;
        current_count++;
      }
      if (days[i - 1][j] > days[i][j] + 1) {
        days[i - 1][j] = days[i][j] + 1;
        queue.push([i - 1, j]);
      }
    }
    //아래
    if (i < N - 1 && ripe[i + 1][j] !== -1) {
      if (!ripe[i + 1][j]) {
        ripe[i + 1][j] = 1;
        current_count++;
      }
      if (days[i + 1][j] > days[i][j] + 1) {
        days[i + 1][j] = days[i][j] + 1;
        queue.push([i + 1, j]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!days[i][j]) {
      queue.push([i, j]);
    }
  }
}

DFS();

if (answer) {
  if (current_count !== target_count) answer = -1;
  else {
    let max = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (max < days[i][j]) {
          max = days[i][j];
        }
      }
    }
    answer = max;
  }
}
console.log(answer);
