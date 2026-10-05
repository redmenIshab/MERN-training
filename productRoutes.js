import { Router } from "express";
const productRoutes = Router();

productRoutes.get("/", (req, res, next) => {
  return res.send("Products page from Express server");
});

productRoutes.get("/:id", (req, res, next) => {
  const productId = req.params.id;
   return res
    .status(200)
    .send(`Product details for product ID: ${productId}`);
});

productRoutes.get("/recommmendations", (req, res, next) => {
  return res.send("Product recommendations from Express server");
});

productRoutes.get("/:id/recommendations", (req, res, next) => {
  const productId = req.params.id;
  
  return res.send(`Product recommendations for product ID: ${productId}`);
});

export default productRoutes;
