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




// This is the way I found out how to toggle
// function myFunction() {
//   var button = document.querySelector("button");
//   var body = document.querySelector("body");
//   if (body.style.background === "white") {
//     body.style.background = "purple";
//   }
//   else {
//     body.style.background = "white";
//   }
//
// }

// this is how I was taught to toggle

// This was the shortest way ===============
var button = document.querySelector("button");
button.addEventListener("click", function () {
    document.body.classList.toggle("purple");

});
