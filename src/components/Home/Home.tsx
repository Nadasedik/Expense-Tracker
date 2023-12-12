import React from 'react'
import AddExpense from '../Add-Expense/AddExpense '
import { useAppSelector } from '../../hooks/hooks'
import Expense from '../Expense/Expense'

const Home = () => {
    const selector = useAppSelector(state => state.expanses)
    const income = useAppSelector(state => state.income[0].income)
    let totlExpenses=0;
     selector.expenses.map(expense => totlExpenses += expense.amount)
    return (
        <div className="container mt-5">
            <h2 className='mt-3'>Expense Tracker</h2>
            <h4 className='mt-3'>total Income: {+income}</h4>
            <h4 className='mt-3'>total Expanses: {totlExpenses}</h4>
            <div className='col-6 mx-auto'>
                {selector.expenses.length > 0 ?
                    selector.expenses.map(expense => <Expense key={expense.id} {...expense} />)
                    : <div className="alert alert-primary mt-5 p-5" role="alert">
                        No expenses added yet, add more expenses                        
                    </div>
                }
            </div>
        </div>
    )
}

export default Home
