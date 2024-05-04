let score = 0;

    function whack(event) {
      if (event.target.classList.contains('mole')) {
        score++;
        updateScore();
        event.target.style.display = 'none';
      }
    }

    function updateScore() {
      document.body.style.backgroundColor = '#ffcc00'; /* Yellow */
      setTimeout(() => {
        document.body.style.backgroundColor = '#00ccff'; /* Back to Blue */
      }, 100);

      document.getElementById('score').textContent = score;
    }

    function popUpRandomMole() {
      let holes = document.getElementsByClassName('hole');
      let randomHoleIndex = Math.floor(Math.random() * holes.length);
      let randomHole = holes[randomHoleIndex];

      let mole = randomHole.querySelector('.mole');
      mole.style.display = 'block';

      setTimeout(() => {
        mole.style.display = 'none';
        setTimeout(popUpRandomMole, Math.random() * 2000 + 500);
      }, Math.random() * 1000 + 500);
    }

    popUpRandomMole();