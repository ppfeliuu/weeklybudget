import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';


function Formulario(props) {

    const { guardarGasto } = props;

    const [ nombreGasto, guardarNombreGasto] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        //Validad
        if(cantidadGasto < 1 || isNaN( cantidadGasto ) || nombreGasto === '') {
            guardarError(true);
            return;
        }


        

        // construir object Gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id:  shortid.generate()
        }
        // Pasar gasto al compo principal
        
        guardarGasto(gasto);

        guardarError(false);

        guardarNombreGasto('');
        guardarCantidadGasto('');
    }
    
    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Add your expenses here</h2>

            {error ? <Error mensaje='All fields are requied or Invalid budget...' /> : null}

            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Food, School, Gas, etc..."
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />                    
            </div>

            <div className="campo">
                <label>Expense amount</label>
                <input
                    type="number"
                    className="u-full-width"    
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}                                    
                    value={cantidadGasto}
                />                    
            </div>

            <input type="submit" className="button-primary u-full-width" value="Add expense" />
        </form>
    );
}

export default Formulario;