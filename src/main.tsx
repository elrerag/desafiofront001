import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setTotal(sum);
  };

  return (
    <div>
      <h2>Sumar dos numeros</h2>
      <input
        placeholder="Primer numero"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        placeholder="Segundo numero"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={handleSum}>Sumar</button>
      <p>Total: {total}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
