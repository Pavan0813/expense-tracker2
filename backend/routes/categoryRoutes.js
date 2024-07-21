// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const { addCategory, getCategories } = require('../controllers/categoryController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addCategory);
router.get('/', auth, getCategories);

module.exports = router;
