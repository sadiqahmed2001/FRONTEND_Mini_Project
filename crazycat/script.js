function moveCat(direction) {
    let cat = document.getElementById('cat');
    let transformValue = '';

    switch (direction) {
      case 'left':
        transformValue = 'translateX(-50px)';
        break;
      case 'right':
        transformValue = 'translateX(50px)';
        break;
      case 'up':
        transformValue = 'translateY(-50px)';
        break;
      case 'down':
        transformValue = 'translateY(50px)';
        break;
    }

    cat.style.transform = transformValue;
  }

  function spinCat() {
    let cat = document.getElementById('cat');
    cat.style.transform += ' rotate(360deg)';
  }