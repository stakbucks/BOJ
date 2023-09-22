function solution(skill, skill_trees) {
  const map = new Map();
  [...skill].forEach((v, i) => map.set(v, i));
  let count = 0;
  for (const skillTree of skill_trees) {
    let currentIdx = 0; // currentIdx 보다 반드시 큰 값이 나와야
    let flag = true;
    for (const skill of skillTree) {
      if (map.has(skill)) {
        if (map.get(skill) !== currentIdx) {
          flag = false;
          break;
        } else {
          currentIdx++;
        }
      }
    }
    if (flag){ count++;}
  }
  return count;
}
