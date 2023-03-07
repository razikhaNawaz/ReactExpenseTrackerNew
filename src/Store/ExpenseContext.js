import React, { useState } from 'react';

const ExpenseContext=React.createContext();
let user=localStorage.getItem('email').replace(/[@.]/g,'');
let url='https://react-expense-a0c95-default-rtdb.firebaseio.com';
 

export const ExpenseProvider=(props)=>{
    const [expense, setExpense]=useState([])

    const postExpense=async(userdata)=>{
        try{
            const response=await fetch(`${url}/${user}.json`, {
                method:'POST',
                body:JSON.stringify(userdata),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data=await response.json()
            console.log(data)
    
        }

        catch(err){
            console.log(err);
        }
    }

    const getData=async()=>{
        try{
            const response=await fetch(`${url}/${user}.json`);
            const data= await response.json();
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }

    



    const addExpenseHandler=(newExpenses)=>{
        setExpense([...expense, newExpenses])
        console.log(newExpenses)
        console.log(expense)
        postExpense(newExpenses);
        getData()
    }

    const values={
        expenses: expense,
        addExpense: addExpenseHandler,
    }

    return (
        <ExpenseContext.Provider value={values}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
export default ExpenseContext;