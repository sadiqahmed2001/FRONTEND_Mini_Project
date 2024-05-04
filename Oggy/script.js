const characters = ["Oggy", "Joey", "Dee Dee", "Marky", "Jack"];
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

    function checkGuess() {
      const guess = document.getElementById("guess").value.trim();
      const resultElement = document.getElementById("result");

      if (guess === randomCharacter) {
        resultElement.textContent = "Congratulations! You guessed correctly.";
      } else {
        resultElement.textContent = "Sorry, wrong guess. Try again.";
      }
    }