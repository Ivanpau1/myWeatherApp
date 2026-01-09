import { useState } from "react";
import Button from "./Button";

export default function InputSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchInput);
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
      <Button action="Search" />
    </form>
  );
}
