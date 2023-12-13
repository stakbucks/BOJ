function solution(picks, minerals) {
  let [diaPicks, ironPicks, stonePicks] = picks;
  const diamondPick = new Map().set('diamond', 1).set('iron', 1).set('stone', 1);
  const ironPick = new Map().set('diamond', 5).set('iron', 1).set('stone', 1);
  const stonePick = new Map().set('diamond', 25).set('iron', 5).set('stone', 1);

  // minerals를 다 섯개씩 쪼개서 diamond가 많은 순으로 정렬 => diamond 곡괭이 먼저 사용!

  const splitMinerals = [];
  let i = 0;

  while (i < minerals.length) {
    const j = i + 5 > minerals.length - 1 ? minerals.length : i + 5;

    const mineralsCnt = countMineralCategories(minerals.slice(i, j));
    splitMinerals.push(mineralsCnt);

    i = j;
  }
    
    if(splitMinerals.length>diaPicks+ironPicks+stonePicks){
        splitMinerals.pop();
    }

  let fatigue = 0;

  const sorted = splitMinerals.sort((a, b) => {
    const [aDia, aIron, aStone] = a;
    const [bDia, bIron, bStone] = b;

    if (a.length !== b.length) {
      return 1
    }

    if (aDia === bDia) {
      if (aIron === bIron) {
        return bStone - aStone;
      }
      return bIron - aIron;
    }
    return bDia - aDia;
  });

  sorted.forEach(([dia, iron, stone]) => {
    if (diaPicks) {
      fatigue += diamondPick.get('diamond') * dia + diamondPick.get('iron') * iron + diamondPick.get('stone') * stone;
      diaPicks--;
    } else if (ironPicks) {
      fatigue += ironPick.get('diamond') * dia + ironPick.get('iron') * iron + ironPick.get('stone') * stone;
      ironPicks--;
    } else if (stonePicks) {
      fatigue += stonePick.get('diamond') * dia + stonePick.get('iron') * iron + stonePick.get('stone') * stone;
      stonePicks--;
    }
  });
  return fatigue;

  function countMineralCategories(minerals) {
    let [dia, iron, stone] = [0, 0, 0];

    minerals.forEach((mineral) => {
      switch (mineral) {
        case 'diamond':
          dia++;
          break;
        case 'iron':
          iron++;
          break;
        case 'stone':
          stone++;
          break;
      }
    });

    return [dia, iron, stone];
  }
}
