import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
import ToggleCelsius from "./ToggleCelsius";
import weatherLogo from "./assets/weatherLogo.png";

import Home from "./pages/Home";
const FavoritesPage = React.lazy(() => import("./pages/FavoritesPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [homeCity, setHomeCity] = useState("");
  const [favoritesCity, setFavoritesCity] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <img src={weatherLogo} alt="Weather Logo" />
          <h1 className="header-title">My first weather app</h1>
          <ToggleCelsius isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
          <nav>
            <Link to="/">🏠</Link> {` | `}
            <Link to="/favorites">❤️</Link>
          </nav>
        </div>
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isCelsius={isCelsius}
                  city={homeCity}
                  setCity={setHomeCity}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  favorites={favorites}
                  setFavorites={setFavorites}
                  city={favoritesCity}
                  setCity={setFavoritesCity}
                  isCelsius={isCelsius}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
