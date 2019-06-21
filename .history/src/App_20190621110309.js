import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto ] = useState(true);
  const [ gasto, guardarGasto ] = useState({});
  const [ gastos, guardarGastos ] ? useState([]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Budget</h1>
      </header>

      <div className="contenido-principal contenido">
        { (preguntaPresupuesto)
          ?
          <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
          />
        : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto={guardarGasto}
                />
              </div>

              <div className="one-half column">
                <p>Budget here</p>
              </div>
            </div>
          )
        }

        
      </div>
    </div>
  );
}

export default App;
