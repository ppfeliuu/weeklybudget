import React, { Fragment } from 'react';

const ControlPresupuesto = ({ presupuesto, restante }) => (
    <Fragment>
        <div className="alert alert-primary">
            Budget: € {presupuesto}
        </div>
    </Fragment>
);
 
export default ControlPresupuesto;