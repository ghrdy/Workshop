import { Router } from "express";
import pkg from "@woocommerce/woocommerce-rest-api";
import dotenv from "dotenv";
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
    // Crée un tableau d'attributs sans inclure les attributs vides ou indéfinis
    const attributes = [
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
        name: "Special Case",
        options: [product.customOptions.specialCase.toString()],
        visible: true,
      },
      {
        name: "LED Install",
        options: [product.customOptions.ledInstall.toString()],
        visible: true,
      },
      {
        name: "LED Trigger Install",
        options: [product.customOptions.ledTriggerInstall.toString()],
        visible: true,
      },
      {
        name: "DPAD Install",
        options: [product.customOptions.dpadInstall.toString()],
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
    ];

    // Filtrer pour ne garder que les attributs non vides
    const filteredAttributes = attributes.filter(
      (attr) =>
        attr.options && attr.options[0] !== "" && attr.options[0] !== "false" // Filtrer les options vides ou "false"
    );

    // Créer le produit simple sur WooCommerce
    const wooProduct = await api.post("products", {
      name: product.name,
      type: "simple", // Produit simple (pas de variations)
      regular_price: product.finalPrice.toString(), // Prix final calculé
      description: "Produit personnalisé créé via API.",
      images: [
        {
          id: 19, // Par exemple, spécifier l'ID de l'image
        },
      ],
      attributes: filteredAttributes, // Utilise les attributs filtrés
    });

    const productId = wooProduct.data.id; // Récupère l'ID du produit créé
    console.log(
      `Produit créé avec succès sur WooCommerce avec l'ID: ${productId}`
    );

    // Générer l'URL pour ajouter au panier
    const addToCartUrl = `https://api-retrometroid.devprod.fr/?add-to-cart=${productId}`;

    return addToCartUrl; // Retourner l'URL pour redirection
  } catch (error) {
    console.error("Erreur lors de l'envoi du produit à WooCommerce:", error);
  }
};

