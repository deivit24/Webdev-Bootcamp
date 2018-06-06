var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click", function () {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }

});

hard.addEventListener("click", function () {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  numSquares = 6;
  h1.style.backgroundColor = "steelblue";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {

      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }


});


colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function () {
  // Generate all new Colors
  colors = generateRandomColors(numSquares);
  // Pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  this.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});
for (var i = 0; i < squares.length; i++) {
  // add initial comments to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listenrs to squares
  squares[i].addEventListener("click", function () {

    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to color picker
    console.log(pickedColor, clickedColor);
    if (clickedColor === pickedColor) {

      messageDisplay.textContent = "Correct!";
      reset.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given square
    squares[i].style.backgroundColor = color;
  }

}


function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num) {
  // make an array
  var arr =[];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    // get random color and push into array
  }
  // return that array
  return arr;
}


function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 -255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", "  + g + ", " + b + ")";
}
