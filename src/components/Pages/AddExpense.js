import React, { useContext, useState } from 'react'
import ExpenseContext from '../../Store/ExpenseContext';
import classes from './AddExpense.module.css';


const AddExpense = () => {
  const ExpenseCntx=useContext(ExpenseContext)
const [amount, setAmount]=useState();
const [description, setDescription]=useState();

const amountHandler=(e)=>{
    setAmount(e.target.value)
}

const descriptionHandler=(e)=>{
    setDescription(e.target.value)
}

const submitHandler=(e)=>{
  e.preventDefault();
  const expense={
    enteramount:amount,
    enterdescription:description
  }
  ExpenseCntx.addExpense(expense)
    console.log(amount,description)
}

  return (
    <div className={classes.parent}>
        <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='amount'>Amount</label>
        <input type="number" value={amount} onChange={amountHandler}></input>
        
        <label htmlFor='expense'>Description</label>
        <input type="text" value={description} onChange={descriptionHandler}></input>
        <button type="submit" className="btn btn-primary">Save</button>
        
        </form>
    </div>
  )
}

export default AddExpense;