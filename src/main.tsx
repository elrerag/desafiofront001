import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function App() {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <h3>Mi Desafío numero 4</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button disabled={inputValue === ""}>Enviar</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
