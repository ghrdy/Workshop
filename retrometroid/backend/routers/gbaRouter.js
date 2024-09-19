import { Router } from "express";
import pkg from "@woocommerce/woocommerce-rest-api";
import dotenv from "dotenv";
import PricingConfig from "../models/Pricing.js"; // Assure-toi d'importer ton modèle
import Pricing from "../models/Pricing.js";

dotenv.config(); // Charger les variables d'environnement
const WooCommerceRestApi = pkg.default;

const api = new WooCommerceRestApi({
  url: "https://api-retrometroid.devprod.fr/",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

const router = Router();

const sendProductToWooCommerce = async (product) => {
  try {
    // Créer le produit simple sur WooCommerce
    const wooProduct = await api.post("products", {
      name: product.name,
      type: "simple", // Produit simple (pas de variations)
      regular_price: product.finalPrice.toString(), // Prix final calculé
      description: "Produit personnalisé créé via API.",
      images: [
        {
          id: 19,
          //src: "https://api-retrometroid.devprod.fr/wp-content/uploads/2024/09/product-store-07.jpg", // URL de l'image
        },
      ],
      // Inclure les options sélectionnées comme attributs visibles sur la page produit
      attributes: [
        { name: "Case", options: [product.customOptions.case], visible: true },
        {
          name: "Back Case",
          options: [product.customOptions.backCase],
          visible: true,
        },
        {
          name: "Screen",
          options: [product.customOptions.screen],
          visible: true,
        },
        {
          name: "Buttons",
          options: [product.customOptions.buttons],
          visible: true,
        },
        { name: "Pads", options: [product.customOptions.pads], visible: true },
        { name: "Gurt", options: [product.customOptions.gurt], visible: true },
        {
          name: "Stickers",
          options: [product.customOptions.stickers],
          visible: true,
        },
        {
          name: "Battery Install",
          options: [product.customOptions.batteryInstall.toString()],
          visible: true,
        },
        {
          name: "LED Install",
          options: [product.customOptions.ledInstall.toString()],
          visible: true,
        },
        {
          name: "Amp Audio",
          options: [product.customOptions.ampAudio.toString()],
          visible: true,
        },
        {
          name: "Accessories",
          options: [product.customOptions.accessories.toString()],
          visible: true,
        },
      ],
    });

    const productId = wooProduct.data.id; // Récupère l'ID du produit créé
    console.log(
      `Produit créé avec succès sur WooCommerce avec l'ID: ${productId}`
    );

    // Générer l'URL pour ajouter au panier
    const addToCartUrl = `https://api-retrometroid.devprod.fr/?add-to-cart=${productId}`;

    return addToCartUrl; // Retourner l'URL pour redirection
  } catch (error) {
    console.error(
      "Erreur lors de la création du produit sur WooCommerce:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Utiliser la configuration des prix pour calculer le prix final
router.post("/addProduct", async (req, res) => {
  try {
    const { name, customOptions } = req.body;

    const pricingConfigGBA = new Pricing();

    // Calculer le prix final à partir des options
    let finalPrice = 149; // Prix de base du produit

    // Calculer le prix des options
    for (const [option, value] of Object.entries(customOptions)) {
      if (pricingConfigGBA.options[option]) {
        if (typeof value === "boolean" && value === true) {
          finalPrice += pricingConfigGBA.options[option].price; // Ajoute le prix si true
        } else if (
          typeof value === "string" &&
          pricingConfigGBA.options[option][value]
        ) {
          finalPrice += pricingConfigGBA.options[option][value].price; // Ajoute le prix basé sur la valeur de l'option
        }
      }
    }

    // Gérer les accessoires (ajouter le prix pour chaque accessoire s'il existe dans pricingConfigGBA)
    if (customOptions.accessories && customOptions.accessories.length > 0) {
      for (const accessory of customOptions.accessories) {
        if (pricingConfigGBA.accessories[accessory]) {
          finalPrice += pricingConfigGBA.accessories[accessory].price;
          console.log("Ajout du prix de l'accessoire:", accessory, finalPrice);
        }
      }
    }

    // Envoi du produit simple à WooCommerce
    const product = { name, customOptions, finalPrice };
    const addToCartUrl = await sendProductToWooCommerce(product);

    // Redirection vers WooCommerce pour ajouter le produit au panier
    res.redirect(addToCartUrl);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Erreur lors de la création du produit. " + error.message });
  }
});

export default router;
