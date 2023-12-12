import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addCategoryLimits, addExpense } from '../../store/Expense-slice'

const AddExpense: React.FC = () => {

    const dispatch = useAppDispatch()
    const selector = useAppSelector(state => state.expanses)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [customCategory, setCustomCategory] = useState('')
    const [notes, setNotes] = useState('')
    const [alert, setAlert] = useState(false)
    const [limit, setLimit] = useState(0)
    const [categoryLim, setCategoryLim] = useState('')

    const catLim = +selector.categories.map(ct=> ct.categoryName === category ? ct.limit: '')
    const allExpensesAmount = selector.expenses.map(ex=> ex.amount ).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    let limitation = allExpensesAmount+amount < catLim ? true : false

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(addExpense({
            id: Math.ceil(Math.random() * 1000000).toString(),
            name,
            amount,
            date,
            category,
            customCategory,
            notes,
        }))
        setAlert(true)
        setName('');
        setAmount(0);
        setCategory('');
        setCustomCategory('');
        setNotes('');
        setDate('')

    }

    const saveLimits = () => {
        dispatch(addCategoryLimits({ categoryName: categoryLim, limit: limit }))
        setCategoryLim('')
        setLimit(0)
    }
    return (
        <>
            {alert && <div className="alert alert-success alert-dismissible mx-3" role="alert">
                <div>expense added successfully</div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            {catLim >0 &&!limitation && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Be careful!</strong> You have exceeded the limit for this category.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}

            <form className='col-lg-7 mx-auto mb-5 mt-3 px-5 pt-3 pb-2 border border-light-subtle rounded '
                onSubmit={submitHandler}>

                <h3 className='mt-3'>Add New Expense <span className="text-danger">*</span></h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" placeholder="expense name" required
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount <span className="text-danger">*</span></label>
                    <input type="number" min='0' className="form-control" id="amount" placeholder="expense amount" required
                        value={amount} onChange={(e) => setAmount(+e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="expense date" required
                        value={date} onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <label htmlFor="form-select" className="form-label">Categories <span className="text-danger">*</span></label>
                <select className="form-select mb-3" aria-label="Default select example" required value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value={''} >Open this select menu</option>
                    <option value={"groceries"}>groceries</option>
                    <option value={"transportation"}>transportation</option>
                    <option value={"entertainment"}>entertainment</option>
                    <option value={"other"}>other</option>
                </select>
                {category === 'other' &&
                    <div className="mb-3 mt-3">
                        <label htmlFor="custom" className="form-label">custom category <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="custom" placeholder="add custom category" required value={customCategory} onChange={(e) => setCustomCategory(e.target.value)} />
                    </div>}

                <div className="mb-3">
                    <label htmlFor="additionalNotes" className="form-label">additional notes</label>
                    <textarea className="form-control" id="additionalNotes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} ></textarea>
                </div>

                <button className="btn btn-primary mb-3" type="submit">Submit form</button>

            </form>
            <div className='col-6 mt-3 mb-5 mx-auto'>
                <h4>Add category limits</h4>
                <label htmlFor="form-select" className="form-label">Categories <span className="text-danger">*</span></label>
                <select className="form-select mb-3" aria-label="Default select example" required value={categoryLim} onChange={(e) => setCategoryLim(e.target.value)}>
                    <option value={''} >Open this select menu</option>
                    <option value={"groceries"}>groceries</option>
                    <option value={"transportation"}>transportation</option>
                    <option value={"entertainment"}>entertainment</option>
                </select>

                <div className="mb-3">
                    <label htmlFor="limit" className="form-label">Limit <span className="text-danger">*</span></label>
                    <input type="number" min='0' className="form-control" id="limit" placeholder="expense amount" required
                        value={limit} onChange={(e) => setLimit(+e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-dark mt-4" onClick={saveLimits}>save</button>

            </div>
        </>
    )
}

export default AddExpense 
