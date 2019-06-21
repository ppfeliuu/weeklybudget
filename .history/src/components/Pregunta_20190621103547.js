import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto } = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        if( cantidad <= 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto( cantidad );
        guardarPreguntaPresupuesto(false);
    }

    return(
        <Fragment>
            <h2>Set your budget</h2>
            {error ? <Error mensaje='Invalid budget...' /> : null}
            <form 
                onSubmit={agregarPresupuesto}
            >
                <input type="number" className="u-full-width"
                placeholder="Add your budget"
                onChange={e => guardarCantidad( parseInt(e.target.value,10))} 
                />

                <input type="submit" className="button-primary u-full-width" value="Set budget" />
            </form>
        </Fragment>
    );
}


export default Pregunta;