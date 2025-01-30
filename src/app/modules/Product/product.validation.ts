import { z } from "zod";

export const productValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    stock: z.string(),
    category: z.string(),
    images: z.string(),
  }),
});

export const productValidations = {
  productValidationSchema,
};
