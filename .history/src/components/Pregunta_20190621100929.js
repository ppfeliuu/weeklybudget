import React, { Fragment, useState } from 'react';

function Pregunta(props) {

    const { guardarPresupuesto } = props;

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
    }

    return(
        <Fragment>
            <h2>Set your budget</h2>
            {error ? <p className="alert alert-danger error">Invalid budget...</p>: null}
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