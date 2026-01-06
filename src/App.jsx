import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Thessaloniki");

  // API key for OpenWeatherMap
  const API_KEY = "86cb18ebffb49f9f46a95d4405882d20";

  useEffect(() => {
    const fetchWeatherData = async (cityName) => {
      setCity(cityName);
      try {
        // Fetch current weather data
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData(city);
    // Run this effect only when the city changes
  }, [city]);

  return (
    <div className="wrapper">
      {weatherData && weatherData.main && weatherData.weather && (
        <>
          <div className="header">
            <h1 className="city">{weatherData.name}</h1>
            <p className="temperature">
              {((weatherData.main.temp - 32) / 1.8).toFixed(0)}°C
            </p>
            <p className="condition">{weatherData.weather[0].main}</p>
          </div>
          <div className="weather-details">
            <div>
              <p>Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div>
              <p>Wind Speed</p>
              <p>{weatherData.wind.speed}m/s</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
