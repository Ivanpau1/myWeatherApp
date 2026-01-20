import { useNavigate } from "react-router-dom";
import weatherLogo from "./assets/weatherLogo.png";

export default function FavoriteCities() {
  const navigate = useNavigate();

  function goToIndex() {
    navigate("/");
  }

  return (
    <div className="wrapper">
      <div className="header">
        <img src={weatherLogo} alt="Weather Logo" />
        <h1 className="header-title">My favorite cities </h1>
        <button onClick={goToIndex} className="button">
          🏠
        </button>
      </div>
    </div>
  );
}
