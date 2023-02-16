# test-javascript

- ans-10

```
let string = "we code";
if (string.length > 10) {
console.log(string.length);
} else {
console.log("no");
}
```

- ans-2

```
for (let x = 1; x <= 5; x++) {
let str = "";
if (x % 2 === 0) {
for (let xy = 1; xy <= x; xy++) {
str = str + "#" + "$";
   }
 } else {
   for (let z = 1; z <= x; z++) {
     str = str + "$" + "#";
}
}
console.log(str);
}
```

-ans-4

```
let num = 1000;
let ans = num;
switch (num) {
case 100:
console.log(100);
break;

case ans:
if (num % 2 == 0) {
console.log("even");
} else if (num % 2 === 1) {
console.log("odd");
}
break;

default:
console.log(10000);
break;
}
```

- ans-5

```
 let question = Number(prompt("What is your birth year?"));
 let currentYear = 2023;
 let year = currentYear - question;
 if (year > 18) {
 let license = confirm("Do you have valid license number?");
 if (license) {
 let licenseNumber = Number(prompt("please enter your licence number"));
 alert(licenseNumber);
 }
 }
```

-ans-1

```
 let french = Number(prompt("How many french fries"));
 let burger = Number(prompt("How many berger"));
 let chowmin = Number(prompt("How many plates of chowmin"));
 let Manchurian = Number(prompt("How many plates of Manchurian"));
 let cokes = Number(prompt("How many Cokes "));
 if (
 ((french _= 60),
 (burger _= 50),
 (chowmin _= 100),
 (Manchurian _= 80),
 (cokes \*= 50))
 ) {
 console.log(`french: ${french}
     burger: ${burger}
     chowmin: ${Manchurian}
     cokes : ${cokes}`);
 } else {
 console.log("0");
 }

```

-ans-8

```
let a = 10;
let b = 10;
let c = 11;
let d = 10;

if (a === b || a === c || a === d || b === c) {
console.log("yes");
} else {
console.log("no");
}
```

- ans-3

```
 let question2 = Number(prompt("How many times do you want to print Series"));

 for (let ab = 1; ab <= question2; ab++) {
 console.log(ab);
 }
```

- ans-6

```
let num1 = 3;
let num2 = 19;
let num3 = num2 - num1;
if (num3 > 19) {
console.log(num3 _ 3);
} else {
console.log(num3 _ 2);
}

```

- ans-7

```
let ba = 4;
let ca = -3;
if (ba > 0 || ca > 0) {
console.log(ba + ca);
} else {
console.log(ba \* ca);
}
```

- ans-2

```
for (let i = 7; i >= 1; i--) {
let a = "";
for (let j = 1; j <= i; j++) {
if (j % 3 === 1) {
a += "$";
} else {
a += "#";
}
}
console.log(a);
}
```
