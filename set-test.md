## 1. Create an empty set called mySet.

```
 let mySet = new Set();
 console.log(mySet);
```

## 2. Add the values 1, 2, and 3 to mySet.

```
 let mySet = new Set();
 mySet.add(1);
 mySet.add(2);
 mySet.add(3);
 console.log(mySet);
```

## 3. Check if mySet contains the value 2.

```
 let mySet = new Set();
 mySet.add(1);
 mySet.add(2);
 mySet.add(3);
 let checkValue = mySet.has(2);
 console.log(checkValue);
```

## 4. Remove the value 3 from mySet.

```
 let mySet = new Set();
 mySet.add(1);
 mySet.add(2);
 mySet.add(3);
 mySet.delete(3);
 console.log(mySet);
```

## 5. Find the size of mySet.

```
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.delete(3);
console.log(mySet.size);
```

## 6. Create a new set called otherSet containing the values 2, 3, and 4.

```
let otherSet = new Set();
otherSet.add(2);
otherSet.add(3);
otherSet.add(4);
console.log(otherSet);
```

## 7. Find the intersection of mySet and otherSet.

## 8. Find the union of mySet and otherSet.

```

```

## 9. Find the difference of mySet and otherSet.

```

```

## 10. Find the symmetric difference of mySet and otherSet.

```

```

## 11. Create an array called myArray containing the values 1, 2, 2, and 3.

```

 let myArray = [1, 2, 2, 3];
 console.log(myArray);

```

## 12. Convert myArray to a set called mySet2.

```
 let myArray = [1, 2, 2, 3];
 let mySet2 = new Set(myArray);
 console.log(mySet2);
```

## 13. Check if mySet2 contains the value 2.

```
 let myArray = [1, 2, 2, 3];
 let mySet2 = new Set(myArray);
 console.log(mySet2.has(2));
```

## 14. Remove all duplicate values from myArray and store the result in a new array called uniqueArray.

```
 let myArray = [1, 2, 2, 3];
 let mySet2 = new Set(myArray);
 let uniqueArray = [...mySet2];
 console.log(uniqueArray);
```

## 15. Convert uniqueArray to a set called uniqueSet.

```
 let myArray = [1, 2, 2, 3];
 let mySet2 = new Set(myArray);
 let uniqueArray = [...mySet2];
 let uniqueSet = new Set(uniqueArray);
 console.log(uniqueSet);
```

## 16. Add the value 4 to uniqueSet.

```
 let myArray = [1, 2, 2, 3];
 let mySet2 = new Set(myArray);
 let uniqueArray = [...mySet2];
 let uniqueSet = new Set(uniqueArray);
 uniqueSet.add(4);
 console.log(uniqueSet);
```

## 17. Remove the value 3 from uniqueSet.

```
let myArray = [1, 2, 2, 3];
let mySet2 = new Set(myArray);
let uniqueArray = [...mySet2];
let uniqueSet = new Set(uniqueArray);
uniqueSet.add(4);
uniqueSet.delete(3);
console.log(uniqueSet);
```

## 18. Check if uniqueSet is a subset of mySet.

```

```

## 19. Check if mySet is a superset of uniqueSet.

```

```

## 20. Find the difference between mySet and uniqueSet.

```

```
