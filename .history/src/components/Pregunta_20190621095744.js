import React, { Fragment, useState } from 'react';

function Pregunta() {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    return(
        <Fragment>
            <h2>Set your budget</h2>
            <form>
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