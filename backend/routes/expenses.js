const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Summary route
router.get('/summary', async (req, res) => {
  try {
    const total = await Expense.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    const byCategory = await Expense.aggregate([
      { $group: { _id: '$category', amount: { $sum: '$amount' } } }
    ]);

    res.json({ total: total[0]?.total || 0, byCategory });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
