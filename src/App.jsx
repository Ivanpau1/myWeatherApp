import { useState } from "react";
import InputSearch from "./InputSearch";
import ToggleCelsius from "./ToggleCelsius";

function App() {
  const [isCelsius, setIsCelsius] = useState(true);

  const API_KEY = "86cb18ebffb49f9f46a95d4405882d20";

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header-title">My first weather app </h1>
        <ToggleCelsius isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      </div>
      <InputSearch isCelsius={isCelsius} />
    </div>
  );
}

export default App;
