const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
 
function getPermutation(arr, selectNumber) {
  const result = []; 
  if (selectNumber === 1) {
    return arr.map((value) => [value]); 
  }
 
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)]; 
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]); 
 
    result.push(...attached);
  });
 
  return result;
}
 
const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
const numbers = [];
for (let i = 1; i <= N; i++) numbers.push(i); 
const result = getPermutation(numbers, M); 
for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}