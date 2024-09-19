import { Router } from "express";
import Option from "../models/Option.js"; // Import Option model

const router = Router();
// Add a new option
router.post("/addOption", async (req, res) => {
    try {
        
        // Create a new Option instance with the request data
        const newOption = new Option({
            refersto: req.body.refersto,
            name: req.body.name,
            price: req.body.price,
            color: req.body.color,
            pictureUrl: req.body.pictureUrl,
            createdAt: req.body.createdAt
        });

        // Vérifier si un produit avec les mêmes caractéristiques existe déjà
        const existingOption = await Option.findOne({
            refersto: req.body.refersto,
            name: req.body.name,
            color: req.body.color
        });
  
        // Si un produit existe déjà avec ces caractéristiques, renvoyer un message d'erreur
        if (existingOption) {
            return res.status(409).json({ 
            message: 'Une option avec les mêmes caractéristiques existe déjà.' 
             });
        }

        // Save the product to the database
        await newOption.save().then(async (savedOption) => {
        console.log('saved' + savedOption);
        });

    }   catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unable to create a new Option. Error: " + error.message });
    }
});

router.get('/',async (req, res) => {
    try {
        // Récupérer toutes les options dans la base MongoDB
        const options = await Option.find();

        // Si aucune option trouvée
        if (!options || options.length === 0) {
          return res.status(404).json({ msg: 'Aucune option trouvée.' });
        }
    
        // Retourner les options en format JSON
        res.status(200).json(options);
      } catch (error) {
        console.error('Erreur lors de la récupération des options:', error);
        res.status(500).json({ msg: 'Erreur serveur lors de la récupération des options.' });
      }
  });
export default router;