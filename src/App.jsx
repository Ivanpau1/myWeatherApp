import { useState, useEffect } from "react";
import InputSearch from "./InputSearch";
import ToggleCelsius from "./ToggleCelsius";
import Favorites from "./Favorites";
import weatherLogo from "./assets/weatherLogo.png";

function App() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [city, setCity] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="wrapper">
      <div className="header">
        <img src={weatherLogo} alt="Weather Logo" />
        <h1 className="header-title">My first weather app </h1>
        <ToggleCelsius isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      </div>
      <Favorites favorites={favorites} setCity={setCity} />
      <InputSearch
        isCelsius={isCelsius}
        city={city}
        setCity={setCity}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default App;
