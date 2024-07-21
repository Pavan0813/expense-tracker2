// models/Category.js
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
});

module.exports = mongoose.model('Category', CategorySchema);
