import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

let newArray: number[] = [1, 2, 3, 4, 5];
console.log(newArray);

let newArray: (string | number)[] = ["one", "two", "three"];
newArray.push(100);
console.log(newArray);

let data: any;
data = 20;
console.log(data);

function sum(a: number, b: number) {
  console.log(a + b);
}
sum(5 + 2);

let tup: [string, number, string?, number?];
tup = ["hlo", 1, 2];
console.log(tup);
