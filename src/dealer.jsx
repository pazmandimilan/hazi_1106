function Dealer(props) {
    const { name, location, zip } = props;
  
    return (
      <div className="dealer">
        <h3>{name}</h3>
        <p>Helyszín: {location}</p>
        <p>IRSZ: {zip}</p>
      </div>
    );
  }
  
  export default Dealer;
  