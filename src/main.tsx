import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar el div de abajo' : 'Mostrar el div de abajo'}
      </button>

      {isVisible && <div>Bienvenido al desafío</div>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
