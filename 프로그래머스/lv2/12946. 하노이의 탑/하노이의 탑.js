function solution(n) {
  let result = [];
  const arr = [1, 2, 3];
  const go = (n, from, to) => {
    const newTo = arr.filter((v) => v !== from && v !== to)[0];
    if (n === 1) {
      result.push([from, to]);
      return;
    }

    go(n - 1, from, newTo);
    go(1, from, to);
    go(n - 1, newTo, to);
  };

  go(n, 1, 3);
  console.log(result);
  return result;
}