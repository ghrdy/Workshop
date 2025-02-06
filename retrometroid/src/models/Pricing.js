import { Schema, model } from "mongoose";

const VariationSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const OptionSchema = new Schema({
  variations: [VariationSchema], // Utilisation du sous-schéma pour les variations
  price: { type: Number, default: 0 }, // Prix de base si aucune variation n'est choisie
});

const PricingConfigSchema = new Schema({
  refersto: { type: String, default: "GBA", required: true },
  options: {
    case: OptionSchema,
    screen: OptionSchema,
    buttons: OptionSchema,
    pads: OptionSchema,
    gurt: OptionSchema,
    specialCase: OptionSchema,
    stickers: OptionSchema,
    consoleToBuy: { price: { type: Number, default: 40 } },
    batteryInstall: { price: { type: Number, default: 40 } },
    backCase: OptionSchema, // Utilisation du schéma Option
    ledInstall: { price: { type: Number, default: 50 } },
    ledTriggerInstall: OptionSchema, // Utilisation du schéma Option
    ampAudio: { price: { type: Number, default: 25 } },
    dpadInstall: { price: { type: Number, default: 25 } },

    stickers: { perso: { price: { type: Number, default: 12.9 } } },

  },
  accessories: {
    RetroMetroidBag: { price: { type: Number, default: 12.9 } },
    TemperedGlass: { price: { type: Number, default: 4.9 } },
    SiliconCase: { price: { type: Number, default: 6.9 } },
  },
  createdAt: { type: Date, default: Date.now },
});

export default model("PricingConfig", PricingConfigSchema);
