// ans-6

// let name = prompt("what is your name?");
// let worthYear = prompt("what is your birth year");
// let currentYear = 2023;
// let age = currentYear - worthYear;
// let address = prompt("what is your address");
// let mobileNumber = prompt("what is your mobile number");

// console.log(`my name ${name}
//  I was born in ${worthYear}
//  and my current age is ${age} years
//  My address is  ${address}
//  and my mobile number is ${mobileNumber}`);

// ans-3

//My name is wecode academy and my friend name is Arun Kumar."
//find count of 'is' in this word is 2.
// let str = " My name is wecode academy and my friend is is name is Arun Kumar.";
// console.log(str.match(/is/g).length);

//  ans-2

// let str = "we are learning exercises ";
// let sli = str.slice(0, 15);
// let endsli = str.slice(15, 24);
// console.log(sli.concat(" JavaScript", endsli));

// ans-8

// let question = "we code academy";
// let indexNum = question.indexOf("c");

// if (indexNum === 3) {
//   console.log("congratulations");
// } else {
//   console.log("sorry");
// }

// ans-4

// let yourName = prompt("what is your name");
// let mobile = prompt("what is mobile number");
// let acNumber = prompt("what is your account number");
// let atmNumber = prompt("What is your atm card number?");
// let aadharNumber = prompt("What is your aadhar number?");

// console.log(yourName);

//mobile number

// let indexNumber = mobile.slice(0, 7);
// let changing = indexNumber.padEnd(10, "*");
// console.log(changing);

// account number

// let index = acNumber.indexOf(7); //7
// let right = acNumber.slice(index); //
// let left = acNumber.slice(0, index); // farmankhan
// let num = left.slice(0, left.length / 2); //farma
// let plus = num.padEnd(left.length, "*"); //farma*****
// console.log(plus + right);

//atm number

// let indexAtm = atmNumber.slice(0, 4);
// let atmChanging = indexAtm.padEnd(12, "*");
// console.log(atmChanging);

// aadhar number

// let index = aadharNumber.charAt(6);
// let right = aadharNumber.slice(index);
// let left = aadharNumber.slice(0, index);
// let num = left.slice(0, left.length / 2);
// let plus = num.padEnd(left.length, "*");
// console.log(plus + right);

//ans-7

let str1 = "wecode academy";
let spl = str1.slice(str1.length / 2);
let str2 = str1.slice(0, str1.length / 2);
console.log(str2 + "hello " + "world " + spl);
