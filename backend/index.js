const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const contactRoutes = require('./routes/contact');
app.use('/api', contactRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port 😍 ${PORT}`);
});