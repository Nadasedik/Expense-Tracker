import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IExpense } from "./IExpence";

const initialState: IExpense[] = []

const ExpenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<IExpense>) => {
            const expense = action.payload
            state.push(expense);
            console.log('state', state);
        }
    }
})


export const expenseReducer = ExpenseSlice.reducer
export const { addExpense } = ExpenseSlice.actions

export default ExpenseSlice;