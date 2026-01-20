import { useNavigate } from "react-router-dom";
import weatherLogo from "./assets/weatherLogo.png";

export default function Favorites() {
  const navigate = useNavigate();

  function goToIndex() {
    navigate("/");
  }

  return (
    <div className="wrapper">
      <div className="header">
        <img src={weatherLogo} alt="Weather Logo" />
        <h1 className="header-title">My first weather app </h1>
        <button onClick={goToIndex} className="button">
          🏠
        </button>
      </div>
    </div>
  );
}
