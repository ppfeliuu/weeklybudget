import React, { Fragment } from 'react';

const ControlPresupuesto = ({ presupuesto, restante }) => (
    <Fragment>
        <div className="alert alert-primary">
            Budget: € {presupuesto}
        </div>
        <div className="">
            Remaining: € {restante}
        </div>

    </Fragment>
);
 
export default ControlPresupuesto;