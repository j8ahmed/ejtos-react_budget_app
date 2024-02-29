import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const currencyOptions = {
    "$": "$ Dollar",
    "£": "£ Pound",
    "€": "€ Euro",
    "₹": "₹ Ruppee",
}

export default function Currency() {
    const {dispatch, currency} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleChange = (event) => {
        //console.log(currency)
        const val = event.target.value
        if(val !== currency){
            setNewCurrency(val);
            dispatch({
                type: "CHG_CURRENCY",
                payload: val
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <label htmlFor="currency-selector">Select a Currency:</label>
            <select id="currency-selector" name="currency" value={currency} onChange={handleChange}
                style={{width: "100%"}}
            >
                <option value={currency}>Currency ({currencyOptions[currency]})</option>
                {
                    Object.keys(currencyOptions).map((key, i) => (
                        <option key={i} value={key}>{currencyOptions[key]}</option>
                    ))
                }
            </select>
        </div>
    );
};
