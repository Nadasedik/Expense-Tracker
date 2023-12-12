import { configureStore } from '@reduxjs/toolkit'
import { expenseReducer } from './Expense-slice';
import { incomeReducer } from './Income-slice';


const store = configureStore({
    reducer: {
      expanses: expenseReducer,
      income: incomeReducer
    },
  })
  export type AppState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch

  export default store