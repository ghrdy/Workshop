// backend/server.js
import express, { json } from "express";
import apiRouter from "./routers/index.js";
import { connect } from "mongoose";
import path from "path";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const spec = require("./swagger-config.yaml");

const ui = SwaggerUI({
  spec,
  dom_id: "#swagger",
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: "implicit",
});
// Connect to MongoDB
connect("mongodb://localhost:27017/Workshop")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(json()); // Middleware to parse JSON

app.get("/", (req, res) => {
  res.send("Welcome to the API. Use /api/products for the product routes.");
});

app.use("/api", apiRouter);

// Error handling middleware for unmatched routes
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
