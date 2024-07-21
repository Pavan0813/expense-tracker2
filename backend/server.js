const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users'); // Import the user routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Parse JSON bodies

app.use('/api/users', userRoutes); // Use user routes

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
