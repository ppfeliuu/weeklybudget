import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';


function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto ] = useState(true);
  const [ crearGasto, guardarCrearGasto] = useState(false);
  const [ gasto, guardarGasto ] = useState({});
  const [ gastos, guardarGastos ] = useState([]);

  useEffect(() => {
    const listadoGastos = [...gastos, gasto];

    guardarGastos(listadoGastos);
  }, []);

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
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
              </div>
            </div>
          )
        }

        
      </div>
    </div>
  );
}

export default App;
