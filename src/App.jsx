import { useState } from 'react';
import './App.css';
import Auto from './Auto';
import Dealer from './Dealer';

function App() {

  const [count, setCount] = useState(0); // Kiinduló érték: 0

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Auto color="piros" type="SUV" brand="Toyota" />
      <Auto color="kék" type="sedan" brand="BMW" />
      <Auto color="fekete" type="kupé" brand="Audi" />
      <Dealer name="Autóker Miskolc" location="Miskolc" zip="3527" />
      <Dealer name="Gyorsjárat Kft." location="Debrecen" zip="4026" />

      <h1>Számláló: {count}</h1>
      <button onClick={handleIncrease}>Növel</button>
      <button onClick={handleDecrease}>Csökkent</button>

    </div>
    
  );
}
export default App;



