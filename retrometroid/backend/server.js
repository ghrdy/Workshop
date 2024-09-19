// backend/server.js
import express, { json } from 'express';
import { connect } from 'mongoose';
import apiRouter from './routers/index.js';

const app = express();
app.use(json()); // Middleware to parse JSON

// Connect to MongoDB
connect("mongodb://localhost:27017/Workshop")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send("Welcome to the API. Use /api/products for the product routes.");
  });

app.use("/api", apiRouter);

// Error handling middleware for unmatched routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
