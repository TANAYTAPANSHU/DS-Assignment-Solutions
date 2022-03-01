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

function solve() {
  let n, k;
  let input_arr2 = readLine()
    .split(" ")
    .map((x) => parseInt(x));
  n = input_arr2[0];
  k = input_arr2[1];
  
  let a = new Array(n + 1).fill(0);

  let input_arr3 = readLine()
    .split(" ")
    .map((x) => parseInt(x));

  for (let i = 1; i <= n; i++) {
    a[i] = input_arr3[i - 1];
  }
  
  a.sort((x, y) => x - y);
  for (let i = 1; i <= n; i++) {
    let te1 = a[i] + k;
    let te2 = a[i] - k;
    var is = 1;
    if (!(a[1] >= te2)) is = 0;
    if (!(a[n] <= te1)) is = 0;
    if (is) return 1;
  }
  return 0;
}

/////////////
function main() {

let t = parseInt(readLine());

while (t--) {
  if (solve()) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
}



