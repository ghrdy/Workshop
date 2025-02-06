// pricing.js
import Pricing from "../models/Pricing.js";

const getPricingConfig = async () => {
  let pricingConfigGBA = await Pricing.findOne({ refersto: "GBA" }).populate(
    "options.case options.screen options.buttons options.pads options.gurt options.specialCase options.stickers options.backCase options.ledTriggerInstall accessories"
  );

  if (!pricingConfigGBA) {
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

  return pricingConfigGBA;
};

const calculateFinalPrice = (customOptions, pricingConfig) => {
  let finalPrice = 149; // Prix de base du produit
  const validAttributes = {};
  const invalidAttributes = [];


  for (const [option, value] of Object.entries(customOptions)) {

    if (pricingConfig.options[option]) {
      const optionConfig = pricingConfig.options[option];

      if (value === undefined || value === "") {
        if (optionConfig.default) {
          value = optionConfig.default.name;
          finalPrice += optionConfig.default.price || 0;
          console.log("pas de valeur: prix par défaut", accessory, finalPrice);
          validAttributes[option] = [value];
        } else {
          continue;
        }
      }

      if (typeof value === "boolean" && value === true) {
        finalPrice += optionConfig.price || 0;
        console.log("option ajoutée:", option, finalPrice);
      } else if (typeof value === "string") {
        if (Array.isArray(optionConfig.variations)) {
          const variation = optionConfig.variations.find(
            (v) => v.name === value
          );
          if (variation) {
            finalPrice += variation.price;
            console.log(
              "variation ajoutée:",
              option,
              variation.name,
              finalPrice
            );
            validAttributes[option] = [value];
          } else {
            invalidAttributes.push({ option, value });
          }
        } else if (optionConfig[value]) {
          finalPrice += optionConfig[value].price;
          validAttributes[option] = [value];
        } else {
          invalidAttributes.push({ option, value });
        }
      }
    } else if (option === "accessories" && Array.isArray(value)) {
      const filteredAccessories = value.filter((accessory) => accessory !== "");

      if (filteredAccessories.length > 0) {
        for (const accessory of filteredAccessories) {
          if (pricingConfig.accessories[accessory]) {
            finalPrice += pricingConfig.accessories[accessory].price;
            console.log("accessoire ajouté:", value, finalPrice);
            if (!validAttributes[option]) {
              validAttributes[option] = [];
            }
            validAttributes[option].push(accessory);
          } else {
            invalidAttributes.push({
              option: "accessories",
              value: accessory,
            });
          }
        }
      } else {
        console.log("Aucun accessoire fourni, prix inchangé.");
        validAttributes[option] = [];
      }
    } else {
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
  return { finalPrice, validAttributes, invalidAttributes };
};

const savePricingConfig = async (pricingConfig) => {
  console.log("Enregistrement de la configuration de prix...");
  return await pricingConfig.save();
};
export { getPricingConfig, calculateFinalPrice, savePricingConfig };
