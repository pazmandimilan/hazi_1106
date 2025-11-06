function Auto({ color, type, brand }) {
  return (
    <div className="auto-card">
      <h2>{brand}</h2>
      <p>Szín: {color}</p>
      <p>Típus: {type}</p>
    </div>
  );
}

export default Auto;
  