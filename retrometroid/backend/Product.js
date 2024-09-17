import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  productId: String, // WooCommerce product ID
  name: String,
  price: Number,
  customOptions: {
    consoleToBuy: Boolean,
    Case: String,
    BackCase: String,
    Screen: String,
    Buttons: String,
    Pads: String,
    Gurt: String,
    SpecialCase: String,
    Stickers: String,
    BatteryInstall: Boolean,
    LedInstall: Boolean,
    LedTriggerInstall: Boolean,
    DpadInstall: Boolean,
    AmpAudio: Boolean,
    Accessories : String
  },
  createdAt: { type: Date, default: Date.now },
});

export default model('Product', ProductSchema);
