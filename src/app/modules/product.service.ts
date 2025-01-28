import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (payLoad: TProduct) => {
  const result = await ProductModel.create(payLoad);
  return result;
};

const getProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id : string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB
};
