import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (payLoad: TProduct) => {
  const result = await ProductModel.create(payLoad);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
