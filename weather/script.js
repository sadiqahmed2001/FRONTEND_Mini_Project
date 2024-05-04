function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found.");
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById("weather");
        weatherInfo.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error("Error fetching weather:", error);
        alert("Error fetching weather data. Please try again.");
      });
  }