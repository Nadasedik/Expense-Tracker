import React from 'react'
import { IExpense } from '../../store/IExpence'
const Expense = (expense: IExpense) => {


  return (
    <div>
      {expense.name}
    </div>
  )
}

export default Expense
