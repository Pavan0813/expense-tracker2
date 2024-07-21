// controllers/categoryController.js
const Category = require('../models/Category');

exports.addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = new Category({ userId: req.user.id, name });
    const category = await newCategory.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.user.id });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
