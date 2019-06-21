import React from 'react';

function Formulario(props) {
    return(
        <form>
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expense name</label>
            </div>
        </form>
    );
}

export default Formulario;