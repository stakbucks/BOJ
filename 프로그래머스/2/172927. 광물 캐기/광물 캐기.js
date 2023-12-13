function solution(picks, minerals) {
  const [maxDia, maxIron, maxStone] = picks;
  // 필요한 곡괭이 수

  const diamondPick = new Map().set('diamond', 1).set('iron', 1).set('stone', 1);
  const ironPick = new Map().set('diamond', 5).set('iron', 1).set('stone', 1);
  const stonePick = new Map().set('diamond', 25).set('iron', 5).set('stone', 1);
  let minFatigue = Infinity;

  DFS(0, 0, 0, 0, 0);

  function DFS(index, dia, iron, stone, fatigue) {
    // 더 이상 사용가능한 곡괭이가 없거나, 캘 광물이 없으면 종료
    if (dia + iron + stone === maxDia + maxIron + maxStone || index === minerals.length) {
      minFatigue = Math.min(minFatigue, fatigue);
      return;
    }

    let nextIndex = index + 5 > minerals.length - 1 ? minerals.length : index + 5;

    const slicedMinerals = minerals.slice(index, nextIndex);

    if (dia < maxDia) {
      const nextFatigue = slicedMinerals.reduce((acc, cur) => acc + diamondPick.get(cur), fatigue);
      DFS(nextIndex, dia + 1, iron, stone, nextFatigue);
    }
    if (iron < maxIron) {
      const nextFatigue = slicedMinerals.reduce((acc, cur) => acc + ironPick.get(cur), fatigue);
      DFS(nextIndex, dia, iron + 1, stone, nextFatigue);
    }
    if (stone < maxStone) {
      const nextFatigue = slicedMinerals.reduce((acc, cur) => acc + stonePick.get(cur), fatigue);
      DFS(nextIndex, dia, iron, stone + 1, nextFatigue);
    }
  }

  return minFatigue;
}


