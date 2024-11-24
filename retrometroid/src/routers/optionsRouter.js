import express from "express";
import {
  fetchPricingConfig,
  addOption,
  getOptions,
} from "../middlewares/optionMiddleware.js";
import { authenticateAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route pour ajouter une nouvelle option (protégée)
router.post(
  "/addOption",
  authenticateAdmin,
  fetchPricingConfig,
  addOption,
  (req, res) => {
    res
      .status(201)
      .json({ msg: "Option ajoutée avec succès.", newOption: req.newOption });
  }
);

// Route pour récupérer toutes les options (protégée)
router.get("/list", authenticateAdmin, getOptions, (req, res) => {
  res.status(200).json(req.options);
});

export default router;
