import { useState } from 'react';
import './App.css';
import Auto from './Auto';
import Dealer from './Dealer';

function App() {
  const [count, setCount] = useState(1); // Kezdőérték: 1

  const autok = [
    { color: 'piros', type: 'SUV', brand: 'Toyota' },
    { color: 'kék', type: 'sedan', brand: 'BMW' },
    { color: 'fekete', type: 'kupé', brand: 'Audi' }
  ];

  const dealerek = [
    { name: 'Autóker Miskolc', location: 'Miskolc', zip: '3527' },
    { name: 'Gyorsjárat Kft.', location: 'Debrecen', zip: '4026' }
  ];

  const maxCount = Math.max(autok.length, dealerek.length);

  const handleIncrease = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Számláló: {count}</h1>
      <button onClick={handleIncrease}>Növel</button>
      <button onClick={handleDecrease}>Csökkent</button>

      <h2>Autók</h2>
      {autok.slice(0, count).map((auto, index) => (
        <Auto key={index} color={auto.color} type={auto.type} brand={auto.brand} />
      ))}

      <h2>Dealerek</h2>
      {dealerek.slice(0, count).map((dealer, index) => (
        <Dealer key={index} {...dealer} />
      ))}
    </div>
  );
}

export default App;



