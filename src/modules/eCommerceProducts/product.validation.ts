import { string, z } from "zod";

const createProductValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        description: z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        price: z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),

        category: z.string({
            required_error: "Category is required",
            invalid_type_error: "Category must be a string",
        }),
        tags: z.array(string({
            required_error: "Tags are required",
            invalid_type_error: "Tags must be strings",
        })),
        variants: z.array(z.object({
            type: z.string({
                required_error: "Type is required",
                invalid_type_error: "Type must be strings",
            }),
            value: z.string({
                required_error: "Value is required",
                invalid_type_error: "Value must be strings",
            })
        })),
        inventory: z.object({
            quantity: z.number({
                required_error: "Quantity is required",
                invalid_type_error: "Quantity must be number",
            }),
            inStock: z.boolean({
                required_error: "InStock is required",
                invalid_type_error: "InStock must be boolean",
            }),

        })

    }),

})
const updateProductValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        })
            .optional(),
        description: z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        })
            .optional(),
        price: z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
            .optional(),

        category: z.string({
            required_error: "Category is required",
            invalid_type_error: "Category must be a string",
        })
            .optional(),
        tags: z.array(string({
            required_error: "Tags are required",
            invalid_type_error: "Tags must be strings",
        })).optional(),
        variants: z.array(z.object({
            type: z.string(),
            value: z.string()
        })).optional(),
        inventory: z.object({
            quantity: z.number({
                required_error: "Quantity is required",
                invalid_type_error: "Quantity must be number",
            }),
            inStock: z.boolean({
                required_error: "InStock is required",
                invalid_type_error: "InStock must be boolean",
            }),

        }).optional()
    }),

})



export const productValidation = {
    createProductValidationSchema,
    updateProductValidationSchema,
}