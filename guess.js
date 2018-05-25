// creat secretNumber

var secretNumber = 4;
// ask user for Guessing

var guess = prompt("Guess a number");

// check if guess is right

if (Number(guess) === secretNumber) {
  alert("you got it right!!");

}
// otherwise, check if higher

else if (Number(guess) < secretNumber) {
  alert("It's higher you dumbass");
  
}

// check if lower

// else if (Number(guess) > secretNumber) {
// alert("It is lower you piece of shit");}

else {
  alert("its lower you fucking moron");
}
