export default function ToggleFavorite({ city, favorites, setFavorites }) {
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
