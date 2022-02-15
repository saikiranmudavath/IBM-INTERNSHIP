var parElem = document.getElementById("main");
var btn = document.getElementById("button1");
btn.addEventListener("click", function () {
  parElem.setAttribute("class", "cyan");
});
var btn = document.getElementById("button2");
btn.addEventListener("click", function () {
  parElem.setAttribute("class", "yellow");
});
var btn = document.getElementById("button3");
btn.addEventListener("click", function () {
  parElem.setAttribute("class", "green");
});
