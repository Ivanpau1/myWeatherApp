import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Thessaloniki");

  const API_KEY = "86cb18ebffb49f9f46a95d4405882d20";

  useEffect(() => {
    const fetchWeatherData = async (cityName) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="city">Thessaloniki</h1>
        <p className="temperature">16°C</p>
        <p className="condition">Cloudy</p>
      </div>
      <div className="weather-details">
        <div>
          <p>Humidity</p>
          <p>74%</p>
        </div>
        <div>
          <p>Wind Speed</p>
          <p>2.1m/s</p>
        </div>
      </div>
      <div className="forecast">
        <h2 className="forecast-header">5-Day Forecast</h2>
        <div className="forecast-days">
          <div className="forecast-day">
            <p>Monday</p>
            <p>Cloudy</p>
            <p>17°C</p>
          </div>
          <div className="forecast-day">
            <p>Tuesday</p>
            <p>Sunny</p>
            <p>18°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
