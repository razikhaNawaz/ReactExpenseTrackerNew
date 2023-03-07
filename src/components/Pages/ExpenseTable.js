import React, { Fragment, useContext } from 'react'
import ExpenseContext from '../../Store/ExpenseContext'

const ExpenseTable = () => {
    const expensecntx=useContext(ExpenseContext)
  return (
    <Fragment>

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Expense</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {expensecntx.expenses.map((expense,index)=>{
        return (
            <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{expense.enteramount}</td>
      <td>{expense.enterdescription}</td>

      <td>
      <button type="button" className="btn btn-primary">Edit</button>
      </td>

      <td><button type="button" className="btn btn-danger">Delete</button>
      </td>
    </tr>
        )
    })}
    
    
      
  </tbody>
</table>

    </Fragment>
  )
}

export default ExpenseTable