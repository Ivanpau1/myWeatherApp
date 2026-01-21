import InputSearch from "../InputSearch";

export default function Home({
  isCelsius,
  city,
  setCity,
  favorites,
  setFavorites,
}) {
  return (
    <InputSearch
      isCelsius={isCelsius}
      city={city}
      setCity={setCity}
      favorites={favorites}
      setFavorites={setFavorites}
    />
  );
}
