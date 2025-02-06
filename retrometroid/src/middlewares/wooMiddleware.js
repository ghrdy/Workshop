import { sendProductToWooCommerce } from "../services/woocomerce.js";
export const addProductToWooCommerce = async (req, res) => {
  try {
    const { name } = req.body;
    const { finalPrice, validAttributes } = req.productDetails;
    const product = { name, customOptions: validAttributes, finalPrice };

    const addToCartUrl = await sendProductToWooCommerce(product);
    res.status(200).json({ product, addToCartUrl });
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
};
