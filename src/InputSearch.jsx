import { useState, useEffect } from "react";
import ToggleFavorite from "./ToggleFavorite";

export default function InputSearch({ isCelsius }) {
  const [city, setCity] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "86cb18ebffb49f9f46a95d4405882d20";

  useEffect(() => {
    if (!city) return;
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [city]);

  function handleSearch(e) {
    e.preventDefault();
    setCity(searchInput);
  }

  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {weatherData && (
        <>
          <div className="main">
            <h1 className="city">
              {weatherData.name}
              <ToggleFavorite city={weatherData.name} />
            </h1>
            <p className="temperature">
              {isCelsius
                ? `${weatherData.main.temp.toFixed(0)}°C`
                : `${((weatherData.main.temp * 9) / 5 + 32).toFixed(0)}°F`}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
            <p className="condition">{weatherData.weather[0].main}</p>
          </div>
          <div className="weather-details">
            <div>
              <p>Humidity</p>
              <p className="number">{weatherData.main.humidity}%</p>
            </div>
            <div>
              <p>Wind Speed</p>
              <p className="number">{weatherData.wind.speed}m/s</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}