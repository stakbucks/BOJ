const SHEEP = 0;
const WOLF = 1;

function solution(info, edges) {
  const dp = Array(info.length).fill([]);

  const tree = new Map();

  edges.forEach((edge, i) => {
    const [parent, child] = edge;
    tree.set(parent, [...(tree.get(parent) ?? []), child]);
  });

  getWolvesOntheWayByDFS(0, []);

  function getWolvesOntheWayByDFS(node) {
    const children = tree.get(node);
    children?.forEach((child) => {
      dp[child] = info[child] === WOLF ? [...dp[node], child] : [...dp[node]];
      getWolvesOntheWayByDFS(child);
    });
  }

  const sheepNodes = new Set(info.reduce((acc, cur, idx) => (cur === WOLF ? [...acc] : [...acc, idx]), []).sort((a, b) => dp[a].length - dp[b].length));
  sheepNodes.delete(0);
  let maxSheeps = 0;

  DFS(sheepNodes, 1, new Set());

  function DFS(sheepNodes, sheepCnt, passedWolves) {
    if (sheepCnt > maxSheeps) {
    }
    maxSheeps = Math.max(sheepCnt, maxSheeps);
    const nextSheepCnt = sheepCnt + 1;

    sheepNodes.forEach((nextNode) => {
      const nextPassedWolves = new Set(passedWolves);
      dp[nextNode].forEach((passedWolf) => {
        nextPassedWolves.add(passedWolf);
      });
      if (sheepCnt > nextPassedWolves.size) {
        const nextSheepNodes = new Set(sheepNodes);
        nextSheepNodes.delete(nextNode);
        DFS(nextSheepNodes, nextSheepCnt, nextPassedWolves);
      }
    });
  }
  return maxSheeps;
}