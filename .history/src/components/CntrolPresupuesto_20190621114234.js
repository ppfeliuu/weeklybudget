import React, { Fragment } from 'react';
import { revisaPresupuesto } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => (
    <Fragment>
        <div className="alert alert-primary">
            Budget: € {presupuesto}
        </div>
        <div className={revisaPresupuesto(presupuesto, restante)}>
            Remaining: € {restante}
        </div>

    </Fragment>
);
 
export default ControlPresupuesto;