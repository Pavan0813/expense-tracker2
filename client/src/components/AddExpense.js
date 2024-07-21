// src/components/AddExpense.js
import React, { useState } from 'react';
import api from '../api';

const AddExpense = () => {
  const [expenseData, setExpenseData] = useState({ date: '', amount: '', category: '', description: '' });

  const handleChange = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/expenses', expenseData);
      // handle success (e.g., redirect to expenses list or show a message)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" type="date" onChange={handleChange} />
      <input name="amount" type="number" onChange={handleChange} placeholder="amoount" />
      <input name="category" onChange={handleChange} placeholder="category"/>
      <input name="description" onChange={handleChange} placeholder="description"/>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
