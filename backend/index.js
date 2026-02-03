const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.VITE_FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Root route for health check
app.get('/', (req, res) => {
  res.send('Server is Up and Running! 🚀');
});

// Import routes
const contactRoutes = require('./routes/contact');
app.use('/api', contactRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port 😍 ${PORT}`);
});