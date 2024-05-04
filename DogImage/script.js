function getRandomDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.message;
        document.getElementById("dog-image").src = imageUrl;
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
        alert("Error fetching dog image. Please try again.");
      });
  }