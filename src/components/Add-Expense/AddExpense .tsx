import React, { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {addExpense} from'../../store/Expense-slice'
import { IExpense } from '../../store/IExpence'

const AddExpense: React.FC=() => {
    
    const dispatch = useAppDispatch()
    const selector = useAppSelector(state =>state.expanses)
    
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [customCategory, setCustomCategory] = useState('')
    const [notes, setNotes] = useState('')

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('add expense')

         console.log({
            id: Math.ceil(Math.random()*1000000).toString(),
            name,
            amount,
            date,
            category,
            customCategory,
            notes,})
 
            dispatch(addExpense({
                id: Math.ceil(Math.random()*1000000).toString(),
            name,
            amount,
            date,
            category,
            customCategory,
            notes,
            }))

           setTimeout(() =>console.log('selector',selector),10000) 
    }
    
    return (
        <form className='col-lg-7 mx-auto mb-5 mt-3 px-5 pt-3 pb-2 border border-light-subtle rounded '
        onSubmit={submitHandler}>
            <h3 className='mt-3'>Add New Expense <span className="text-danger">*</span></h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="name" placeholder="expense name" required 
                 value={name} onChange={(e)=> setName(e.target.value)}
                 />
            </div>

            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="amount" placeholder="expense amount" required
                value={amount} onChange={(e)=> setAmount(e.target.value)} 
                />
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date <span className="text-danger">*</span></label>
                <input type="date" className="form-control" id="date" placeholder="expense date" required 
                value={date} onChange={(e)=> setDate(e.target.value)}
                />
            </div>

            <label htmlFor="form-select" className="form-label">Categories <span className="text-danger">*</span></label>
            <select className="form-select mb-3" aria-label="Default select example" required  value={category} onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue={''} >Open this select menu</option>
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
    )
}

export default AddExpense 
