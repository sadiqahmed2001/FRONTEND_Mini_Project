const trafficSignal = document.getElementById('traffic-signal');

    function changeSignal() {
      const signal = document.createElement('div');
      signal.classList.add('signal');
      
      // Change signal to green
      signal.classList.add('green');
      trafficSignal.appendChild(signal);
      
      setTimeout(() => {
        // Change signal to red after 5 seconds
        signal.classList.remove('green');
        signal.classList.add('red');
        setTimeout(() => {
          // Change signal to yellow after 5 seconds of red
          signal.classList.remove('red');
          signal.classList.add('yellow');
          setTimeout(() => {
            // Remove yellow signal after 3 seconds
            signal.remove();
          }, 3000);
        }, 5000);
      }, 5000);
    }

    // Change signal initially
    changeSignal();

    // Change signal every 13 seconds (5s green + 5s red + 3s yellow)
    setInterval(() => {
      changeSignal();
    }, 13000);