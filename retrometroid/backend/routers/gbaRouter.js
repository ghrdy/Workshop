import { Router } from "express";
import pkg from '@woocommerce/woocommerce-rest-api';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement
const WooCommerceRestApi = pkg.default;

const api = new WooCommerceRestApi({
  url: "https://api-retrometroid.devprod.fr/",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3"
});

const router = Router();

// Fonction pour envoyer un produit à WooCommerce
const sendProductToWooCommerce = async (product) => {
  try {
    // Créer le produit simple sur WooCommerce
    const wooProduct = await api.post('products', {
      name: product.name,
      type: 'simple', // Produit simple (pas de variations)
      regular_price: product.finalPrice.toString(), // Prix final calculé
      description: 'Produit personnalisé créé via API.',
      images: [
        {
          id:19
          //src: "https://api-retrometroid.devprod.fr/wp-content/uploads/2024/09/product-store-07.jpg", // URL de l'image
        }
      ],
      // Inclure les options sélectionnées comme attributs visibles sur la page produit
      attributes: [
        { name: 'Case', options: [product.customOptions.case], visible: true },
        { name: 'Back Case', options: [product.customOptions.backCase], visible: true },
        { name: 'Screen', options: [product.customOptions.screen], visible: true },
        { name: 'Buttons', options: [product.customOptions.buttons], visible: true },
        { name: 'Pads', options: [product.customOptions.pads], visible: true },
        { name: 'Gurt', options: [product.customOptions.gurt], visible: true },
        { name: 'Stickers', options: [product.customOptions.stickers], visible: true },
        { name: 'Battery Install', options: [product.customOptions.batteryInstall.toString()], visible: true },
        { name: 'LED Install', options: [product.customOptions.ledInstall.toString()], visible: true },
        { name: 'Amp Audio', options: [product.customOptions.ampAudio.toString()], visible: true },
      ]
    });

    const productId = wooProduct.data.id; // Récupère l'ID du produit créé
    console.log(`Produit créé avec succès sur WooCommerce avec l'ID: ${productId}`);

    // Générer l'URL pour ajouter au panier
    const addToCartUrl = `https://api-retrometroid.devprod.fr/?add-to-cart=${productId}`;

    return addToCartUrl; // Retourner l'URL pour redirection
  } catch (error) {
    console.error('Erreur lors de la création du produit sur WooCommerce:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Ajouter un produit et rediriger vers le panier
router.post("/addProduct", async (req, res) => {
  try {
    const { name } = req.body;

    // Extraire les options personnalisées envoyées depuis le front-end
    const options = {
      consoleToBuy: req.body.customOptions.consoleToBuy,
      case: req.body.customOptions.case,
      backCase: req.body.customOptions.backCase,
      screen: req.body.customOptions.screen,
      buttons: req.body.customOptions.buttons,
      pads: req.body.customOptions.pads,
      gurt: req.body.customOptions.gurt,
      specialCase: req.body.customOptions.specialCase,
      stickers: req.body.customOptions.stickers,
      batteryInstall: req.body.customOptions.batteryInstall,
      ledInstall: req.body.customOptions.ledInstall,
      ledTriggerInstall: req.body.customOptions.ledTriggerInstall,
      dpadInstall: req.body.customOptions.dpadInstall,
      ampAudio: req.body.customOptions.ampAudio,
      accessories: req.body.customOptions.accessories,
    };

    // Calculer le prix final à partir des options
    let finalPrice = 149; // Prix de base du produit
    const pricingConfigGBA = {
      options: {
        batteryInstall: { price: 40 },
        ledInstall: { price: 50 },
        ampAudio: { price: 25 },
        // Ajouter les autres options ici...
      },
      accessories: {
        RetroMetroidBag: { price: 12.90 },
        TemperedGlass: { price: 4.90 },
        SiliconCase: { price: 6.90 }
      }
    };

    // Calculer le prix des options
    for (const [option, value] of Object.entries(options)) {
      if (pricingConfigGBA.options[option]) {
        if (typeof value === 'boolean' && value === true) {
          finalPrice += pricingConfigGBA.options[option].price; // Ajoute le prix si true
        } else if (typeof value === 'string' && pricingConfigGBA.options[option][value]) {
          finalPrice += pricingConfigGBA.options[option][value].price; // Ajoute le prix basé sur la valeur de l'option
        }
      }
    }

    // Envoi du produit simple à WooCommerce
    const product = { name, customOptions: options, finalPrice };
    const addToCartUrl = await sendProductToWooCommerce(product);

    // Redirection vers WooCommerce pour ajouter le produit au panier
    res.redirect(addToCartUrl);

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erreur lors de la création du produit. " + error.message });
  }
});

export default router;