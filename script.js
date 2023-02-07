"use strict"
let a = 1;
while (a <= 100) {
  console.log(a);
  a++;
}

let b = 1;
while (b <= 5) {
  console.log("hello world");
  b++;
}

let c = 1;
while (c <= 20) {
  if (c % 2 === 0) {
    console.log("even" + c);
  }
  c++;
}

let d = 1;
while (d <= 20) {
  if (d % 2 === 1) {
    console.log("odd" + d);
  }
  d++;
}

let e = 1;
while (e <= 20) {
  if (e % 5 === 0) {
    console.log(e);
  }
  e++;
}

let sum = 0;
let m = 1;
while (m <= 9) {
  sum = m + sum;

  m++;
}
console.log(sum + "calcuter");

let l = 50;
while (l >= 5) {
  if (l % 5 === 0) {
    console.log(l);
  }
  l--;
}

let i = 100;
while (i >= 1) {
  if (i % 15 === 0) {
    console.log(i);
  }
  i--;
}

let p = 100;
while (p >= 20) {
  if (p % 20 === 0) {
    console.log(p);
  }
  p--;
}

let sums = 0;
let num = 1;
while (num <= 10) {
  sums = num + sums;
  num++;
}
console.log(sums);
