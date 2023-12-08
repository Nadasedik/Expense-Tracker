import React from 'react'
import AddExpense from '../Add-Expense/AddExpense '
import { useAppSelector } from '../../hooks/hooks'
import Expense from '../Expense/Expense'

const Home = () => {
    const selector = useAppSelector(state => state.expanses)

    return (
        <div className="container mt-5">
            <h2 className='mt-3'>Expense Tracker</h2>
            <AddExpense />
            {
                selector.map(expense => <Expense key={expense.id} {...expense} />)
            }
        </div>
    )
}

export default Home
