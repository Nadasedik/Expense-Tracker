import { configureStore } from '@reduxjs/toolkit'
import { expenseReducer } from './Expense-slice';


const store = configureStore({
    reducer: {
      expanses: expenseReducer,
    },
  })
  export type AppState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch

  export default store