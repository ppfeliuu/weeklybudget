import React, { useState } from 'react';
import Pregunta from './components/Pregunta';


function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  return (
    <div className="App container">
      <header>
        <h1>Weekly Budget</h1>
      </header>

      <div className="contenido-principal contenido">
        <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
        />
      </div>
    </div>
  );
}

export default App;
