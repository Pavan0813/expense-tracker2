import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import ManageCategories from './components/ManageCategories';
import Summary from './components/Summary';
import Dashboard from './components/Dashboard'; // Make sure this component exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/categories" element={<ManageCategories />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
};

export default App;
