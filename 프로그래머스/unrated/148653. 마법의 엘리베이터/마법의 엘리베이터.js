
function solution(storey) {
  const arr = [];

  const str = [...String(storey)].map(Number).reverse();
  str.push(0);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < 5) {
      count += str[i];
    }
    if (str[i] === 5) {
      if (str[i + 1] < 5) {
        count += str[i];
      } else {
        count += 10 - str[i];
        let j = i + 1;
        str[j]++;

        while (1) {
          if (str[j] === 10) {
            str[j] = 0;
            str[j + 1]++;
            j++;
          } else {
            break;
          }
        }
      }
    }
    if (str[i] > 5) {
      count += 10 - str[i];
      let j = i + 1;
      str[j]++;

      while (1) {
        if (str[j] === 10) {
          str[j] = 0;
          str[j + 1]++;
          j++;
        } else {
          break;
        }
      }
    }
  }

  return count;
}