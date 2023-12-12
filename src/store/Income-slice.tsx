import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Income } from "./IExpence";


const initialState: Income[]= [{
    name: "income",
    income:0,
}]

const IncomeSlice = createSlice({
    name: "income",
    initialState,
    reducers:{
        addIncome: (state, action: PayloadAction<Income['income']>) => {
            state[0].income = action.payload
        },
        addAnotherSourceIncome: (state, action: PayloadAction<Income>) => {
            let totalIncome = 0
            state.push(action.payload)

            state.map(item=> totalIncome += +item.income)
            state[0].income = totalIncome;
    }}
})

export const incomeReducer = IncomeSlice.reducer
export const { addIncome, addAnotherSourceIncome} = IncomeSlice.actions
export default IncomeSlice;