import React from 'react'
import { IExpense } from '../../store/IExpence'
import { useAppDispatch } from '../../hooks/hooks'
import { removeExpense } from '../../store/Expense-slice'

const Expense = (expense: IExpense) => {

  const dispatch = useAppDispatch()

  return (
    <div className="card mb-3 mt-3">
      <h5 className="card-header">Expense Name: {expense.name}</h5>
      <div className="card-body">
        <h5 className="card-title">{expense.category === 'other' ? expense.customCategory : expense.category}</h5>
        <p className="card-text">{expense.amount}</p>
        <p className="card-text">{expense.date}</p>
        {expense.notes && <><h5>additional notes:</h5>
          <p className="card-text">{expense.notes}</p></>}
          <button type="button" className="btn btn-danger float-right" onClick={()=>dispatch(removeExpense(expense.id))}>remove</button>

      </div>
    </div>
  )
}

export default Expense
