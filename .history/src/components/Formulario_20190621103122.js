import React, { useState } from 'react';

function Formulario(props) {

    const [ nombreGasto, guardarNombreGasto] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        //Validad
        if(cantidadGasto < 1 || isNaN( cantidadGasto )) {
            guardarError(true);
            return;
        }


        // Pasar gasto al compo principal

    }
    
    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Food, School, Gas, etc..."
                    onChange={e => guardarNombreGasto(e.target.value)}
                />                    
            </div>

            <div className="campo">
                <label>Expense amount</label>
                <input
                    type="number"
                    className="u-full-width"    
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}                                    
                />                    
            </div>

            <input type="submit" className="button-primary u-full-width" value="Add expense" />
        </form>
    );
}

export default Formulario;