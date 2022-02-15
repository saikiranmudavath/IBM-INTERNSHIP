console.log("Array");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

console.log("Square of Array with map");
let newArray = array.map((a) => a * a);
console.log(newArray);

console.log("Even elements of array with filter");
let newArray1 = array.filter((a) => a % 2 == 0);
console.log(newArray1);

console.log("Odd elements of array with filter");
let newArray2 = array.filter((a) => a % 2 == 1);
console.log(newArray2);

console.log("sumof elements of array with reduce");
let newArray3 = array.reduce((fun = (a, c) => a + c), 0);
console.log(newArray3);
