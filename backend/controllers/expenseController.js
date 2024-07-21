const Expense = require('../models/Expense');

// Add a new expense
const addExpense = async (req, res) => {
  const { date, amount, category, description } = req.body;

  try {
    const expense = new Expense({ date, amount, category, description });
    await expense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update an expense
const updateExpense = async (req, res) => {
  const { date, amount, category, description } = req.body;

  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    expense.date = date;
    expense.amount = amount;
    expense.category = category;
    expense.description = description;

    await expense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete an expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    await expense.remove();
    res.json({ msg: 'Expense removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense
};
