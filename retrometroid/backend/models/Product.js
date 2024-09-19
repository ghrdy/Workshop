import { Schema, model } from "mongoose";

// Configurations des prix par option

const CustomOptionsSchema = new Schema({
  consoleToBuy: { type: Boolean, default: false, required: true },
  case: { type: String, default: "green", required: true },
  backCase: { type: String, default: "", required: false },
  screen: { type: String, default: "black", required: true },
  buttons: { type: String, default: "black", required: true },
  pads: { type: String, default: "black", required: true },
  gurt: { type: String, default: "black", required: true },
  specialCase: { type: String, default: "", required: false },
  stickers: { type: String, default: "holo-black", required: true },
  batteryInstall: { type: Boolean, default: false, required: true },
  ledInstall: { type: Boolean, default: false, required: true },
  ledTriggerInstall: { type: String, default: "", required: false },
  dpadInstall: { type: Boolean, default: false, required: true },
  ampAudio: { type: Boolean, default: false, required: true },
  accessories: [{ type: String, default: "", required: true }], // Tableau car on peut avoir plusieurs accessoires
});

const ProductSchema = new Schema({
  productId: { type: String, required: true }, // WooCommerce product ID
  name: { type: String, required: true },
  price: { type: Number, default: 149, required: true },
  customOptions: CustomOptionsSchema,
  finalPrice: { type: Number, default: 0 }, // Calculated price after customization
  createdAt: { type: Date, default: Date.now },
});

export default model("Product", ProductSchema);
