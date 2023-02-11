const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
const X = Number(input);

let a = 1;
let i = 2;

while (X > a + i) {
  a = a + i;
  i++;
}

if (X === 1) {
  console.log(`${1}/${1}`);
} else {
  let sub = X - a;
  const top = sub;
  const bottom = i + 1 - top;
  if (i % 2 === 0) {
    console.log(`${top}/${bottom}`);
  } else console.log(`${bottom}/${top}`);
}
