import { getPricingConfig, savePricingConfig } from "../services/pricing.js";
import Option from "../models/Option.js";

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

export const addOption = async (req, res, next) => {
  const { optionType, newOption } = req.body;
  const { name, price, color, pictureUrl, optionId } = newOption;

  try {
    const option = new Option({
      name,
      price,
      color,
      pictureUrl,
      optionId,
    });
    console.log("new option : ", option);
    await option.save();
    console.log("option saved");
    const pricingConfigGBA = req.pricingConfigGBA;

    if (optionType === "options") {
      if (!pricingConfigGBA.options) {
        console.log("no options");
        pricingConfigGBA.options = {};
      }
      console.log("avant de creer : ", pricingConfigGBA.options.name);
      if (!pricingConfigGBA.options.name) {
        console.log("new option");
        pricingConfigGBA.options.name = option; // Ajout direct de l'objet
        console.log("apres avoir creer : ", pricingConfigGBA.options.name);
        console.log("apres avoir creer : ", pricingConfigGBA.options);
      } else {
        return res.status(400).json({ msg: "L'option existe déjà." });
      }
    } else if (optionType === "accessories") {
      if (!pricingConfigGBA.accessories) {
        pricingConfigGBA.accessories = {};
        console.log("no accessories");
      }
      if (!pricingConfigGBA.accessories[name]) {
        console.log("new accessory");
        pricingConfigGBA.accessories[name] = option; // Ajout direct de l'objet
      } else {
        return res.status(400).json({ msg: "L'accessoire existe déjà." });
      }
      console.log(
        "After adding accessory:",
        JSON.stringify(pricingConfigGBA.accessories[name], null, 2)
      );
    } else if (optionType === "variations") {
      const { category, variation } = newOption;
      if (pricingConfigGBA.options[category]) {
        if (!pricingConfigGBA.options[category].variations) {
          console.log("no variation");
          pricingConfigGBA.options[category].variations = {};
        }
        pricingConfigGBA.options[category].variations[name] = variation; // Ajout direct de l'objet variation
        console.log(
          "After adding variation:",
          JSON.stringify(
            pricingConfigGBA.options[category].variations[name],
            null,
            2
          )
        );
      } else {
        return res
          .status(400)
          .json({ msg: "Catégorie d'options non trouvée." });
      }
    } else {
      return res.status(400).json({ msg: "Type d'option non valide." });
    }

    await savePricingConfig(pricingConfigGBA);

    req.newOption = option;
    next();
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'option:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
};

export const getOptions = async (req, res, next) => {
  try {
    const options = await Option.find();
    req.options = options;
    next();
  } catch (error) {
    console.error("Erreur lors de la récupération des options:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
};
