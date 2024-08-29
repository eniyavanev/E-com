import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";

const router = express.Router();

// Route to get all products
router.get("/products", getProducts);
//router.route("/").get(getProducts);

// Route to get a specific product by ID
router.get("/products/:id", getProductById);

export default router;
