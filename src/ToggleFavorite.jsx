import { useState, useEffect } from "react";

export default function ToggleFavorite({ city }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (city) => {
    const newFavorites = favorites.includes(city)
      ? favorites.filter((c) => c !== city)
      : [...favorites, city];
    setFavorites(newFavorites);
  };

  return (
    <button
      className="favorite-button"
      onClick={() => handleToggleFavorite(city)}
    >
      {favorites.includes(city) ? "★" : "☆"}
    </button>
  );
}
