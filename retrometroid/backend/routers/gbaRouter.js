import { Router } from "express";
import { sendProductToWooCommerce } from "../services/woocomerce.js";
import { getPricingConfig, calculateFinalPrice } from "../services/pricing.js";

const router = Router();

// Utiliser la configuration des prix pour calculer le prix final
router.post("/addProduct", async (req, res) => {
  const { name, customOptions } = req.body;

  try {
    const pricingConfigGBA = await getPricingConfig();
    const { finalPrice, validAttributes, invalidAttributes } =
      calculateFinalPrice(customOptions, pricingConfigGBA);
    const product = { name, customOptions: validAttributes, finalPrice };
    const addToCartUrl = await sendProductToWooCommerce(product);
    res.status(200).json({ product });
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
});

export default router;
