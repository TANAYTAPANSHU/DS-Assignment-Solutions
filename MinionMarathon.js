process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/////////////
function main() {

let input_arr1 = readLine()
  .split(" ")
  .map((x) => parseInt(x));

let i,
  k,
  a,
  b,
  f,
  cnt = 0,
  x,
  y,
  cur;

a = input_arr1[0];
b = input_arr1[1];
f = input_arr1[2];
k = input_arr1[3];

a--;
f--;
(x = f), (y = a - f);
cur = b;

var ok = 1;

for (i = 0; i < k; i++) {
  let u = 1;
  if (i != k - 1) u = 2;
  cur -= x;
  if (cur < 0) ok = 0;
  if (cur < u * y) (cur = b), cnt++;
  cur -= y;
  if (cur < 0) ok = 0;
  [x, y] = [y, x];
}
console.log(ok ? cnt : -1);

}



