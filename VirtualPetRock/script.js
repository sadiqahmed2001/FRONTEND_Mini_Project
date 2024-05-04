function feed() {
    displayMessage("You tried to feed your pet rock, but it's a rock...");
  }

  function pet() {
    displayMessage("You lovingly pet your pet rock. It doesn't seem to notice.");
  }

  function play() {
    displayMessage("You play with your pet rock. It remains unresponsive.");
  }

  function displayMessage(message) {
    document.getElementById('message').textContent = message;
  }