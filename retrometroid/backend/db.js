// backend/server.js
import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';

config(); // Load environment variables

const app = express();
app.use(json()); // Middleware to parse JSON

// Connect to MongoDB
connect("mongodb://localhost:27017/Workshop")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
