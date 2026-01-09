export default function Button(props) {
  return (
    <button type="submit" className="search-button">
      {props.action}
    </button>
  );
}
