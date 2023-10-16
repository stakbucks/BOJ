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

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(maps) {
  const result = [];
  maps = maps.map((v) => v.split(''));
  let flag = false;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== 'X') {
          flag=true
        const sum = BFS(i, j);
        result.push(sum);
      }
    }
  }
  if (!flag) return [-1];
  return result.sort((a, b) => a - b);

  function BFS(i, j) {
    let sum = Number(maps[i][j]);
    const queue = new Queue();
    queue.enqueue([i, j]);
    maps[i][j] = 'X';
    while (queue.size()) {
      const [x, y] = queue.dequeue();
      for (const [dx, dy] of dirs) {
        const [nx, ny] = [dx + x, dy + y];

        if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) continue;
        if (maps[nx][ny] === 'X') continue;
        else {
          queue.enqueue([nx, ny]);
          sum += Number(maps[nx][ny]);
          maps[nx][ny] = 'X';
        }
      }
    }
      console.log(sum)
    return sum;
  }
}

//["X591X","X1X5X","X231X", "1XXX1"]