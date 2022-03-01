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

function lower_bound(pref, key) {
  let n = pref.length;
  (i = 0), (j = n);
  while (i < j) {
    let k = Math.floor((i + j) / 2);
    if (key <= pref[k]) {
      j = k;
    } else {
      i = k + 1;
    }
  }
  if (i < n && pref[i] < key) {
    i++;
  }
  return i;
}

/////////////
function main() {


let input_arr1 = readLine()
  .split(" ")
  .map((x) => parseInt(x));
let n = input_arr1[0];
let q = input_arr1[1];

let pref = new Array(n + 1).fill(0);

let input_arr2 = readLine()
  .split(" ")
  .map((x) => parseInt(x));

for (let i = 0; i < n; i++) {
  let a = input_arr2[i];
  pref[i + 1] = pref[i] + a;
}

for (let i = 0; i < q; i++) {
  let input_arr3 = readLine()
    .split(" ")
    .map((x) => parseInt(x));
  let a = input_arr3[0];
  let b = input_arr3[1];

  console.log(lower_bound(pref, pref[a - 1] + b));
}

}



