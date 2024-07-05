import { z } from "zod";

const createOrderValidationSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }).email({ message: "Invalid email address" }),
        productId: z.string({
            required_error: "ProductId is required",
            invalid_type_error: "ProductId must be a string",
        }),
        price: z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
        quantity: z.number({
            required_error: "Quantity is required",
            invalid_type_error: "Quantity must be a number",
        }),
    })
})

export const orderValidation = {
    createOrderValidationSchema,
}