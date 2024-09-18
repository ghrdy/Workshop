import { Router } from "express";
import gbaRouter from "./gbaRouter.js"; // Import the GBA router (for Products)
// You can add other routers here, like userRouter, orderRouter, etc.

const router = Router();

// Use your routers here
router.use("/products", gbaRouter); // Routes for products will start with /products
// router.use("/users", userRouter); // For user routes, for example

export default router;