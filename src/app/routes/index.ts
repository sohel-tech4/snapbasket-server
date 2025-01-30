import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";
// import { UserRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/user",
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
