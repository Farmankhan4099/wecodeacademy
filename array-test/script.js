// ans-2
//Create an array with five elements and print out the length of the array.

let arr = [2, 34, 12, 90, 2];
console.log(arr.length);

// ans-6 Create an array with four elements and remove the second element.

let removeArr = [3, 74, 2, 1];
removeArr.splice(1, 1);
console.log(removeArr);

// ans-9 Create an array with four elements and sort the array in ascending order.

let arr1 = [2, 111, 4, 21, 23];
console.log(arr1.sort(sortNumber));
function sortNumber(num, num1) {
  return num - num1;
}

// ans-10 Create an array with five elements and sort the array in descending order.

let arr2 = [2, 111, 4, 21, 23];
console.log(arr2.sort(sortNumber1));
function sortNumber1(num, num1) {
  return num1 - num;
}

// ans-11 Create two arrays, concatenate them and print out the resulting array.

let arr3 = [1, 2, 3, 4, 5];
let arr4 = [6, 7, 8, 9, 10];
let newArr = arr3.concat(arr4);
console.log(newArr);

//ans-12 Create an array with three elements and convert it to a string.

let arr5 = [2, 4, 7];
console.log(arr5.toString());

// ans-13 Create an array with four elements and reverse the order of the elements.

let arr6 = [4, 3, 4, 9];
console.log(arr6.reverse());

// ans-16 Create an array with six elements and use the map method to double each element.

let arr7 = [2, 4, 6, 8, 10, 12];
console.log(arr7.map(sumNumber));
function sumNumber(num) {
  return num * 2;
}

// ans-18 Create an array with five elements and use the filter method to return only the even numbers.

let arr8 = [3, 67, 4, 92, 10];
console.log(arr8.filter(evenNumber));
function evenNumber(num1) {
  return num1 % 2 === 0;
}

// ans- 19 Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

let arr9 = [23, 45, 6];
console.log(arr9.join("-"));

// ans- 1 Create an array with three elements and print out the second element.

let arr10 = [21, 37, 1];
console.log(arr10.at(1));

// ans- 3 Create an array with four elements and print out each element using a for loop.

let arr11 = [2, 1, 4, 20];
for (let i = 0; i < arr11.length; i++) {
  console.log(arr11[i]);
}

// ans-5 Create an array with three elements and add a fourth element to the end of the array.

let arr12 = [4, 3, 2];
arr12.push(1);
console.log(arr12);

// ans- 7 Create an array with five elements and remove the last element.

let arr13 = [4, 3, 2, 12, 1];
arr13.pop();
console.log(arr13);

// ans-8 Create an array with three elements and check if the array includes a specific value.

let arr14 = [21, 2, 29];
console.log(arr14.includes(find(7)));

function findNumber(num) {
  return num;
}

// ans-15 Create an array with six elements and slice the array to create a new array with the first three elements.

let arr15 = [32, 3, 32, 43, 4, 2];
let sliceNumber = arr15.slice(0, 3);
console.log(sliceNumber);

//ans- 17  Create an array with four elements and use the while loop to calculate the sum of all elements.

let i = 0;
let arre = [3, 4, 56, 7];
let sum = 0;
while (i < arre.length) {
  sum = sum + arre[i];
  i++;
}
console.log(sum);

//ans- 14 Create an array with five elements and find the index of a specific value.

let arr16 = [1, 21, 3, 40, 4];
console.log(arr16.findIndex(numIndex));

function numIndex(num) {
  return num > 30;
}
