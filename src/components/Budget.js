import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimit = 20000;
    const totalExpenses = expenses.reduce((a,b) => a+b.cost, 0);

    const handleBudgetChange = (event) => {
        const val =  event.target.value
        if(val > upperLimit) {
            alert(`${val} £ is too high. The budget value cannot exceed ${upperLimit} £`);
            return;
        } else if (val < totalExpenses) {
            const minval = val === "" && 0;
            alert(`${minval} £ is too low. The budget value cannot be less than the total expenses (${totalExpenses}) £`);
            return;
        }else {
            setNewBudget(val);
            dispatch({
                type: "SET_BUDGET",
                payload: val
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
