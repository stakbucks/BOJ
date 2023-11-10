function Queue() {
  let queue = [];
  let front = 0;
  let rear = 0;

  function enqueue(value) {
    queue[rear] = value;
    rear++;
  }

  function dequeue() {
    const returnValue = queue[front];
    delete queue[front++];
    return returnValue;
  }

  function size() {
    return rear - front;
  }
  return {
    enqueue,
    dequeue,
    size,
  };
}

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(maps) {
  const result = [];
  maps = maps.map((v) => v.split(''));
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== 'X') {
        const sum = BFS(i, j);
        result.push(sum);
      }
    }
  }
  return result.length ? result.sort((a, b) => a - b) : [-1];

  function BFS(i, j) {
    let sum = Number(maps[i][j]);

    const queue = Queue();
    queue.enqueue([i, j]);
    maps[i][j] = 'X';

    while (queue.size()) {
      const [x, y] = queue.dequeue();
      for (const [dx, dy] of dirs) {
        const [nx, ny] = [dx + x, dy + y];

        if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) continue;
        if (maps[nx][ny] === 'X') continue;

        queue.enqueue([nx, ny]);
        sum += Number(maps[nx][ny]);
        maps[nx][ny] = 'X';
      }
    }
    return sum;
  }}
//["X591X","X1X5X","X231X", "1XXX1"]