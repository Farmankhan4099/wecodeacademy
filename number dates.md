## 1 How can you convert a string to a number in JavaScript? write all the ways.

```
console.log(Number("10"));

```

## 2 How do you round a number to a certain number of decimal places in JavaScript?

```
console.log((10.2412).toFixed(2));

```

## 3 How can you generate a random number between two values in JavaScript?

```

console.log(Math.trunc(Math.random() \* 10) + 1);

```

## 4 How do you convert a number to a binary, octal, or hexadecimal format in JavaScript?

```

let num = 10;
let binary = num.toString(2);
console.log(binary);

let octal = num.toString(8);
console.log(octal);

let hexadecimal = num.toString(16);
console.log(hexadecimal);

```

## 5 How do you add or subtract a certain number of days from a date in JavaScript?

```

let d = new Date();
console.log(d.getDate() + 4);
console.log(d.getDate() - 5);

```

## 6 How do you compare two dates in JavaScript? Check if a date is small or large or equal to other date?

```

let dates = new Date();
let othreDate = new Date("3-4-2023");

console.log(dates < othreDate);
console.log(dates > othreDate);
console.log(dates === othreDate);

```

## 7 How can you format a date in JavaScript according to the user's locale?

```
const event = new Date();
const options = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));

```

## 8 How do you calculate the difference between two dates in JavaScript?

```

let date1 = new Date("4-11-2023");
let date2 = new Date("1-10-2023");
let diff = date1 - date2;
let diffAdd = Math.floor(diff / (1000 _ 60 _ 60 \* 24));
console.log(diffAdd);

```

## 9 How do you check if a year is a leap year in JavaScript?

```

function leepYear(year) {
return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

console.log(leepYear(2024));

```

## 10 How do you convert a string to a date in JavaScript? Write all ways.

```

console.log(new Date("4/11/2023 3:4:50"));

```

## 11 How can you parse a date from a string in a specific format in JavaScript?

```
let dates1 = "2023-4-11";
let spl = dates1.split("-");
let splDiv = new Date(spl[0], spl[1], spl[2]);
console.log(splDiv);

```

## 12 How can you get the time in a specific timezone in JavaScript?

```
let dateTime = new Date();
let options1 = {
timeZone: "Australia/Sydney",
};

console.log(dateTime.toLocaleDateString("en-GB", options1));

```

## 13 Print date and time after every 1 second in the format 'MM/DD/YYYY HH:MM:SS'

```

 setInterval(function () {
 let d = new Date();
 console.log(
 `${d.getMonth()}/${d.getDay()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
 );
 }, 1000);

 setInterval(function () {
 let zoneDate = new Date();
 let localDate = zoneDate.toLocaleDateString("en-US", { timeZone: "UTC" });
 console.log(localDate);
 }, 1000);

```

## 14 Write a JavaScript function to get the number of days in a month. Pass month and year as an arugment to the function. for example : getDays(2, 2023). Answer will be 28

```

function getDays(year, month) {
return new Date(year, month, 0).getDate();
}

console.log(getDays(2023, 2));

```

## 15 Write a JavaScript function to get the week day name for the given date.

```
function week(days) {
let day = [
"sunday",
"monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"suterday",
];

let weekDay = days.getDay();
return day[weekDay];
}

console.log(week(new Date()));

```

## 16 Write a JavaScript function to get the month name from the given date

```

function month(month) {
let months = [
"january",
"fabruary",
"march",
"april",
"may",
"june",
"july",
"august",
"september",
"october",
"november",
"desember",
];

let monthCount = month.getMonth();
return months[monthCount];
}

console.log(month(new Date()));

```

## 17 Write a JavaScript function to check if given date is on weekend or not (Saturday/Sunday).

```

function datesTime(date) {
let day = date.getDay();
return day === 2 || day === 5;
}

console.log(datesTime(new Date("4/11/2023")));

```

## 18 Ask your about his date of birth. Now write a JavaScript function to calculate age based on the given date of birth.

```

