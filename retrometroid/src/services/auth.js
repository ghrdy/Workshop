import jwt from "jsonwebtoken";

export const generateAdminToken = (admin) => {
  const payload = {
    id: admin.id,
    role: "admin",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};
