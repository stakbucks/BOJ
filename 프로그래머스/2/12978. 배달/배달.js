function solution(N, road, K) {
  let count = 1;
  const maps = Array.from({length: N + 1}, () => []);
  for (const [a, b, c] of road) {
    maps[a].push([b, c]);
    maps[b].push([a, c]);
  }
  const visited = Array(N + 1).fill(Infinity);
  DFS(1, 0);
  function DFS(idx, time) {
    visited[idx] = Math.min(visited[idx], time);
    maps[idx].forEach(([v, k]) => {
      const nextTime = time + k;
      if (visited[v] > nextTime && nextTime <= K) DFS(v, nextTime);
    });
  }
  return visited.reduce((acc, cur) => (cur !== Infinity ? acc+1 : acc), 0);
}