function age(dob) {
let ages = new Date();
let worth = new Date(dob);
let diffYear = ages.getFullYear() - worth.getFullYear();
let diffMonth = ages.getMonth() - worth.getMonth();

if (diffMonth < 0 || (diffMonth === 0 && ages.getDate() < worth.getDate())) {
diffYear--;
}
return diffYear;
}

console.log(age("2002/2/2"));

```

## 19 Write a Javascript function to using setInterval to show alert box when date is your birth date.

```

function dob(date) {
setInterval(() => {
let today = new Date();
let toDate = `/ ${
      today.getMonth() + 1
    } ${today.getDate()} ${today.getFullYear()}`;

    if (toDate === date) {
      alert("happy birthDay!");
    }

}, 1000);
}

dob("2002/2/2");

```

## 20 Show your birth date in Arabic

```

const today = new Date();
const options2 = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
calendar: "gregory",
locale: "ar-SA",
};
const todayInArabic = today.toLocaleDateString("hi", options2);
console.log(todayInArabic);

console.log(
new Intl.DateTimeFormat("ar", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
calendar: "gregory",
locale: "ar-SA",
}).format(new Date())
);

```

## 21 Show your birth date in Chinese

```

console.log(
new Intl.DateTimeFormat("zh", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
calendar: "gregory",
locale: "ar-SA",
}).format(new Date())
);

let date = new Date();
let optional3 = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
};

console.log(date.toLocaleDateString("zh", optional3));

```

## 22 Write a JavaScript function to convert a binary number to a decimal number.

```
 function binaryToDecimal(binary) {
 return parseInt(binary, 2);
 }

 const binaryNumber = "101010";
 const decimalNumber = binaryToDecimal(binaryNumber);
 console.log(decimalNumber); // output: 42

```

## 23 Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

```
function convertToBase(decimalNumber, format) {
let convertedNumber = "";

if (format === "binary") {
convertedNumber = decimalNumber.toString(2);
} else if (format === "hexadecimal") {
convertedNumber = decimalNumber.toString(16);
} else if (format === "octal") {
convertedNumber = decimalNumber.toString(8);
} else {
console.log("Invalid format!");
return;
}

return convertedNumber;
}

const decimalNumber = 42;
const binaryNumber = convertToBase(decimalNumber, "binary");
const hexadecimalNumber = convertToBase(decimalNumber, "hexadecimal");
const octalNumber = convertToBase(decimalNumber, "octal");

console.log(binaryNumber); // Output: "101010"
console.log(hexadecimalNumber); // Output: "2a"
console.log(octalNumber); // Output: "52"

```

## 24 Write a JavaScript function to find the highest value in an array using Math.max

```

function max(arr) {
return Math.max(...arr);
}

console.log(max([2, 53, 4, 54, 3, 44]));

```

## 25 Write a JavaScript function to find the minimum value in an array using Math.min

```

function min(arr) {
return Math.min(...arr);
}
console.log(min([1, 2, 3, 4, 5, 6]));
// 26 Write a JavaScript function to check whether a value is an integer or not.

function numbers(num) {
return Number.isInteger(num);
}

console.log(numbers(5.2));

```

## 27 Write a JavaScript function to convert a positive number to negative number or to negativie number to positive number.

```

function change(num) {
return -num;
}

console.log(change(-5));

```

## 28 Convert 50 litre to Hindi locale and chinese locale

```

console.log(
new Intl.NumberFormat("hi", {
style: "unit",
unit: "liter",
}).format(10.2)
);

console.log(
new Intl.NumberFormat("zh", {
style: "unit",
unit: "liter",
}).format(10.2)
);

```

## 29 Create a function to convert any number to given currency.

```
function testing(num, curr) {
let currencyCode = new Intl.NumberFormat("de-DE", {
style: "currency",
currency: curr,
});

return currencyCode.format(num);
}
console.log(testing(60, "EUR"));

```

## 30 Write a JavaScript program to find the missing number from a given array. There are no duplicates in the list. Start from 1

```
function arres(arr) {
let len = arr.length + 1;
let plus = (len \* (len + 1)) / 2;
let empty = arr.reduce((total, value) => total + value);
return plus - empty;
}

console.log(arres([1, 2, 3, 5, 6]));

```
