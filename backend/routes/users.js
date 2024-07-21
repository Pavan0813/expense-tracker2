const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure User model is imported
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && await user.validatePassword(password)) {
      const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
      res.json({ token: accessToken, user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
