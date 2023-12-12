import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory, IExpense } from "./IExpence";
export type state ={
    expenses: IExpense[], categories: ICategory[],
}

const initialState:state = { expenses:[], categories: []}

const ExpenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<IExpense>) => {
            const expense = action.payload
            state.expenses.push(expense);
        },
        removeExpense: (state, action: PayloadAction<IExpense['id']>) => {
            const index = state.expenses.findIndex(expense => expense.id === action.payload)
            state.expenses.splice(index, 1);
        },
        addCategoryLimits: (state, action: PayloadAction<ICategory>) => {

            let indx = state.categories.findIndex(category => category.categoryName === action.payload.categoryName)
            if(indx === -1) {
                state.categories.push(action.payload)
            } else{
                state.categories[indx].limit = action.payload.limit
            }

            const cat = state.expenses.map(ex=> ex.category === action.payload.categoryName)

        }
    },
})


export const expenseReducer = ExpenseSlice.reducer
export const { addExpense, removeExpense,addCategoryLimits} = ExpenseSlice.actions

export default ExpenseSlice;