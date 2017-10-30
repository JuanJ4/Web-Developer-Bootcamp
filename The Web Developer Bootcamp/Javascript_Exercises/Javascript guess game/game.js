// Create Secret Number
var secretNumber = 4;

// Ask User For Guess
var stringGuess = prompt("Guess a Number between 1-10");
var guess = Number(stringGuess);


// Check If Guess Is Right
if (guess === secretNumber) {
alert("You got it right fam!");
}

// Check If Guess Is Higher

else if(guess > secretNumber) {
  alert("Too High Rrother, Guess Again!");
}

else {
  alert("Too Low Man,But Guess Again");
}


// --------------  // messing around with selecting //



// var button = document.querySelector("button");

// button.addEventListener("click", function(){
//  document.body.style.background ="purple";
// });
