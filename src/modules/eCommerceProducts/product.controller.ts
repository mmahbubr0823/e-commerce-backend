import { Request, Response } from "express";
import { productServices } from "./product.service";
import sendResponse from "../../app/utils/sendResponse";
import catchAsync from "../../app/utils/catchAsync";
import notFoundResponse from "../../app/utils/notFoundResponse";


// create product 
const createProduct = catchAsync(
    async (req: Request, res: Response) => {
        const result = await productServices.createProduct(req.body);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Product is created successfully',
            data: result
        })
    }
)

// get a single products 
const getSingleProduct = catchAsync(
    async (req: Request, res: Response) => {
        const { productId } = req.params;
        const result = await productServices.getSingleProduct(productId);
        // in case product not exist 

        if (!result) {
            return notFoundResponse(res)
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Product is retrieved successfully',
            data: result
        })
    }
)

// update product 
const updateProduct = catchAsync(
    async (req: Request, res: Response) => {
        const { productId } = req.params;

        const result = await productServices.updateProduct(productId, req.body);
        if (!result) {
            return notFoundResponse(res)
        }

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Product is updated successfully',
            data: result
        })
    }
)

// delete product 
const deleteProduct = catchAsync(
    async (req: Request, res: Response) => {
        const { productId } = req.params;
        const result = await productServices.deleteProduct(productId);
        if (!result) {
            return notFoundResponse(res)
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Product is deleted successfully',
            data: null
        })
    }
)
// get products 
const getProducts = catchAsync(
    async (req: Request, res: Response) => {
        const { searchTerm } = req.query;

        // get all products 
        if (!searchTerm) {
            const result = await productServices.getProducts(searchTerm);
            return sendResponse(res, {
                statusCode: 200,
                success: true,
                message: 'Products are retrieved successfully',
                data: result
            })
        }
        // get products by query 
        const result = await productServices.getProducts(searchTerm);

        // message if search item not found 
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Your search item does not match any products."
            });
        }

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: `Products matching search term ${searchTerm} fetched successfully!`,
            data: result
        })
    }
)

export const productController = {
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProducts
}