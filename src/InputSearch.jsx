import { useState } from "react";

export default function InputSearch({ setCity }) {
  const [searchInput, setSearchInput] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    setCity(searchInput);
  }

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <button type="submit" className="button" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
