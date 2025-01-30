import express from "express";
import { productValidations } from "./product.validation";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(productValidations.productValidationSchema),
  ProductController.createProduct
);

router.get(
  "/",
  ProductController.getProducts
);

router.get(
  "/:id",
  ProductController.getSingleProducts
);

export const ProductRoutes = router;
