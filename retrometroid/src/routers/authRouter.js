import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import { hashPassword } from "../services/hash.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ msg: "Email ou mot de passe incorrect." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Email ou mot de passe incorrect." });
    }

    const payload = {
      id: admin.id,
      role: "admin",
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur interne du serveur." });
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ msg: "Administrateur créé avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erreur interne du serveur." });
  }
});

export default router;
