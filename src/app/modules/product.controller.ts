import catchAsync from "../utils/catchasync";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products is created successfully",
    data: result,
  });
});

const getProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getProductFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products are retrived successfully",
    data: result,
  });
});

const getSingleProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProductFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is retrived successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProducts
};
