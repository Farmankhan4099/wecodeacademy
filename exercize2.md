## ans-2

```
 $$#$$#$$
 $$#$$#
 $$#$$
 $$#
 $$

for (let a = 5; a >= 1; a--) {
  str = "";
  for (let b = 1; b <= a; b++) {
    if (b % 2 == 0) {
      str += "#";
    } else {
      str += "$" + "$";
    }
  }
  console.log(str);
}
```

## ans-3

```
// 1 2 3 5 8 13 21 34 55

 let count = Number(prompt("How many times do you want to print Series"));
 let i = 1;
 let j = 1;
 let k = 1;

 for (let c = 1; c <= count; c++) {
   console.log(k);
   i = j;
   j = k;
   k = i + j;
 }
```

## ans-4

```
 let question = prompt("Do you drink tea/coffee");
 switch (question) {
   case "tea":
     console.log("tea");
     break;
   case "coffee":
     console.log("coffee");
     break;
   default:
     console.log("water");
 }
```

## ans-5

```
 let age = Number(prompt("What is your age"));

 if (age > 18 && age < 50) {
   let ans = confirm("Would you like to have a coffee?");
   if (ans) {
     let coffee = prompt("What type of coffee you want to have?");
     alert("Hello Sir/Mam, here is your " + coffee + " coffee ");
   } else {
     alert("Sorry, please visit again");
   }
 } else {
   let ans = confirm("Would you like to have tea?");
   if (ans) {
     let tea = prompt("What type of tea do you want");
     alert("Hello Sir/Mam, here is your " + tea + " tea");
   } else {
     alert("Sorry, please visit again");
   }
 }
```

## ans-6

```
 let number = 50;
 let number2 = 39;
 let number3 = number - number2;
 if (number3 > 40) {
   console.log(number3 * 2);
 } else {
   console.log(number3 * 3);
 }
```

## ans-7

```
 let x = 19;
 let y = 8;
 if ((x > 18 && y < 10) || (y > 18 && x < 10)) {
   console.log(x + y);
 } else {
   console.log(x * y);
 }

```

## ans-8

```
let c = 10;
let d = 10;
let e = 8;
let f = 1;
let g = 9;

if (
  c === d ||
  c === e ||
  c === f ||
  c === g ||
  d === e ||
  d === f ||
  d === g ||
  e === f ||
  e === g ||
  f === g
) {
  console.log("yes");
} else {
  console.log("no");
}

```

## ans-9

```
let numNumber = 30;
if (numNumber % 20 == 0 && numNumber % 10 == 0) {
 console.log(numNumber * 51);
} else {
 console.log(numNumber * 59);
}

```

## ans-10

```

let string = "we code academy in";
let strCount = string.length;
if (strCount > 15) {
  for (let counting = 1; counting <= strCount; counting += 2) {
    console.log(counting);
  }
} else {
  console.log("no");
}

```

## ans-1

```

const french = 60;
const burgers = 50;
const chowmin = 100;
const Manchurian = 80;
const Cokes = 50;

const frenchCount = Number(
  prompt("How many french fries (60rs per piece) do you want to order ?")
);

const burgersCount = Number(
  prompt("How many french burgers (50rs per piece) do you want to order ?")
);

const chowminCount = Number(
  prompt("How many french chowmin (100rs per piece) do you want to order ?")
);

const manchurianCount = Number(
  prompt("How many french manchurian (80rs per piece) do you want to order ?")
);

const cokesCount = Number(
  prompt("How many french manchurian (50rs per piece) do you want to order ?")
);

let total = 0;
if (frenchCount > 0) {
  total = french * frenchCount + total;
} else {
  console.log("frenchCount : " + 0);
}

if (burgersCount > 0) {
  total = total + burgers * burgersCount;
} else {
  console.log("burgersCount : " + 0);
}

if (chowminCount > 0) {
  total = total + chowmin * chowminCount;
} else {
  console.log("chowminCount : " + 0);
}

if (manchurianCount > 0) {
  total = total + manchurianCount * Manchurian;
} else {
  console.log("manchurianCount : " + 0);
}

if (cokesCount > 0) {
  total = total + Cokes * cokesCount;
} else {
  console.log("cokesCount : " + 0);
}

console.log("total :" + total);

```
