function solution(info, edges) {
  let answer = 0;
  let connectedNode = Array.from({ length: info.length }, () => []);

  for (let i = 0; i < edges.length; i++) {
    let current = edges[i];
    connectedNode[current[0]].push(current[1]); // connectedNode에 연결된 노드를 인덱스에 맞게 push
  }

  function dfs(currentNode, sheep, wolf, possible) {
    let newPossibles = [...possible];
    let currentIndex = newPossibles.indexOf(currentNode);

    if (info[currentNode]) {
      wolf++;
    } else {
      sheep++;
    }

    answer = Math.max(answer, sheep); // sheep의 수를 매 경우마다 answer와 비교하여 최대 값을 저장

    if (sheep === wolf) {
      // 양의 수인 sheep과 wolf의 수가 같은 경우
      return;
    }

    newPossibles.push(...connectedNode[currentNode]);
    // connectedNode에 현재 노드에서 이동 가능한 노드를 newPossibles에 추가
    newPossibles.splice(currentIndex, 1);

    for (const nextNode of newPossibles) {
      dfs(nextNode, sheep, wolf, newPossibles);
    }
  }

  dfs(0, 0, 0, [0]); // DFS를 사용해 모든 경로를 탐색

  return answer; // 모든 경로를 탐색후 최대 값인 answer를 반환
}
// const SHEEP = 0;
// const WOLF = 1;

// function solution(info, edges) {
//   const wolvesOnTheWay = Array(info.length).fill([]);

//   const tree = new Map();

//   edges.forEach((edge, i) => {
//     const [parent, child] = edge;
//     tree.set(parent, [...(tree.get(parent) ?? []), child]);
//   });

//   getWolvesOntheWayByDFS(0, []);

//   // 해당 노드로 가기 위해 반드시 거쳐야 하는 늑대들 구하기
//   function getWolvesOntheWayByDFS(node) {
//     const children = tree.get(node);
//     children?.forEach((child) => {
//       wolvesOnTheWay[child] = info[child] === WOLF ? [...wolvesOnTheWay[node], child] : [...wolvesOnTheWay[node]];
//       getWolvesOntheWayByDFS(child);
//     });
//   }

//   const sheepNodes = new Set(info.reduce((acc, cur, idx) => (cur === WOLF ? [...acc] : [...acc, idx]), []));
//   sheepNodes.delete(0);

//   let maxSheeps = 0;

//   visitSheepNodesByDFS(sheepNodes, 1, new Set());

//   function visitSheepNodesByDFS(sheepNodes, sheepCnt, passedWolves) {
//     maxSheeps = Math.max(sheepCnt, maxSheeps);

//     sheepNodes.forEach((nextNode) => {
//       const nextPassedWolves = new Set(passedWolves);
//       wolvesOnTheWay[nextNode].forEach((passedWolf) => {
//         nextPassedWolves.add(passedWolf);
//       });
//       if (sheepCnt > nextPassedWolves.size) {
//         const nextSheepNodes = new Set(sheepNodes);
//         nextSheepNodes.delete(nextNode);
//         visitSheepNodesByDFS(nextSheepNodes, sheepCnt + 1, nextPassedWolves);
//       }
//     });
//   }
//   return maxSheeps;
// }