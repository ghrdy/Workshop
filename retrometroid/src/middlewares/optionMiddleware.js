import { getPricingConfig, savePricingConfig } from "../services/pricing.js";
import Option from "../models/Option.js";


const handleError = (res, error, message) => {
  console.error(message, error);
  res.status(500).json({ msg: "Erreur interne du serveur" });
};

const createOption = ({ name, price, color, pictureUrl, optionId }) => {
  return new Option({ name, price, color, pictureUrl, optionId });
};

const saveOption = async (option) => {
  await option.save();
  console.log("option saved");
};

const handleOptionsType = (pricingConfigGBA, option) => {
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
    return { status: 400, msg: "L'option existe déjà." };
  }
};

const handleAccessoriesType = (pricingConfigGBA, name, option) => {
  if (!pricingConfigGBA.accessories) {
    pricingConfigGBA.accessories = {};
    console.log("no accessories");
  }
  if (!pricingConfigGBA.accessories[name]) {
    console.log("new accessory");
    pricingConfigGBA.accessories[name] = option; // Ajout direct de l'objet
    console.log(
      "After adding accessory:",
      JSON.stringify(pricingConfigGBA.accessories[name], null, 2)
    );
  } else {
    return { status: 400, msg: "L'accessoire existe déjà." };
  }
};

const handleVariationType = (pricingConfigGBA, newOption) => {
  const { category, variation } = newOption;
  if (pricingConfigGBA.options[category]) {
    if (!pricingConfigGBA.options[category].variations) {
      console.log("no variation");
      pricingConfigGBA.options[category].variations = {};
    }
    pricingConfigGBA.options[category].variations[variation.name] = variation; // Ajout direct de l'objet variation
    console.log(
      "After adding variation:",
      JSON.stringify(
        pricingConfigGBA.options[category].variations[variation.name],
        null,
        2
      )
    );
  } else {
    return { status: 400, msg: "Catégorie d'options non trouvée." };
  }
};

const updatePricingConfig = (
  pricingConfigGBA,
  optionType,
  option,
  newOption
) => {
  let result;
  if (optionType === "options") {
    result = handleOptionsType(pricingConfigGBA, option);
  } else if (optionType === "accessories") {
    result = handleAccessoriesType(pricingConfigGBA, option.name, option);
  } else if (optionType === "variations") {
    result = handleVariationType(pricingConfigGBA, newOption);
  } else {
    return res.status(400).json({ msg: "Type d'option non valide." });
  }

  if (result) {
    return res.status(result.status).json({ msg: result.msg });
  }
};

const savePricingConfigGBA = async (pricingConfigGBA) => {
  await savePricingConfig(pricingConfigGBA);
  console.log("pricing config saved");
};


export const fetchPricingConfig = async (req, res, next) => {
  try {
    const pricingConfigGBA = await getPricingConfig();
    req.pricingConfigGBA = pricingConfigGBA;
    next();
  } catch (error) {

    
    handleError(
      res,
      error,
      "Erreur lors de la récupération de la configuration des prix:"
    );

    
  }
};

export const addOption = async (req, res, next) => {
  const { optionType, newOption } = req.body;


  try {
    const option = createOption(newOption);
    console.log("new option : ", option);
    await saveOption(option);

    const pricingConfigGBA = req.pricingConfigGBA;
    updatePricingConfig(pricingConfigGBA, optionType, option);

    await savePricingConfigGBA(pricingConfigGBA);

    next();
  } catch (error) {
    handleError(res, error, "Erreur lors de l'ajout de l'option:");

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
