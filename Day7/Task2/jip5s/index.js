let arr = [1, 2, 3, 4, 5];
let [x, y, z] = arr.slice(1, 5);
console.log("destructuring");
console.log(x, y, z);
const students = {
  firstName: "Sai",
  lastName: "Kiran"
};

let { firstName: fname, lastName: lname, age = 22 } = students;
console.log("destructuring object properties");
console.log(fname, lname, age);

console.log("rest operator");
function funcOne(name = "Bob", ...arg) {
  console.log(name);
  console.log(arg);
}
funcOne();
funcOne("Sai", "Siri", "Rithu", 20, 22, true);
console.log("spread operator");
let arrOne = [1, 2, 3];

let arrTwo = [...arrOne, 4, 5, 6];
console.log(arrTwo);
