import catchAsync from "../utils/catchasync";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is created successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
};
