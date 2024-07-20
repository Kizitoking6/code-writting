function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "f9eb30249e68c04dab75f56ca74c5945";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        `;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
    });
}