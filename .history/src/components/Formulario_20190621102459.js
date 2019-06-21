import React from 'react';

function Formulario(props) {
    return(
        <form>
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Food, School, Gas, etc..."
                />                    
            </div>

            <div className="campo">
                <label>Expense amount</label>
                <input
                    type="number"
                    className="u-full-width"                    
                />                    
            </div>

            <input type="submit" className="button-primary u-full-width" value="Add expense" />
        </form>
    );
}

export default Formulario;