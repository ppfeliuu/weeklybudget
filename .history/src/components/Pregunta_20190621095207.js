import React, { Fragment } from 'react';

function Pregunta() {

    return(
        <Fragment>
            <h2>Set your budget</h2>
            <form>
                <input type="number" className="u-full-width"
                placeholder="Add your budget"
                //onChange={} 
                />

                <input type="submit" className="button-primary u-full-width" value="Set budget" />
            </form>
        </Fragment>
    );
}
