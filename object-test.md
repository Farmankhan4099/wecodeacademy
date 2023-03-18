### 1 What is an object in JavaScript?

```

 object ek data stracture h isme ham kisi bhi type ka data store karwa sakte h
 object me data ko key value me likhte h

```

### 2 What is the difference between dot notation and bracket notation for accessing object properties?

```

 dot notation me ham kisi key ko .(dot) laga ke likhte h and  isme ham varieble ko
 nhi likh sakte aur isme number keys ko nhi chle sakte



 bracket notation me ham kisi key ko bracket ke under likhte h isme varieble
  ko bhi likh sakte h

```

### 3..How do you loop through the properties of an object in JavaScript?

```

const object = {
  name: "farman",
  mobile: 9116934980,
  address: "jhotwara",
  city: "jaipur",
};
let arr = Object.entries(object);

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i][0], arr[i][1]);
}

```

### 4 . What is the difference between an object and an array in JavaScript?

```

 object ek data stracture h isme ham kisi bhi type ka data store karwa sakte h
 object me data ko key value me likhte h

 array bhi ek datastracture hota h isme ham ek varieble ke under ek jyada
 value store karwa sakte h array me kisi bhi type ka data  store karwa sakte h

```

### 6 Write a function that takes an object representing a person and returns their full name.

```

let person = {
  firstName: "farman",
  lastName: "khan",
};
console.log(person.firstName + " " + person.lastName);

```

### 7 Create an Object with your personal details. Now print all the keys of the object in ascending order.

```

let myDetails = {
  name: "farman khan",
  mobileNumber: 9116934980,
  address: "jhotwara",
  city: "jaipur",
  bankName: "sbi",
};

let convert = Object.keys(myDetails);
let a = [...convert];
console.log(a.sort(sorting));

function sorting(num, num1) {
  return num.length - num1.length;
}
```

### 8 Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

```

let myDetails1 = {
  name: "farman khan",
  mobileNumber: 9116934980,
  address: "jhotwara",
  city: "jaipur",
  bankName: "sbi",
};

let convert1 = Object.values(myDetails1);
let b = [...convert1];
console.log(b.sort(sorting1));

function sorting1(num, num1) {
  return num1.length - num.length;
}


```
