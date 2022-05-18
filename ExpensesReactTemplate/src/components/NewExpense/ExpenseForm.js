import React, { useState } from "react";


import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEntereTitle] = useState('');
    const [enteredAmount, setEntereAmount] = useState('');
    const [enteredDate, setEntereDate] = useState('');

    const titleChangeHandler = (event) => {
        setEntereTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEntereAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEntereDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEntereAmount('');
        setEntereDate('');
        setEntereTitle('');
    };


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls"> 
            <div className="new-expense__control">
                <label> Title </label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>  
            </div>    
            </div>
            <div className="new-expense__controls"> 
            <div className="new-expense__control">
                <label> Amount </label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler}
                min='0.01' step='0.01'/> 
            </div>   
            </div>
            <div className="new-expense__controls"> 
            <div className="new-expense__control">
                <label> Date </label>
                <input type="date" value={ enteredDate } onChange={dateChangeHandler}
                 min='2019-01-01' max='2022-12-31'/>  
            </div>
            </div>
            <div className="new-expense__control"> 
            <div className="new-expense__control">
                <button className="new-expense__actions">Add Expense</button>
            </div>
            </div>

        </form>
    );

};

export default ExpenseForm;