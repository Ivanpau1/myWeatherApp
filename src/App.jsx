import { useState, useEffect } from "react";
import Input from "./InputSearch";

function App() {
  const [city, setCity] = useState("");
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
    <div className="wrapper">
      <Input onSearch={setCity} />
      {weatherData && (
        <>
          <div className="header">
            <h1 className="city">{weatherData.name}</h1>
            <p className="temperature">{weatherData.main.temp.toFixed(0)}°C</p>
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
    </div>
  );
}

export default App;
