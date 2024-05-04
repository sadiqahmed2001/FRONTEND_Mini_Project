let timer;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function start() {
      clearInterval(timer);
      timer = setInterval(updateDisplay, 1000);
    }

    function stop() {
      clearInterval(timer);
    }

    function reset() {
      clearInterval(timer);
      hours = 0;
      minutes = 0;
      seconds = 0;
      updateDisplay();
    }

    function updateDisplay() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      let display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      document.getElementById('display').textContent = display;
    }

    function pad(number) {
      return (number < 10 ? '0' : '') + number;
    }