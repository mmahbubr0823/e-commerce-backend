import { TOrder } from "./order.interface";
import { Order } from "./order.model";


// create order 
const createOrder = async (payload: TOrder) => {
    const result = await Order.create(payload);
    return result;
}
// get orders 
const getOrders = async (email: any) => {

    // get all orders 
    if (!email) {
        const result = await Order.find();
        return result;
    }

    // get orders for user email 
    const result = await Order.find({ email });
    return result;
}

export const orderServices = {
    createOrder,
    getOrders
}