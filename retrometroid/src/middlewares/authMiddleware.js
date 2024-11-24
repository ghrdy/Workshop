import jwt from "jsonwebtoken";

export const authenticateAdmin = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ msg: "Accès refusé. Aucun token fourni." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ msg: "Accès refusé. Vous n'êtes pas administrateur." });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token invalide." });
  }
};
