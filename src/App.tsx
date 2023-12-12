import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddExpense from './components/Add-Expense/AddExpense ';
import Income from './components/Income/Income';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/add-expense' element={<AddExpense />} />
        <Route path='/set-income' element={<Income />} />
        <Route path='/view' element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
