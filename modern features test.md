## q1 Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

```

function str(str) {
  newStr = "";
  newStr = [...str].reverse().join("");
  return newStr;
}

console.log(str("weCode academy"));

```

## q2 Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

```

function removeArr([...arr]) {
  arr.shift();
  return arr;
}

console.log(removeArr([1, 2, 3, 4]));

```

## q3 Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

```
function unknown([...arr]) {
  console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];
unknown([...arr, ...arr1]);

```

## q4 Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)

```

function objFn({ ...obj }) {
  if (obj?.x) {
    return obj.x;
  } else {
    return null;
  }
}

let obj = {
  name: "farman khan",
  x: "properties",
};

console.log(objFn(obj));

```

## 5 Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

```

function sumOdd(arr) {
  let newArr = [];
  let newArr1 = [];
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 2 === 0) {
      newArr.push(arr[a]);
    } else {
      newArr1.push(arr[a]);
    }
  }
  return [...newArr1, ...newArr];
}

console.log(sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

```

## 6 Create an array of numbers. Now change the position of each element with their next element.

```

```

## 7 Now create an object and use enhanced object literal property computation to create below object

```

 let ageFind = Number(prompt("what is your age"));
let mobileFind = Number(prompt("what is your mobile number"));
 let addressFind = prompt("what is your age");

 let obj1 = {
 ["age" + ageFind]: ageFind,
 [mobileFind]: "mobile",
 [addressFind + "address"]: addressFind,
 };

 console.log(obj1.age12);

```

## 8 Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.

```

```

## 9 Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible.

```

let num = 90;
if (num > 80) {
console.log(num && 100);
} else {
console.log(num && 200);
}

```

## 10 Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0

```

function findNumber([...arr]) {
newPusharr = [];
for (let a = 0; a < arr.length; a++) {
if (arr[a] % 2 === 0) {
newPusharr.push(0);
} else {
newPusharr.push(1);
}
}
console.log(newPusharr);
}

let arres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findNumber(arres);

```

## 11 Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.

```

```

## 12 Given an array of strings, use reduce to return the total number of characters in all the strings.

```

let arrStr = ["we", "code", "academy", "in", "jaipur"];
let add = arrStr.reduce(totalNumber, 0);
console.log(add);

function totalNumber(total, value) {
return total + value.length;
}

```

## 13 Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.

```

let arrStr1 = ["we", "code", "academy", "in", "jaipur"];
let plus = arrStr1.filter(findStr);
 console.log(plus);

function findStr(num) {
return num.length < 5;
}

console.log(plus.reduce(sumStr, 0));

function sumStr(totals, values) {
return totals + values.length;
}

```

## 14 Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

```

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
let filterNumber = arr2.filter(fillNumber);
console.log(filterNumber);

function fillNumber(num) {
return num % 2 === 1;
}

let mapNumber = filterNumber.map(mapNumberfind);
 console.log(mapNumber);

function mapNumberfind(num) {
return num \* 3;
}

console.log(mapNumber.reduce(reduNumber, 0));

function reduNumber(total, num1) {
return total + num1;
}

```

## 15 Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

```

let str2 = "the quick brown fox";
let spl = str2.split(" ");

console.log(spl.reverse().join(" "));

```
