let score = 0;

    function popBubble(event) {
      event.target.style.display = 'none';
      score++;
      updateScore();
    }

    function updateScore() {
      document.getElementById('score').textContent = score;
    }

    function createBubble() {
      let bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = Math.random() * (window.innerWidth - 60) + 'px';
      bubble.style.top = window.innerHeight + 'px';
      bubble.onclick = popBubble;
      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 5000);
    }

    setInterval(createBubble, 2000);
