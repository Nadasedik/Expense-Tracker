import React from 'react'
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useAppSelector } from '../../hooks/hooks'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const Chart = () => {

    const selector = useAppSelector(state => state.expanses.expenses)
    const income = useAppSelector(state => state.income)

    const expenses = selector.map(expense => expense.amount)
    const totalExpenses = expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);

    const data = {
        labels: [
            'Expenses',
            'Income',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [totalExpenses, +income[0].income - totalExpenses],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
        }]
    };


    return (
        <div className='row text-center mx-auto mt-3 justify-content-between'>
            
            <div className='col-4'>
            {income.map((inc, indx) => 
                <div className="card text-bg-light  mb-3" key={indx}>
                    <div className="card-header">{inc.name}</div>
                    <div className="card-body">
                        <h5 className="card-title">{+inc.income}</h5>
                    </div>
                </div>
            )}
</div>
            <div className='col-6 '>
                <Pie data={data} className='w-75 h-75 mx-auto mt-5' />
            </div>
        </div>
    )
}

export default Chart
