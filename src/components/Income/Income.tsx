import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { addAnotherSourceIncome, addIncome } from '../../store/Income-slice'

const Income = () => {

    const [income, setIncome] = useState(0)
    const [name, setName] = useState('')
    const [amount2, setAmount2] = useState('')
    const dispatch = useAppDispatch()

    const saveIncome = () => {
        dispatch(addIncome(income))
        setIncome(0)
    }

    const addAnotherSource = () => {
        dispatch(addAnotherSourceIncome({name,income: +amount2}))
        setAmount2('')
        setName('')
    }
    return (
        <div id='income'>
            <h3 className='text-center mt-3'>Set / Add Income</h3>
            <div className="card text-bg-light mb-3 col-5 mx-auto mt-4" >
                <div className="card-header">Set Your Income</div>
                <div className="card-body">
                    <label htmlFor="income" className="form-label">Income <span className="text-danger">*</span></label>
                    <input type="number" min='0' className="form-control" id="income" placeholder="set your income" required
                    value={income} onChange={(e) => setIncome(+e.target.value)}
                    data-testid='income'/>
                    <button type="button" className="btn btn-primary mt-4" onClick={saveIncome}>save</button>
                </div>
            </div>


            <div className="card text-bg-primary mb-3 col-5 mx-auto mt-4" >
                <div className="card-header">Add Another Source Income</div>
                <div className="card-body">
                    <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                    <input type="text" min='0' className="form-control" id="name" placeholder="add another source income" required
                    value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="amount2" className="form-label">Amount <span className="text-danger">*</span></label>
                    <input type="number" min='0' className="form-control" id="amount2" placeholder="set amount" required
                    value={amount2} onChange={(e) => setAmount2(e.target.value)}
                    />
                    <button type="button" className="btn btn-dark mt-4" onClick={addAnotherSource}>add</button>
                </div>
            </div>

        </div>
    )
}

export default Income
