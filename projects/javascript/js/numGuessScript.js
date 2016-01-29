
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false; // keep track if player guess correct answer
var html;
var msg1="";

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}
function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}


do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?' + msg1);
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
	correctGuess = true;  
  } else {
	  if (parseInt(guess)>randomNumber) {
		msg1='Your guess is too high';
	  } else if (parseInt(guess)<randomNumber) {
		msg1='Your guess is too low';
	  } else if (guess === null) {
	  print('<h1><strong>Goodbye</strong></h1><h2>Thanks for playing!</h2>');
	  exit;
  }
  }
} while ( ! correctGuess ) {
  html = '<h1>You guessed the number!</h1>';
  html += '<h2>It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '</h2>';
  print(html);
}





