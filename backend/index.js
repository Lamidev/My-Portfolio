const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Middleware
const allowedOrigins = [
  process.env.VITE_FRONTEND_URL?.replace(/\/$/, ""), // Remove trailing slash if present
  "https://my-portfolio-xfch.onrender.com", // Production Frontend
  "http://localhost:5173",
  "http://localhost:7000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin) || allowedOrigins.includes(origin.replace(/\/$/, ""))) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS. Origin:", origin);
        console.log("Allowed Origins:", allowedOrigins);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
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