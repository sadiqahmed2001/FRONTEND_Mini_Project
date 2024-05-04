const cardImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
  ];

  let shuffledCards = [];
  let flippedCards = [];
  let matchedPairs = 0;
  let gameStarted = false;

  function startGame() {
    if (gameStarted) return;

    gameStarted = true;
    shuffledCards = shuffleArray(cardImages);
    matchedPairs = 0;
    flippedCards = [];

    document.getElementById('startButton').disabled = true;

    let gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    shuffledCards.forEach((image, index) => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.dataset.image = image;
      card.dataset.index = index;
      card.onclick = flipCard;

      let front = document.createElement('img');
      front.src = 'card-front.jpg';

      let back = document.createElement('img');
      back.src = `images/${image}`;
      back.classList.add('back');

      card.appendChild(front);
      card.appendChild(back);

      gameBoard.appendChild(card);
    });

    setTimeout(() => {
      document.querySelectorAll('.card .back').forEach(card => card.style.visibility = 'hidden');
      setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));
        setTimeout(() => {
          document.querySelectorAll('.card .back').forEach(card => card.style.visibility = 'visible');
        }, 500);
      }, 2000);
    }, 1000);
  }

  function flipCard(event) {
    let card = event.target.closest('.card');
    if (!card || flippedCards.includes(card)) return;

    card.classList.toggle('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }

  function checkMatch() {
    let [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.image === secondCard.dataset.image) {
      matchedPairs++;
      if (matchedPairs === cardImages.length / 2) {
        alert('Congratulations! You have won the game!');
      }
    } else {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
    }
    flippedCards = [];
  }

  function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }