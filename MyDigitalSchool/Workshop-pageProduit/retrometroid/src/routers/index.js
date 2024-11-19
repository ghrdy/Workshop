import { Router } from "express";
import gbaRouter from "./gbaRouter.js"; // Import the GBA router (for Products)
import optionsRouter from "./optionsRouter.js";
import authRouter from "./authRouter.js";
//import path from "path";
//import swaggerUi from "swagger-ui-express";
//import swaggerDocument from "./swagger.json";
// You can add other routers here, like userRouter, orderRouter, etc.

const router = Router();

// Use your routers here
router.use("/products", gbaRouter); // Routes for products will start with /products
// router.use("/users", userRouter); // For user routes, for example
router.use("/options", optionsRouter);

router.use("/auth", authRouter);

/* router.use(
  "/swagger-ui",
  express.static(path.join(__dirname, "node_modules/swagger-ui/dist"))
);

// Configurer Swagger UI
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); */

export default router;
