// components/Dashboard.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import Summary from './Summary';
// Dashboard.js
import './dashboard.css'; // Adjust the path if needed

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('login');

  const renderContent = () => {
    switch (activeTab) {
      
   
      case 'addExpense':
        return <AddExpense />;
      case 'expenses':
        return <ExpenseList />;
      case 'summary':
        return <Summary />;
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      default:
        return <Login />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('login')}>Login</button>
        <button onClick={() => setActiveTab('register')}>Register</button>
        <button onClick={() => setActiveTab('addExpense')}>Add Expense</button>
        <button onClick={() => setActiveTab('expenses')}>Expense List</button>
        <button onClick={() => setActiveTab('summary')}>Summary</button>
      </nav>
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
