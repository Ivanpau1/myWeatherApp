import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function returnBack() {
    navigate(-1);
  }

  return (
    <>
      <h1>Error 404. Not found.</h1>
      <button onClick={returnBack}>🔙</button>
    </>
  );
}
