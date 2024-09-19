// backend/server.js
import express, { json } from 'express';
import apiRouter from './routers/index.js';

const app = express();
app.use(json()); // Middleware to parse JSON

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
