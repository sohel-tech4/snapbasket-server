
import httpStatus from "http-status";
import { ProductServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

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
