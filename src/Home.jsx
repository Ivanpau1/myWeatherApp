import { useState } from "react";
import weatherLogo from "./assets/weatherLogo.png";
import InputSearch from "./InputSearch";
import ToggleCelsius from "./ToggleCelsius";

export default function Home() {
  const [isCelsius, setIsCelsius] = useState(true);
  return (
    <div className="wrapper">
      <div className="header">
        <img src={weatherLogo} alt="Weather Logo" />
        <h1 className="header-title">My first weather app </h1>
        <ToggleCelsius isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      </div>
      <InputSearch isCelsius={isCelsius} />
    </div>
  );
}
