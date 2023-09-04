function solution(cards) {
  const groups = []; // 그룹 별로 사이즈 저장
  const hasGroup = Array(cards.length + 1).fill(false); // 그룹에 속한 상자인지 체크

  let groupNum = 0;
  for (let i = 0; i < cards.length; i++) {
    if (!hasGroup[i]) {
      // 아직 그룹에 속하지 않은 상자인 경우
      // DFS로 새로운 그룹 생성 후 그 사이즈 넣기
      hasGroup[i] = true;
      groups.push(DFS(i, 1));
    }
  }
  if (groups.length === 1) {
    return 0;
  }
  groups.sort((a, b) => b - a);
  return groups[0] * groups[1];

  function DFS(i, count) {
    const nextIdx = cards[i] - 1;
    if (hasGroup[nextIdx]) {
      return count;
    }

    hasGroup[nextIdx] = true;
    return DFS(nextIdx, count + 1);
  }
}