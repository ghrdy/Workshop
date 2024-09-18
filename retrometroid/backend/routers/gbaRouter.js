import { Router } from "express";
import Product from "../models/Product.js"; // Import Product model

const router = Router();
// Add a new product
router.post("/addProduct", async (req, res) => {
  try {
    /* console.log('req.body :')
    console.log(req.body); */
    const { productId, name} = req.body;

    const options = {
      consoleToBuy: req.body.customOptions.consoleToBuy,
      case: req.body.customOptions.case,
      backCase: req.body.customOptions.backCase,
      screen: req.body.customOptions.screen,
      buttons: req.body.customOptions.buttons,
      pads: req.body.customOptions.pads,
      gurt: req.body.customOptions.gurt,
      specialCase: req.body.customOptions.specialCase,
      stickers: req.body.customOptions.stickers,
      batteryInstall: req.body.customOptions.batteryInstall,
      ledInstall: req.body.customOptions.ledInstall,
      ledTriggerInstall: req.body.customOptions.ledTriggerInstall,
      dpadInstall: req.body.customOptions.dpadInstall,
      ampAudio: req.body.customOptions.ampAudio,
      accessories: req.body.customOptions.accessories,
    }
    // Create a new Product instance with the request data
    const newProduct = new Product({
      productId,
      name,
      customOptions: options
    });
    newProduct.calculateFinalPrice();

    // Save the product to the database
    await newProduct.save().then(async (savedProduct) => {
      //console.log('saved' + savedProduct);
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to create a new product. Error: " + error.message });
  }
});

// Get the list of all products
router.get("/", async (req, res) => {
  try {
    await Product.find().then((products) => {
      console.log(products);
      res.render("index", { pageTitle: "Products", products: products });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get the product list." });
  }
});

// Get details of a specific product by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await Product.findById(id)
      .then((product) => {
        if (product) {
          console.log(product);
          res.render("index", { pageTitle: "Product Details", product: product });
        } else {
          res.status(404).json({ msg: "Product not found." });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error finding product." });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to get the product details." });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id)
      .then((deletedProduct) => {
        if (deletedProduct) {
          console.log(deletedProduct);
          res.status(200).json({ msg: "Product deleted successfully." });
        } else {
          res.status(404).json({ msg: "Product not found." });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error deleting the product." });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to delete the product." });
  }
});

export default router;