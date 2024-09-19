import { Schema, model } from "mongoose";

const PricingConfigSchema = new Schema({
  refersto: { type: String, default: "GBA", required: true }, // Par exemple : GBA, GameboyColor, etc.
  options: {
    consoleToBuy: { price: { type: Number, default: 40 } },
    batteryInstall: { price: { type: Number, default: 40 } },
    backCase: { price: { type: Number, default: 11.9 } },
    ledInstall: { price: { type: Number, default: 50 } },
    ampAudio: { price: { type: Number, default: 25 } },
    // Ajouter d'autres options ici
  },
  accessories: {
    RetroMetroidBag: { price: { type: Number, default: 12.9 } },
    TemperedGlass: { price: { type: Number, default: 4.9 } },
    SiliconCase: { price: { type: Number, default: 6.9 } },
    // Ajouter d'autres accessoires ici
  },
  createdAt: { type: Date, default: Date.now },
});

export default model("PricingConfig", PricingConfigSchema);
