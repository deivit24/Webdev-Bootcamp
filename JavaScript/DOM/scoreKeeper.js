var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.querySelector("#reset");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var num = document.querySelector("input");
var playScore = document.querySelector(".playScore");

num.addEventListener("change", function () {
  playScore.textContent = num.value;
  winningScore = Number(num.value);
});

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1.classList.add("winner");
      p2.classList.add("loser");
      gameOver = true;

    }
    p1.textContent = p1Score;
  }

});

p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2.classList.add("winner");
      p1.classList.add("loser");

      gameOver = true;
    }
    p2.textContent = p2Score;
  }
});

reset.addEventListener("click", function () {
  var result = confirm("Are you sure you want to reset?");
if (result) {
  p1Score = 0;
  p2Score = 0;
  p1.textContent = p1Score;
  p2.textContent = p2Score;//Logic to delete the item
  p1.classList.remove("winner");
  p2.classList.remove("loser");
  p2.classList.remove("winner");
  p1.classList.remove("loser");
  gameOver = false;

}

});






function resetFunction() {

    var result = confirm("Good Job to the winner! And you fucking suck loser!");
  if (result) {
    p1Score = 0;
    p2Score = 0;
    p1.textContent = p1Score;
    p2.textContent = p2Score;//Logic to delete the item
    p1.classList.remove("winner");
    p2.classList.remove("loser");
    p2.classList.remove("winner");
    p1.classList.remove("loser");
    gameOver = false;

  }



}
