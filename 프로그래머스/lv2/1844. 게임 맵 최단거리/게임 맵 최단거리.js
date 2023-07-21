class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear++] = value;
    return;
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


function solution(maps) {
  const [n, m] = [maps.length - 1, maps[0].length - 1];
  const visited = Array.from({length: n+1}, () => Array(m+1).fill(-1));

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = new Queue();
  queue.enqueue([0, 0]);
  visited[0][0] = 1;
  while (queue.size()) {
    const [x, y] = queue.dequeue();
    if (x === n && y === m) {
      return visited[n][m];
    }
    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
          if (nx < 0 || nx > n || ny < 0 || ny > m) continue;
      if (!maps[nx][ny] || visited[nx][ny] !== -1) continue;
      visited[nx][ny] = visited[x][y] + 1;
              if (nx === n && ny === m) return visited[nx][ny];
      queue.enqueue([nx, ny]);
    }
  }
  return -1;
}


