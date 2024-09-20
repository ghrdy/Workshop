import express from "express";
import { getPricingConfig } from "../services/pricing.js"; // Assurez-vous que ce chemin est correct

const router = express.Router();

// Route pour ajouter des options/accessoires/variations
router.post("/addOptions", async (req, res) => {
  const { optionType, newOption } = req.body; // optionType: 'options', 'accessories', 'variations'

  try {
    const pricingConfigGBA = await getPricingConfig();

    // Ajouter la nouvelle option à la bonne section
    if (optionType === "options") {
      // Ajouter à pricingConfigGBA.options
      pricingConfigGBA.options[newOption.name] = newOption; // Assurez-vous que newOption contient les bonnes propriétés
    } else if (optionType === "accessories") {
      // Ajouter à pricingConfigGBA.accessories
      pricingConfigGBA.accessories[newOption.name] = newOption; // Assurez-vous que newOption contient les bonnes propriétés
    } else if (optionType === "variations") {
      // Ajouter à une section spécifique dans pricingConfigGBA
      const { category, variation } = newOption; // Assurez-vous que newOption contient les bonnes propriétés
      if (pricingConfigGBA.options[category]) {
        pricingConfigGBA.options[category].variations.push(variation);
      } else {
        return res
          .status(400)
          .json({ msg: "Catégorie d'options non trouvée." });
      }
    } else {
      return res.status(400).json({ msg: "Type d'option non valide." });
    }

    // Sauvegarder les modifications
    await pricingConfigGBA.save();
    res
      .status(200)
      .json({ msg: "Options ajoutées avec succès.", pricingConfigGBA });
  } catch (error) {
    console.error("Erreur lors de l'ajout des options:", error);
    res.status(500).json({ msg: "Erreur interne du serveur" });
  }
});

export default router;
