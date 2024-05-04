function getChuckNorrisJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        const jokeElement = document.getElementById("joke");
        jokeElement.textContent = data.value;
      })
      .catch(error => {
        console.error("Error fetching Chuck Norris joke:", error);
        alert("Error fetching Chuck Norris joke. Please try again.");
      });
  }