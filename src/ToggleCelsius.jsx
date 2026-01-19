export default function ToggleCelsius({ isCelsius, setIsCelsius }) {
  function handleToggle() {
    setIsCelsius(!isCelsius);
  }
  return (
    <button className="button" onClick={handleToggle}>
      °C/°F
    </button>
  );
}
