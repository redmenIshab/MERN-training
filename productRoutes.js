import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  getRecommendations,
  updateProduct,
} from "./controllers/productController.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.post("/", createProduct);
productRoutes.get("/:id/recommendations", getRecommendations);
productRoutes.get("/:id", getProductById);
productRoutes.patch("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
