import { Router } from "express";
import {
  fetchPricingConfig,
  calculatePriceAndAttributes,
} from "../middlewares/pricingMiddleware.js";

import { addProductToWooCommerce } from "../middlewares/wooMiddleware.js";

const router = Router();

// Route pour ajouter un produit
router.post(
  "/addProduct",
  fetchPricingConfig,
  calculatePriceAndAttributes,
  addProductToWooCommerce
);

export default router;
