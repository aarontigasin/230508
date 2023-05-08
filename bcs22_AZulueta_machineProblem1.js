function playGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const maxGuesses = parseInt(prompt('How many guesses would you like?'), 10);
  let numGuesses = 0;
  let guessedCorrectly = false;

  while (numGuesses < maxGuesses && !guessedCorrectly) {
    const guess = parseInt(prompt('Guess a number between 1 and 100:'), 10);
  
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert('Please enter a valid number between 1 and 100.');
    } else {
      numGuesses++;
    
      if (guess === randomNumber) {
        guessedCorrectly = true;
        alert(`Congratulations, you guessed the number in ${numGuesses} tries!`);
      } else if (guess < randomNumber) {
        alert('Too low! Guess a higher number.');
      } else {
        alert('Too high! Guess a lower number.');
      }
    }
  }

  if (!guessedCorrectly) {
    alert(`Sorry, you ran out of guesses. The number was ${randomNumber}.`);
  }
}
playGuessingGame();
