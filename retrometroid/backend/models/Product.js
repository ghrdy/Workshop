import { Schema, model } from 'mongoose';

// Configurations des prix par option
const pricingConfigGBA = {
  options: {
    consoleToBuy: { price: 40 },
    case: { price: 0 },
    backCase: { price: 11.90 },
    screen: { price: 0 },
    buttons: { price: 0 },
    pads: { price: 0 },
    gurt: { price: 0 },
    specialCase: {
      SNESS: { price: 16.5 },
      Famicom: { price: 16.50 }
    },
    stickers: {
      Custom: { price: 20 }
    },
    batteryInstall: { price: 40 },
    ledInstall: { price: 50 },
    ledTriggerInstall: { price: 18 },
    dpadInstallm: { price: 25 },
    ampAudio: { price: 25 }
  },
  accessories: {
    RetroMetroidBag: { price: 12.90 },
    TemperedGlass: { price: 4.90 },
    SiliconCase: { price: 6.90 }
  },
};

const CustomOptionsSchema = new Schema({
  consoleToBuy: { type: Boolean, default: false, required: true },
  case: { type: String, default: 'green', required: true },
  backCase: { type: String, default: '', required: false },
  screen: { type: String, default: 'black', required: true },
  buttons: { type: String, default: 'black', required: true },
  pads: { type: String, default: 'black', required: true },
  gurt: { type: String, default: 'black', required: true },
  specialCase: { type: String, default: '', required: false },
  stickers: { type: String, default: 'holo-black', required: true },
  batteryInstall: { type: Boolean, default: false, required: true },
  ledInstall: { type: Boolean, default: false, required: true, },
  ledTriggerInstall: { type: String, default: '', required: false, },
  dpadInstall: { type: Boolean, default: false, required: true, },
  ampAudio: { type: Boolean, default: false, required: true, },
  accessories: [{ type: String, default: '', required: true}] // Tableau car on peut avoir plusieurs accessoires
});


const ProductSchema = new Schema({
  productId: { type: String, required: true }, // WooCommerce product ID
  name: { type: String, required: true },
  price: { type: Number, default: 149, required: true },
  customOptions: CustomOptionsSchema,
  finalPrice: { type: Number, default:0 }, // Calculated price after customization
  createdAt: { type: Date, default: Date.now },
});


ProductSchema.methods.calculateFinalPrice = function () {
  let finalPrice = this.price; // Base price of the product
  console.log("prix de base",finalPrice)
  // Access only the fields within customOptions, excluding Mongoose's internal properties
  const customOptions = this.customOptions._doc; // This gets the actual custom options fields

  // Iterate through custom options dynamically
  for (const [option, value] of Object.entries(customOptions)) {
    if (pricingConfigGBA.options[option]) {
      // Handle boolean options (e.g., batteryInstall, ledInstall)
      if (typeof value === 'boolean' && value === true) {
        finalPrice += pricingConfigGBA.options[option].price; // Add price if true
        console.log("changement de prix",finalPrice)
      }
      
      // Handle string options like specialCase or stickers
      if (typeof value === 'string' && pricingConfigGBA.options[option][value]) {
        finalPrice += pricingConfigGBA.options[option][value].price; // Add price based on string value
        console.log("changement de prix",finalPrice)
      }
    }
  }

  // Handle accessories (add price for each accessory if it exists in pricingConfigGBA)
  if (customOptions.accessories && customOptions.accessories.length > 0) {
    for (const accessory of customOptions.accessories) {
      if (pricingConfigGBA.accessories[accessory]) {
        finalPrice += pricingConfigGBA.accessories[accessory].price;
        console.log("changement de prix",finalPrice)
      }
    }
  }

  // Update the finalPrice field in the document
  this.finalPrice = finalPrice;
  return finalPrice;
};



export default model('Product', ProductSchema);