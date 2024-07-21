// const mongoose = require('mongoose');

// const expenseSchema = new mongoose.Schema({
//   date: { type: Date, required: true },
//   amount: { type: Number, required: true },
//   category: { type: String, required: true },
//   description: { type: String }
// });

// const Expense = mongoose.model('Expense', expenseSchema);
// module.exports = Expense;

const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
