import { Schema, model } from "mongoose";

// Configurations des prix par option

const CustomOptionsSchema = new Schema({
  consoleToBuy: { type: Boolean, default: false, required: true },
  case: { type: Schema.Types.ObjectId, ref: "Option", required: true },
  backCase: { type: Schema.Types.ObjectId, ref: "Option", required: false },
  screen: { type: Schema.Types.ObjectId, ref: "Option", required: true },
  buttons: { type: Schema.Types.ObjectId, ref: "Option", required: true },
  pads: { type: Schema.Types.ObjectId, ref: "Option", required: true },
  gurt: { type: Schema.Types.ObjectId, ref: "Option", required: true },
  specialCase: { type: Schema.Types.ObjectId, ref: "Option", required: false },
  stickers: { type: Schema.Types.ObjectId, ref: "Option", required: true },
  batteryInstall: { type: Boolean, default: false, required: true },
  ledInstall: { type: Boolean, default: false, required: true },
  ledTriggerInstall: {
    type: Schema.Types.ObjectId,
    ref: "Option",
    required: false,
  },
  dpadInstall: { type: Boolean, default: false, required: true },
  ampAudio: { type: Boolean, default: false, required: true },
  accessories: [{ type: Schema.Types.ObjectId, ref: "Option", required: true }],
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
