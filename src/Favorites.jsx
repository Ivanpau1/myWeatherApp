export default function FavoriteCities({ favorites = [], setCity }) {
  if (favorites.length === 0) return null;

  return (
    <div className="favorites">
      <h2>Favorite cities</h2>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            <button className="button" onClick={() => setCity(city)}>
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
