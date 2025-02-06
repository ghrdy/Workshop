// woocommerce.js
import pkg from "@woocommerce/woocommerce-rest-api";
import dotenv from "dotenv";

dotenv.config();

const WooCommerceRestApi = pkg.default;

const api = new WooCommerceRestApi({
  url: "https://api-retrometroid.devprod.fr/",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

const sendProductToWooCommerce = async (product) => {
  try {
    // Crée un tableau d'attributs sans inclure les attributs vides ou indéfinis
    const attributes = [
      { name: "Case", options: product.customOptions.case, visible: true },
      {
        name: "Back Case",
        options: product.customOptions.backCase,
        visible: true,
      },
      { name: "Screen", options: product.customOptions.screen, visible: true },
      {
        name: "Buttons",
        options: product.customOptions.buttons,
        visible: true,
      },
      { name: "Pads", options: product.customOptions.pads, visible: true },
      { name: "Gurt", options: product.customOptions.gurt, visible: true },
      {
        name: "Stickers",
        options: product.customOptions.stickers,
        visible: true,
      },
      {
        name: "Battery Install",
        options: product.customOptions.batteryInstall
          ? [product.customOptions.batteryInstall.toString()]
          : [],
        visible: true,
      },
      {
        name: "Special Case",
        options: product.customOptions.specialCase
          ? [product.customOptions.specialCase.toString()]
          : [],
        visible: true,
      },
      {
        name: "LED Install",
        options: product.customOptions.ledInstall
          ? [product.customOptions.ledInstall.toString()]
          : [],
        visible: true,
      },
      {
        name: "LED Trigger Install",
        options: product.customOptions.ledTriggerInstall
          ? [product.customOptions.ledTriggerInstall.toString()]
          : [],
        visible: true,
      },
      {
        name: "DPAD Install",
        options: product.customOptions.dpadInstall
          ? [product.customOptions.dpadInstall.toString()]
          : [],
        visible: true,
      },
      {
        name: "Amp Audio",
        options: product.customOptions.ampAudio
          ? [product.customOptions.ampAudio.toString()]
          : [],
        visible: true,
      },
      {
        name: "Accessories",
        options: Array.isArray(product.customOptions.accessories)
          ? product.customOptions.accessories
              .filter((item) => item !== "")
              .map((item) => item.toString())
          : [],
        visible: true,
      },
    ];

    // Filtrer pour ne garder que les attributs non vides ou non indéfinis
    const filteredAttributes = attributes.filter(
      (attr) =>
        attr.options && attr.options.length > 0 && attr.options[0] !== "false"
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
    throw error;
  }
};

export { api, sendProductToWooCommerce };
