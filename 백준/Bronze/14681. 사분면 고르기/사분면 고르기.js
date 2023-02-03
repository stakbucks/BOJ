const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});
function solution(x, y) {
  if (x > 0) {
    if (y > 0) return console.log("1");
    else if (y < 0) return console.log("4");
  } else if (x < 0) {
    if (y > 0) return console.log("2");
    else if (y < 0) return console.log("3");
  }
}