import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found !!",
    error: " ",
  });
};

export default notFound;
