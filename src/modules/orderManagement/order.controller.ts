import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { orderServices } from "./order.service";
import sendResponse from "../../app/utils/sendResponse";

// create order 
const createOrder = catchAsync(
    async (req: Request, res: Response) => {
        const result = await orderServices.createOrder(req.body);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Order created successfully!',
            data: result
        })
    }
)

// get orders
const getOrders = catchAsync(
    async (req: Request, res: Response) => {
        const { email } = req.query;

        // get all orders 
        if (!email) {
            const result = await orderServices.getOrders(email);
            return sendResponse(res, {
                statusCode: 200,
                success: true,
                message: 'Orders fetched successfully!',
                data: result
            })
        }

        // get orders by email 
        const result = await orderServices.getOrders(email);
        // message for wrong email 
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: result
        })
    }
)

export const orderController = {
    createOrder,
    getOrders,
}