import express, { json } from 'express';
import cors from 'cors';
const mongoose = require('mongoose')
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

const api = new WooCommerceRestApi({
  url: "?",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "?"
});

app.use('/api/products', require('./routes/product')(api));

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});