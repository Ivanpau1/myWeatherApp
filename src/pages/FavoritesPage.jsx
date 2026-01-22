import { useEffect, useState } from "react";
import Favorites from "../Favorites";
import ToggleFavorite from "../ToggleFavorite";

export default function FavoritesPage({
  favorites,
  setFavorites,
  city,
  setCity,
  isCelsius,
}) {
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

  return (
    <>
      <Favorites favorites={favorites} setCity={setCity} />
      {weatherData && (
        <div className="main">
          <div className="main-info">
            <h1 className="city">
              {weatherData.name}
              <ToggleFavorite
                city={weatherData.name}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </h1>
            <p className="temperature">
              {isCelsius
                ? `${weatherData.main.temp.toFixed(0)}°C`
                : `${((weatherData.main.temp * 9) / 5 + 32).toFixed(0)}°F`}
            </p>
          </div>
          <div className="additional-info">
            <img
              className="image"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
            <p className="condition">{weatherData.weather[0].main}</p>
            <div className="humidity">
              <p>Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div className="wind-speed">
              <p>Wind Speed</p>
              <p>{weatherData.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
