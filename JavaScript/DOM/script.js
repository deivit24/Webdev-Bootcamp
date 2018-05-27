// var tag = document.getElementById("highlight");
// var tags = document.getElementsByClassName("bolded");
//
//
//
// var par = document.querySelector("p");
//
// par.textContent = "blah blah blah";
//
//
// // time to manipulate attributes
//
// var link = document.querySelector("a");
// link.getAttribute("href");
// link.setAttribute("href", "https://www.facebook.com");
//
// // =========time to learn events=========
// var button = document.querySelector("button");
// var p = document.querySelector("#content");
//
// button.addEventListener("click", function () {
//   p.textContent = "What";
//
// });



var blue = document.querySelector(".blue");
var red = document.querySelector(".red");

red.addEventListener("click", function () {
  red.style.background = "purple";
});

blue.addEventListener("click", function () {
  blue.style.background = "gold";
});
