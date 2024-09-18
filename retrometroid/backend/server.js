// backend/server.js
import express, { json } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import apiRouter from './routers/index.js';
import pkg from '@woocommerce/woocommerce-rest-api';
const WooCommerceRestApi = pkg.default; 


dotenv.config(); // Load environment variables

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

const api = new WooCommerceRestApi({
  url: "https://api-retrometroid.devprod.fr/wp-json/wc/v3/",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3"
});

api.get('products')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Error handling middleware for unmatched routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
