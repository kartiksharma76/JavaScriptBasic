document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  const mockWeather = {
  "Delhi": { "temp": 30, "condition": "Sunny", "humidity": 50 },
  "Mumbai": { "temp": 28, "condition": "Cloudy", "humidity": 70 },
  "Kolkata": { "temp": 32, "condition": "Humid", "humidity": 80 },
  "Chennai": { "temp": 33, "condition": "Hot", "humidity": 60 },
  "Bengaluru": { "temp": 24, "condition": "Rainy", "humidity": 85 },
  "Jaipur": { "temp": 35, "condition": "Dry", "humidity": 40 }
}


  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const weather = mockWeather[city];

  if (weather) {
    resultDiv.innerHTML = `
      <h2>${city}</h2>
      <p>Temperature: ${weather.temp}°C</p>
      <p>Condition: ${weather.condition}</p>
      <p>Humidity: ${weather.humidity}%</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>No data for "${city}". Try London, Paris, Delhi, or Tokyo.</p>`;
  }
});
