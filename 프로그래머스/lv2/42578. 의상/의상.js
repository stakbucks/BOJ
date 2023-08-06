function solution(clothes) {
  const map = new Map();
  for (const [name, type] of clothes) {
    if (map.has(type)) {
      const value = map.get(type);
      value.push(name);
      map.set(type, value);
    } else {
      map.set(type, [name]);
    }
  }
  let sum = 0;
  for (const type of map.keys()) {
    const value = map.get(type);
    if (!sum) {
      sum = (value.length+1);
    } else {
      sum *= (value.length+1);
    }
  }
  return sum - 1;
}


