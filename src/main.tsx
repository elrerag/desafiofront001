import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MiContador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div id="contenedorPrincipal">
      <p>Contador de boton: <span>{contador}</span></p>
      <button id="botonPrincipal" onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MiContador />
  </React.StrictMode>
);