// Utiliser la configuration des prix pour calculer le prix final
router.post("/addProduct", async (req, res) => {
  const { name, customOptions } = req.body;

  try {
    // Vérifier si une configuration pour "GBA" existe déjà
    let pricingConfigGBA = await Pricing.findOne({ refersto: "GBA" });

    if (!pricingConfigGBA) {
      // Si la configuration n'existe pas, la créer et la sauvegarder
      pricingConfigGBA = new Pricing({
        refersto: "GBA",
        options: {
          case: {
            variations: [
              { name: "black", price: 0 },
              { name: "white", price: 0 },
              { name: "rose", price: 0 },
              { name: "turquoise", price: 0 },
              { name: "yellow", price: 0 },
              { name: "ghost", price: 0 },
              { name: "clear-violet", price: 0 },
              { name: "clear-orange", price: 0 },
              { name: "clear-black", price: 0 },
              { name: "clear-blue", price: 0 },
              { name: "clear-glass", price: 0 },
              { name: "clear-green", price: 0 },
              { name: "clear-red", price: 0 },
            ],
          },
          screen: {
            variations: [
              { name: "black", price: 0 },
              { name: "white", price: 0 },
            ],
          },
          buttons: {
            variations: [
              { name: "black", price: 0 },
              { name: "white", price: 0 },
              { name: "sness", price: 0 },
              { name: "blue", price: 0 },
              { name: "orange", price: 0 },
              { name: "yellow", price: 0 },
              { name: "violet", price: 0 },
              { name: "rose", price: 0 },
              { name: "red", price: 0 },
              { name: "lemon", price: 0 },
              { name: "clear-black", price: 0 },
              { name: "clear-blue", price: 0 },
              { name: "clear-glass", price: 0 },
              { name: "clear-green", price: 0 },
              { name: "clear-pink", price: 0 },
            ],
          },
          pads: {
            variations: [
              { name: "black", price: 0 },
              { name: "light-blue", price: 0 },
              { name: "blue", price: 0 },
              { name: "green", price: 0 },
              { name: "orange", price: 0 },
              { name: "red", price: 0 },
              { name: "rose", price: 0 },
              { name: "white", price: 0 },
              { name: "yellow", price: 0 },
            ],
          },
          gurt: {
            variations: [
              { name: "black", price: 0 },
              { name: "rose", price: 0 },
              { name: "white", price: 0 },
              { name: "yellow", price: 0 },
              { name: "violet", price: 0 },
              { name: "orange", price: 0 },
              { name: "red", price: 0 },
              { name: "blue", price: 0 },
              { name: "green", price: 0 },
            ],
          },
          specialCase: {
            variations: [
              { name: "SNESS", price: 16.5 },
              { name: "FAMICOM", price: 16.5 },
            ],
          },
          stickers: {
            variations: [
              { name: "black", price: 0 },
              { name: "white", price: 0 },
              { name: "perso", price: 20 },
            ],
          },
          backCase: {
            variations: [
              { name: "black", price: 11.9 },
              { name: "white", price: 11.9 },
              { name: "rose", price: 11.9 },
              { name: "turquoise", price: 11.9 },
              { name: "yellow", price: 11.9 },
              { name: "ghost", price: 11.9 },
              { name: "clear-violet", price: 11.9 },
              { name: "clear-orange", price: 11.9 },
              { name: "clear-black", price: 11.9 },
              { name: "clear-blue", price: 11.9 },
              { name: "clear-glass", price: 11.9 },
              { name: "clear-green", price: 11.9 },
              { name: "clear-red", price: 11.9 },
            ],
          },
          ledTriggerInstall: {
            default: { name: "red", price: 18 }, // Valeur par défaut
            variations: [
              { name: "red", price: 18 },
              { name: "blue", price: 20 },
              { name: "green", price: 22 },
            ],
          },
        },
        accessories: {
          RetroMetroidBag: { price: 12.9 },
          TemperedGlass: { price: 4.9 },
          SiliconCase: { price: 6.9 },
        },
      });

      await pricingConfigGBA.save();
      console.log("Config de prix GBA enregistrée avec succès");
    } else {
      console.log("Configuration de prix GBA récupérée :");
    }

    // Calculer le prix final à partir des options
    let finalPrice = 149; // Prix de base du produit
    const validAttributes = {};
    const invalidAttributes = [];

    for (const [option, value] of Object.entries(customOptions)) {
      if (pricingConfigGBA.options[option]) {
        const optionConfig = pricingConfigGBA.options[option];

        // Si aucune valeur n'est fournie, utiliser la valeur par défaut
        if (value === undefined || value === "") {
          if (optionConfig.default) {
            value = optionConfig.default.name;
            console.log(
              `Aucune valeur fournie pour ${option}. Utilisation de la valeur par défaut: ${value}`
            );
          } else {
            invalidAttributes.push({
              option,
              value: "Aucune valeur et pas de valeur par défaut",
            });
            continue;
          }
        }

        if (typeof value === "boolean" && value === true) {
          finalPrice += optionConfig.price || 0; // Ajoute le prix si la valeur est "true"
          console.log(
            `Ajout du prix pour la variation ${option}: ${value} - ${optionConfig.price}`,
            finalPrice
          );
        } else if (typeof value === "string") {
          if (Array.isArray(optionConfig.variations)) {
            // Cherche la variation avec le nom correspondant
            const variation = optionConfig.variations.find(
              (v) => v.name === value
            );
            if (variation) {
              finalPrice += variation.price;
              validAttributes[option] = [value];
              console.log(
                `Ajout du prix pour la variation ${option}: ${value} - ${variation.price}`,
                finalPrice
              );
            } else {
              // Marquer comme invalide si la variation n'existe pas
              invalidAttributes.push({ option, value });
            }
          } else if (optionConfig[value]) {
            finalPrice += optionConfig[value].price;
            validAttributes[option] = [value];
            console.log(
              `Ajout du prix pour ${option} avec valeur ${value}:`,
              finalPrice
            );
          } else {
            // Marquer comme invalide si l'option n'existe pas
            invalidAttributes.push({ option, value });
          }
        } else if (Array.isArray(value)) {
          // Gestion des accessoires
          if (option === "accessories") {
            // Filtrer les accessoires vides
            const filteredAccessories = value.filter(
              (accessory) => accessory !== ""
            );
            if (filteredAccessories.length > 0) {
              for (const accessory of filteredAccessories) {
                if (pricingConfigGBA.accessories[accessory]) {
                  finalPrice += pricingConfigGBA.accessories[accessory].price;
                  console.log(
                    "Ajout du prix de l'accessoire:",
                    accessory,
                    finalPrice
                  );
                } else {
                  // Marquer comme invalide si l'accessoire n'existe pas
                  invalidAttributes.push({ accessory });
                }
              }
            }
          } else {
            // Marquer comme invalide si l'option n'est pas reconnue
            invalidAttributes.push({ option, value });
          }
        }
      } else {
        // Marquer comme invalide si l'option n'existe pas
        invalidAttributes.push({ option, value });
      }
    }

    // Si des attributs invalides sont trouvés, renvoyer une erreur HTTP 400 avec les détails
    if (invalidAttributes.length > 0) {
      return res.status(400).json({
        msg: "Certains attributs sont invalides ou n'existent pas.",
        invalidAttributes,
      });
    }

    // Envoi du produit simple à WooCommerce avec les attributs valides uniquement
    const product = { name, customOptions: validAttributes, finalPrice };
    // Ajoute ici la logique pour envoyer le produit à WooCommerce

    res.status(200).json({ product });
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
});

export default router;
