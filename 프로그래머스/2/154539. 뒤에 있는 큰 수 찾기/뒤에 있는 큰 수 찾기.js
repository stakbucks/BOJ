function solution(numbers) {
  let answer = [];
  let max = 0;
  let search_arr = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] >= max) {
      max = numbers[i];
      answer.push(-1);
      search_arr = [numbers[i]];
    } else {
      while (1) {
        if (numbers[i] < search_arr.at(-1)) {
          answer.push(search_arr.at(-1));
          search_arr.push(numbers[i]);
          break;
        } else {
          search_arr.pop();
        }
      }
    }
  }

  return answer.reverse();
}
// [ 9, , 5, 3,  ]

// [5,]