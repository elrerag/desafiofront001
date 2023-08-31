import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MiSuperBoton() {
  const [encendido, setEncendido] = useState(true);

  function handleClick() {
    setEncendido(!encendido);
  }

  return (
    <button onClick={handleClick}>
      {encendido ? 'Encendido' : 'Apagado'}
    </button>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MiSuperBoton />
  </React.StrictMode>
);
