function solution(n, wires) {
  const set = new Set();
  const tree = Array.from({length: n + 1}, () => []);
  for (const wire of wires) {
    const [a, b] = wire;
    tree[a].push(b);
    tree[b].push(a);
    set.add([a, b]);
  }
  let min = Infinity;
  for (const wire of set) {
    // 전선 하나 자르기
    const visited = new Set();
    const value = [...set].filter((v) => v[0] !== wire[0] || v[1] !== wire[1]).shift();
    visited.add(value[0]);
    visited.add(value[1]);
    for (const v of tree[value[0]]) {
      const sorted = [value[0], v].sort((a, b) => a - b);
      if (sorted[0] === wire[0] && sorted[1] === wire[1]) {
        continue;
      }
      if (!visited.has(v)) {
        visited.add(sorted[0]);
        visited.add(sorted[1]);
        DFS(wire, [value[0], v], visited);
      }
    }
    DFS(wire, value, visited);
    min = Math.min(Math.abs(n - 2 * visited.size), min);
  }
  function DFS(cutWire, value, visited) {
    const [a, b] = value;
    for (const v of tree[b]) {
      const sorted = [b, v].sort((a, b) => a - b);
      if (sorted[0] === cutWire[0] && sorted[1] === cutWire[1]) {
        continue;
      }
      if (!visited.has(v)) {
        visited.add(sorted[0]);
        visited.add(sorted[1]);
        DFS(cutWire, [b, v], visited);
      }
    }
    // tree[b].forEach((v) => {
    //   const sorted = [b, v].sort((a, b) => a - b);
    //   if (sorted[0] === cutWire[0] && sorted[1] === cutWire[1]){
    //     continue;
    //   }
    //     if (!visited.has(v)) {
    //       visited.add(sorted[0]);
    //       visited.add(sorted[1]);
    //       DFS(cutWire, [b, v], visited);
    //     }
    // });
  }
  return min;
}
