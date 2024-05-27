 // Generate a random number between 1 and 100
 const randomNumber = Math.floor(Math.random() * 100) + 1;

 let guessCount = 0;
 let attempts = 10;

 function checkGuess() {
   const userGuess = parseInt(document.getElementById("guessField").value);
   const message = document.getElementById("message");

   if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
     message.textContent = "Please enter a valid number between 1 and 100.";
     return;
   }

   guessCount++;
   attempts--;

   if (userGuess === randomNumber) {
     message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guessCount} attempts.`;
     disableInput();
   } else if (guessCount === 10) {
     message.textContent = `Game Over! The number was ${randomNumber}.`;
     disableInput();
   } else {
     const hint = userGuess < randomNumber ? "higher" : "lower";
     message.textContent = `Wrong guess! Try again. You have ${attempts} attempts left. Hint: Guess ${hint}.`;
   }
 }

 function disableInput() {
   document.getElementById("guessField").disabled = true;
   document.querySelector("button").disabled = true;
   document.getElementById("guessField").style.backgroundColor = 'crimson';
   document.getElementById("guessField").style.color = 'yellow';
   document.querySelector("button").style.backgroundColor = 'crimson';
   document.querySelector("button").style.color = 'yellow';
 }