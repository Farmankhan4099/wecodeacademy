### q 10

```
//1 2 3 4 5
// 2 3 4 5
//  3 4 5
//   4 5
//    5

for (let a = 1; a <= 5; a++) {
  str = "";
  for (let b = 1; b <= a; b++) {
    str += " ";
  }

  for (let c = a; c <= 5; c++) {
    str += c + " ";
  }
  console.log(str);
}

```

### q 8 Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

```

let arr = [1, 2, 20, 30, 40, 34, 40, 49, 46];

let newArres = arr.filter(number);
let newArres1 = newArres.map(multi);
console.log(newArres1.reduce(sumPlus));

function number(num) {
 return num > 30 && num < 50;
}

function multi(numburing) {
 return numburing + 20;
}

function sumPlus(total, numbers) {
 return total + numbers;
}

```

### 7 Write a JavaScript function to find a word within a string. Test Data :

```

let str1 = "my name farman khan is here khan";
let spl = str1.split(" ");
let search = find(spl);
let a = "khan";
console.log("khan is " + search + " times");

function find(find) {
  count = [];
  for (let a = 0; a < find.length; a++) {
    if (find[a] === "khan") {
      count++;
    }
  }
  return count;
}

```

## 2 Write a JavaScript program to capitalize the first letter of each word of a given string.

```

let str2 = "weCode academy";
let str3 = str2.split(" ");

for (let a = 0; a < str3.length; a++) {
  str3[a] = str3[a][0].toUpperCase() + str3[a].substring(1);
}

let strEmpty = "";

for (let b = 0; b < str3.length; b++) {
  strEmpty += str3[b] + " ";
}
console.log(strEmpty);


```

### 3 Write a JavaScript program to check whether all the digits in a given number are the same or not.

```

let arr03 = [1, 2, 3, 4, 5, 6, 7];
let ans = arr03.every(sameNumber);
console.log(ans);
function sameNumber(val) {
  return val === 1;
}

```

### 4 Write a JavaScript function that reverse a number.

```


let arr3 = [3, 4, 3, 5, 32, 42, 332, 3];
let empty11 = [];

console.log(reverseNumber(arr3));

function reverseNumber(numburing1) {
  for (let a = numburing1.length - 1; a >= 0; a--) {
    empty11.push(arr3[a]);
  }
  return empty11;
}

```

### 9 Convert below array

```

let arr9 = [
 [1, 2],
 [3, 4],
 [5, 6],
 [7, 8],
 [9, 10],
];
let newArr10 = [];
for (let i = 0; i < arr9.length; i++) {
 let first = arr9[i][0] + arr9[i][1];
 newArr10.push(first);
}
console.log(newArr10);

```
