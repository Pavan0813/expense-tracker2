// src/components/ExpenseList.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await api.get('/expenses');
        setExpenses(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense._id}>
          {expense.date} - {expense.amount} - {expense.category} - {expense.description}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
