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

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(land) {
  const m = land[0].length;
  const n = land.length;

  let oilLumps = 2;

  const map = new Map();

  const oilLump = new Map();

  let answer = 0;

  for (let i = 0; i < m; i++) {
    let rowCnt = 0;
    const visited = new Set();
    for (let j = 0; j < n; j++) {
      if (land[j][i] !== 0) {
        // 석유 발견
        const id = land[j][i] === 1 ? BFS(j, i) : land[j][i];

        if (!visited.has(id)) {
          // 해당 열에서 아직 이 덩어리를 카운트 하지 않은 경우
          rowCnt += oilLump.get(id);
          visited.add(id);
        }
      }
    }
    answer = Math.max(rowCnt, answer);
  }
  return answer;

  function BFS(j, i) {
    const queue = new Queue();

    queue.enqueue([j, i]);
    land[j][i] = oilLumps;

    let oilSize = 1; // 덩어리 크기

    while (queue.size()) {
      const [x, y] = queue.dequeue();
      for (const [dx, dy] of DIRS) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (land[nx][ny] !== 1) continue;

        queue.enqueue([nx, ny]);
        oilSize++;
        land[nx][ny] = oilLumps;
      }
    }

    oilLump.set(oilLumps, oilSize);
    oilLumps++;
    return oilLumps - 1;
  }
}

