## q-1 =Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let str = ["apple", "banana", "orange"];
console.log(str.includes("orange"));

```

## 2= Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
function sumNumber(num) {
  sum = 0;
  for (let a = 0; a < num.length; a++) {
    if (num[a] % 2 === 0) {
      sum = sum + num[a];
    }
  }
  return sum;
}

console.log(sumNumber([2, 1, 3, 5, 3, 62, 34, 6]));
```

## q-3 Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```
 let arr = [1, 2, 3, 4, 5];
 let arr1 = [1, 2, 4, 3, 5];

 let divide = sameNumber(arr, arr1);
 console.log(divide);

 function sameNumber(num) {
   let newArr = [];
   for (let a = 0; a < num.length; a++) {
     if (num[a].includes(newArr)) {
       newArr.push(num[a]);
     }
   }
   return newArr;
 }

```

## 4 Given an array of strings, write a function that returns the longest string in the array.

```
function longest(bigNumber) {
  let strEmpty1 = [];
  for (let a = 0; a < bigNumber.length; a++) {
    if (bigNumber[a].length > strEmpty1.length) {
      strEmpty1 = bigNumber[a];
    }
  }
  return strEmpty1;
}

console.log(longest(["banana", "mango", "cherry", "papaya"]));
```

## 5 Write a function that takes an array of numbers and returns the largest number in the array.

```
function max(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(max([1, 32, 43, 21, 87, 56, 22]));

```

## 6 Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```

function evenNumber(number) {
  let empty = [];

  for (let a = 0; a < number.length; a++) {
    if (number[a] % 2 === 0) {
      empty.push(number[a]);
    }
  }
  return empty;
}

let arr6 = [2, 6, 7, 9, 10, 12, 30];
let convert = evenNumber(arr6);
console.log(convert);

```

## q-7 Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```


function string(string1) {
  strEmpty = [];

  for (let a = 0; a < string1.length; a++) {
    if (string1[a].length > 5) {
      strEmpty.push(string1[a]);
    }
  }
  return strEmpty;
}

console.log(string(["banana", "mango", "apple", "cheery", "papaya"]));


```

## q-8 Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

```

```

## 9 Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
let arr7 = [2, 3, 4, 6, 7, 8];
console.log(arr7.map(square));
function square(num) {
  return num ** 2;
}

```

## 10 Write a function that takes an array of numbers and returns the average of all the numbers in the array.

```

let array2 = [2, 4, 6, 8, 10];
let average = array2.reduce(testAverage);

function testAverage(total, firstValue) {
  return total + firstValue;
}
console.log(average / array2.length);

```

## 11 Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

```

let arr11 = [2, 4, 6, 29, 64, 10, 4, 2];
console.log(arr11.filter(greaterNumber));
function greaterNumber(num) {
  return num > 5;
}

```

## 12 Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

```

let arr12 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr12.map(plus));
function plus(num) {
  return num + 1;
}

```

## 13 Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

```


```

## 14 Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

```

let reduceNumber = ["my", "name", "wecode", "academy"];
console.log(reduceNumber.reduce(plusNumber, 0));

function plusNumber(pre, cur) {
  return pre + cur.length;
}

```

## 15 Write a function that takes an array of strings and sorts them by their length in ascending order.

```

let str2 = ["apple", "banana", "cherry", "date"];
console.log(str2.sort(fruits));
function fruits(num, num1) {
  return num.length - num1.length;
}

```

## 16 Write a function that takes an array of numbers and returns the second highest number.

```

```

## 17 Write a function that takes an array of numbers and returns a new array with all the unique numbers.

```

```

## 18 Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

```
function nameInfo(myInfo) {
  let open = [];

  for (let a = 0; a < myInfo.length; a++) {
    if (myInfo[a].includes("a")) {
      open += " " + myInfo[a];
    }
  }
  return open;
}

console.log(nameInfo(["farman", "khan", "here", "back", "is"]));

```

## 19 Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

```

let num2 = [2, 5, 36, 7, 4, 3, 522, 32, 4323, 12];
console.log(num2.sort(ascendingNumber));

function ascendingNumber(num, num1) {
  return num - num1;
}

```

## 20 Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

```
function flattens(str) {
  strEmpty1 = "";
  for (let a = 0; a < str.length; a++) {
    strEmpty1 += str[a];
  }
  return strEmpty1.split("");
}

let arr20 = ["hello", "world"];
console.log(flattens(arr20))

```
