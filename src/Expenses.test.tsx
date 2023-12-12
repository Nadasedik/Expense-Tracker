import { fireEvent, render, screen } from "@testing-library/react";
import Income from "./components/Income/Income";
import { addExpense, expenseReducer } from "./store/Expense-slice";

import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "./store/store";

test('expenses slice', ()=> {


  const initialState= {expenses:[], categories: []}
  const expense = {name:'test',amount:300,category:'entertainment',date:new Date().toDateString(),id:'123'}
  const action = addExpense(expense)
  const state = expenseReducer(initialState, action)

  expect(state.expenses.length).toEqual(1)
  expect(state.expenses).toEqual([expense, ...initialState.expenses])

})


test('add income', async() => {
 
  render(<Provider store={store}><Income /></Provider>)

  await act(async () => {
  const incomeInput = screen.getByTestId('income')
  const saveButton = screen.getByText("save");

  userEvent.type(incomeInput, '8000');
  fireEvent.click(saveButton);
  })

  expect(
    screen.getAllByRole("button")
  ).toHaveLength(3);
})