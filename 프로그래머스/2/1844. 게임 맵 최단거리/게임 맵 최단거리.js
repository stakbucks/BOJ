// function solution(maps) {
//   let n = maps.length,
//     m = maps[0].length;
//   const dir = [
//     [0, -1],
//     [0, 1],
//     [1, 0],
//     [-1, 0],
//   ];

//   let queue = [[0, 0, 1]];
//   maps[0][0] = 0;

//   while (queue.length) {
//     let [cx, cy, cnt] = queue.shift();
//     if (cx === n - 1 && cy === m - 1) return cnt;

//     for (const [dx, dy] of dir) {
//       let [nx, ny] = [cx + dx, cy + dy];
//       if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
//       if (maps[nx][ny]) {
//         maps[nx][ny] = 0;
//         queue.push([nx, ny, cnt + 1]);
//       }
//     }
//   }

//   return -1;
// }
function Queue() {
  const queue = [];
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

const WALL = 0;
const EMPTY = 1;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(maps) {
  const visited = Array.from({length:maps.length},()=>Array(maps[0].length).fill(false))

  const queue = Queue();
  queue.enqueue([0,0]);
visited[0][0]=true;
    
  while (queue.size()) {
    const [x, y] = queue.dequeue();
    
    for (const [dx, dy] of DIRS) {
      const [nx, ny] = [dx + x, dy + y];
        // map 밖으로 벗어나는 경우
      if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) continue;
        // 벽인 경우
      if (maps[nx][ny] === WALL) continue;
        // 방문한 좌표인 경우
    if(visited[nx][ny]===true) continue;
        
      maps[nx][ny] = maps[x][y] + 1;
      queue.enqueue([nx, ny]);
        visited[nx][ny]=true;

    }
  }
const answer=maps[maps.length-1][maps[0].length-1]
  return answer===1 ? -1 : answer ;
}
