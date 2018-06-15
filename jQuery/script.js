// jQuery selecting exercise
// Select all divs and give them a background color of purple
//
// $("div").css("background", "purple");
//
// // Select all the divs with the class of highlight and make them 200px wide
// $(".highlight").css("width", "200px");
//
// // Select the div with the id of  third and give it an orange border
//
// $("#third").css("border", "orange 3px solid");
//
//
// // just messing around with javascript css
// var styles = {
//   color: "blue",
//   border: "black 2px solid",
//   fontSize: "50px"
//
// };
//
// $("p").css(styles);


// Now I will be learning very common jQuery jQueryMethods

// The text() Methods

// $("h1").text("I just changed the content");
//
// $("li").text("Sour Patch");

// .html Method
// $("li").html("<li> Twix </li><li>Snickers</li>");

// .attr() Method

// $("img").attr("src", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg");
//
// $("input").attr("placeholder", "Enter your number");

// .val() Method
// $("input").val("David Salazar");


// .addClass .removeClass. .toggle()


// Advance most common methods for events!
// click() keypress() and on()

// click()

// $("h1").click(function () {
//   alert("h1 has been clicked");
// });
//
//
// $("button").click(function () {
//   $("body").css("background", "#333");
// });

// $("button").click(function () {
//   var text = $(this).text();
//   alert("You clicked " + text);
// });
//
//
// // keypress()
// $("input").keypress(function (event) {
//   if (event.which === 13) {
//     alert("you hit enter");
//   }
//
// });

// on() Method most used in jQuery

// $("h1").on("click", function () {
//   $(this).css("color", "purple");
// });
//
// $("input").on("keypress", function () {
//   console.log("keypressed!");
// });
//
// $("button").on("mouseenter", function () {
//   $(this).css("font-weight", "bold");
// });
// $("button").on("mouseleave", function () {
//   $(this).css("font-weight", "normal");
// });
