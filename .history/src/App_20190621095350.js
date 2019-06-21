import React from 'react';
import Pregunta from './components/Pregunta';


function App() {
  return (
    <div className="App container">
      <header>
        <h1>Weekly Budget</h1>
      </header>

      <div className="contenido-principal contenido">
        <Pregunta />
      </div>
    </div>
  );
}

export default App;
