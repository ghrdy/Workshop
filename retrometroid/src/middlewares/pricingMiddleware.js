import { getPricingConfig, calculateFinalPrice } from "../services/pricing.js";

export const fetchPricingConfig = async (req, res, next) => {
  try {
    const pricingConfigGBA = await getPricingConfig();
    req.pricingConfigGBA = pricingConfigGBA;
    next();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la configuration des prix:",
      error
    );
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
};

export const calculatePriceAndAttributes = (req, res, next) => {
  try {
    const { customOptions } = req.body;
    const { finalPrice, validAttributes, invalidAttributes } =
      calculateFinalPrice(customOptions, req.pricingConfigGBA);

    if (invalidAttributes.length > 0) {
      return res.status(400).json({
        msg: "Certains attributs sont invalides ou n'existent pas.",
        invalidAttributes,
      });
    }

    req.productDetails = {
      finalPrice,
      validAttributes,
    };
    next();
  } catch (error) {
    console.error("Erreur lors du calcul du prix:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
};
